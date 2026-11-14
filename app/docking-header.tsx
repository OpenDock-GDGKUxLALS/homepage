"use client";

import { useLayoutEffect, useRef } from "react";
import { GITHUB_URL, nav } from "./content";
import { Lockup, coverEm, lockupLayout } from "./lockup";

const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// 커버 한가운데의 로고가 스크롤에 맞춰 줄어들며 상단바 왼쪽 자리로 들어간다.
// 커버 안의 원본(#cover-logo)은 자리만 지키고, 화면에 고정된 복제본이 그 자리에서 상단바의 슬롯까지 이동한다.
// 진행도는 <html>의 --dock 변수(0~1)로도 내보내, 상단바 배경과 커버 문구가 CSS만으로 따라오게 한다.
export function DockingHeader() {
  const logoRef = useRef<HTMLAnchorElement>(null);
  const slotRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const logo = logoRef.current;
    const slot = slotRef.current;
    const origin = document.getElementById("cover-logo");
    const cover = document.getElementById("cover");
    if (!logo || !slot || !origin || !cover) return;

    const root = document.documentElement;
    let from = { x: 0, y: 0, h: 1 };
    let to = { x: 0, y: 0, h: 1 };
    let distance = 1;
    let frame = 0;

    const update = () => {
      frame = 0;
      const p = Math.min(1, Math.max(0, window.scrollY / distance));
      const t = easeInOut(p);
      const x = lerp(from.x, to.x, t);
      const y = lerp(from.y, to.y, t);
      const scale = lerp(1, to.h / from.h, t);
      logo.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
      root.style.setProperty("--dock", p.toFixed(4));
      root.toggleAttribute("data-docked", p > 0.9);
    };

    const measure = () => {
      const o = origin.getBoundingClientRect();
      const s = slot.getBoundingClientRect();
      from = { x: o.left + window.scrollX, y: o.top + window.scrollY, h: o.height || 1 };
      to = { x: s.left, y: s.top, h: s.height };
      distance = Math.max(1, cover.offsetHeight * 0.6);
      update();
    };

    const onScroll = () => {
      frame ||= requestAnimationFrame(update);
    };

    measure();
    origin.style.opacity = "0";
    logo.style.visibility = "visible";

    const observer = new ResizeObserver(measure);
    observer.observe(cover);
    observer.observe(origin);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      origin.style.opacity = "";
      logo.style.visibility = "";
      root.style.removeProperty("--dock");
      root.removeAttribute("data-docked");
    };
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 h-16">
        {/* 로고가 자리에 닿을 즈음 나타나는 상단바 배경 */}
        <div
          aria-hidden
          className="dock-reveal absolute inset-0 border-b border-white/10 bg-black/60 backdrop-blur-xl"
        />
        <div className="relative mx-auto flex h-full max-w-6xl items-center justify-between px-6">
          {/* 로고가 들어올 자리. 높이가 곧 상단바에서의 로고 높이다. */}
          <span ref={slotRef} aria-hidden className="block h-7 w-px" />
          <div className="dock-reveal dock-nav flex items-center gap-8">
            <nav className="hidden gap-8 text-sm text-white/62 sm:flex">
              {nav.map((item) => (
                <a key={item.href} href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href={GITHUB_URL}
              className="rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <a
        ref={logoRef}
        href="#top"
        aria-label="OpenDock 맨 위로"
        className={`${coverEm} ${lockupLayout} invisible fixed top-0 left-0 z-40 origin-top-left`}
      >
        <Lockup />
      </a>
    </>
  );
}
