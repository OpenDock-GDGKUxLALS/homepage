import Image from "next/image";
import { CoverBackground } from "./cover-background";

// Figma "cover" (node 7:78) — 1920×1080 아트보드를 화면 크기에 맞춰 비율대로 줄이고 늘린다.
// 아트보드의 10px이 1em이 되도록 기준 글자 크기를 잡고, 안쪽 치수는 모두 em으로 쓴다.
export default function Home() {
  return (
    <main
      className="relative h-svh min-h-[30rem] w-full overflow-hidden text-[clamp(3.4px,0.5208vw,13px)]"
      style={{
        backgroundImage:
          "linear-gradient(66.7deg, rgb(0 61 98) 7.95%, rgb(0 0 0) 70.38%)",
      }}
    >
      <CoverBackground />

      {/* 위에서 아래로 어두워지는 덮개 */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-[#0e0e0e] to-[rgb(115_115_115/0)] mix-blend-multiply" />
        <div className="absolute inset-0 bg-linear-to-b from-[#0e0e0e] to-[rgb(115_115_115/0)] mix-blend-multiply" />
        <div className="absolute inset-0 bg-linear-to-b from-black from-[32.82%] to-[rgb(115_115_115/0)] mix-blend-multiply" />
      </div>

      <div className="relative flex h-full flex-col items-center justify-center px-4">
        <h1 className="flex items-center gap-[2.3em]">
          <Image
            src="/cover/logo.svg"
            alt=""
            width={174}
            height={128}
            priority
            className="h-[12.8em] w-[17.4em] shrink-0"
          />
          <span className="font-display flex items-start text-[14.4em] leading-none font-medium tracking-[-0.01em] whitespace-nowrap text-white">
            OPENDOCK
            <span className="font-reddit mt-[1.25em] ml-[0.25em] text-[0.25em] font-normal tracking-normal text-white/62">
              TM
            </span>
          </span>
        </h1>
        <p className="font-reddit mt-[0.8em] text-[max(3.6em,14px)] whitespace-nowrap text-white/62">
          AI-powered protein–ligand docking platform
        </p>
      </div>
    </main>
  );
}
