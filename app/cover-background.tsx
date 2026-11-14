"use client";

import Image from "next/image";
import { ShaderEffect, type Shader } from "@figma/expressive-components";
import { setup, render, manifest } from "@/lib/custom-effects/lens-distortion";

// Figma 7:93 "Lens distortion" 효과. 셰이더 배열은 렌더마다 다시 만들지 않도록 모듈 범위에 둔다.
const shaders: Shader[] = [
  {
    setup,
    render,
    manifest,
    params: {
      chromaticMode: 0,
      distortionStrength: 0,
      aberrationStrength: 0.1599999964237213,
      centre: { x: 60.70435333251953, y: 50.7222900390625 },
      quality: 1,
    },
  },
];

// 배경 이미지 두 겹(7:99, 7:91). 아트보드 기준 left -642, top -22, 2562×1442.
// WebGPU·HTML-in-Canvas를 지원하지 않는 브라우저에서는 ShaderEffect가 이미지를 일반 DOM으로 그린다.
export function CoverBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute top-[-2.04%] left-[-33.44%] h-[133.5%] w-[133.43%]">
      <ShaderEffect shaders={shaders} className="size-full">
        <div className="absolute inset-0 opacity-40 mix-blend-plus-lighter blur-[1.34em]">
          <Image src="/cover/background.png" alt="" fill priority sizes="134vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 opacity-30 mix-blend-color-dodge blur-[1.34em]">
          <Image src="/cover/background.png" alt="" fill sizes="134vw" className="object-cover" />
        </div>
      </ShaderEffect>
    </div>
  );
}
