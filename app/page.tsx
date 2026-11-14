import { CoverBackground } from "./cover-background";
import { DockingHeader } from "./docking-header";
import { Lockup, coverEm, lockupLayout } from "./lockup";
import { Sections } from "./sections";
import { site } from "./site";

// 검색엔진이 사이트와 운영 주체를 알아보도록 넣는 구조화 데이터(schema.org).
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/cover/logo.svg`,
      sameAs: site.sameAs,
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      inLanguage: "ko-KR",
      publisher: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: site.name,
      url: site.url,
      description: site.description,
      applicationCategory: "ScienceApplication",
      operatingSystem: "Web",
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

// Figma "cover" (node 7:78) — 1920×1080 아트보드를 화면 크기에 맞춰 비율대로 줄이고 늘린다.
// 아트보드의 10px이 1em이 되도록 기준 글자 크기를 잡고, 안쪽 치수는 모두 em으로 쓴다.
export default function Home() {
  return (
    <main id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <DockingHeader />
      <section
        id="cover"
        className={`relative h-svh min-h-[30rem] w-full overflow-hidden ${coverEm}`}
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
          {/* 커버 아래쪽을 본문 배경(검정)으로 잇는다 */}
          <div className="absolute inset-x-0 bottom-0 h-[16%] bg-linear-to-b from-transparent to-black" />
        </div>

        <div className="relative flex h-full flex-col items-center justify-center px-4">
          {/* 스크롤하면 DockingHeader의 복제본이 이 자리에서 상단바로 옮겨 간다 */}
          <h1 id="cover-logo" className={lockupLayout}>
            <Lockup />
          </h1>
          <p className="cover-fade font-reddit mt-[0.8em] text-[max(3.6em,14px)] whitespace-nowrap text-white/62">
            AI-powered protein–ligand docking platform
          </p>
        </div>
      </section>
      <Sections />
    </main>
  );
}
