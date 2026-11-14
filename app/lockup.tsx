import Image from "next/image";

// 로고 심볼 + OPENDOCK 워드마크. 치수는 모두 em이라 부모의 글자 크기를 따라간다.
// 커버 한가운데와 상단바로 날아가는 복제본이 같은 마크업을 쓴다.
export function Lockup() {
  return (
    <>
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
        <span aria-hidden className="font-reddit mt-[1.25em] ml-[0.25em] text-[0.25em] font-normal tracking-normal text-white/62">
          TM
        </span>
      </span>
    </>
  );
}

// 커버 아트보드(1920×1080)의 10px을 1em으로 잡는 기준 글자 크기.
export const coverEm = "text-[clamp(3.4px,0.5208vw,13px)]";
export const lockupLayout = "flex items-center gap-[2.3em]";
