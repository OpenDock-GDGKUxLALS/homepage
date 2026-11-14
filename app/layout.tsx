import type { Metadata } from "next";
import { Reddit_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

const redditSans = Reddit_Sans({
  variable: "--font-reddit-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenDock — AI-powered protein–ligand docking platform",
  description:
    "GDGoC KU × LALS 신약개발 협업 프로젝트. 커맨드라인 없이 웹 브라우저에서 AutoDock Vina와 AI 구조 예측 모델을 실행하고 결과를 비교합니다.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${redditSans.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
