import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "페이지를 찾을 수 없습니다" };

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#05080c] px-6 text-center text-white">
      <p className="font-reddit text-sm text-sky-300">404</p>
      <h1 className="text-2xl font-semibold">페이지를 찾을 수 없습니다</h1>
      <Link href="/" className="text-sm text-white/60 transition-colors hover:text-white">
        홈으로 돌아가기
      </Link>
    </main>
  );
}
