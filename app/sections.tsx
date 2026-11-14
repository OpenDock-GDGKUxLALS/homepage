import { GITHUB_URL, comparisons, engines, steps } from "./content";

function Heading({ label, title, lead }: { label: string; title: React.ReactNode; lead?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="font-reddit text-sm tracking-[0.18em] text-sky-300/80 uppercase">{label}</p>
      <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl sm:leading-[1.15]">
        {title}
      </h2>
      {lead && <p className="mt-5 text-lg leading-relaxed text-pretty text-white/62">{lead}</p>}
    </div>
  );
}

const section = "mx-auto max-w-6xl scroll-mt-16 px-6 py-24 sm:py-32";

export function Sections() {
  return (
    <div className="bg-black">
      <section id="process" className={section}>
        <Heading
          label="Process"
          title={
            <>
              신약 발굴의 첫 단계를
              <br />
              지금의 방식으로
            </>
          }
          lead="OpenDock은 구조 입력부터 도킹, AI 구조 예측, 결과 비교까지를 하나의 흐름으로 잇습니다. 설치도 커맨드라인도 필요 없습니다."
        />
        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="bg-[#05080c] p-7">
              <p className="font-reddit text-sm text-sky-300/80">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-8 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-white/62">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="compare" className={section}>
        <Heading
          label="Before / After"
          title="연구자는 결과 해석에 집중합니다"
          lead="도구를 다루는 데 쓰던 시간을 줄이고, 그 시간을 후보 물질을 살펴보는 데 씁니다."
        />
        <div className="mt-16 border-t border-white/10">
          <div className="hidden grid-cols-[8rem_1fr_1fr] gap-8 py-4 text-sm text-white/40 sm:grid">
            <span />
            <span>기존 방식</span>
            <span className="text-sky-300/80">OpenDock</span>
          </div>
          {comparisons.map((row) => (
            <div
              key={row.topic}
              className="grid gap-2 border-t border-white/10 py-6 sm:grid-cols-[8rem_1fr_1fr] sm:gap-8"
            >
              <h3 className="font-semibold">{row.topic}</h3>
              <p className="leading-relaxed text-white/45">{row.before}</p>
              <p className="leading-relaxed text-white">{row.after}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="engines" className={section}>
        <Heading
          label="Engines"
          title="물리 기반 도킹과 AI 구조 예측을 한곳에서"
          lead="서로 다른 원리로 계산한 결과를 같은 입력으로 돌려 보고, 어디가 일치하고 어디가 갈리는지 확인합니다."
        />
        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {engines.map((engine) => (
            <li
              key={engine.name}
              className={`rounded-2xl border p-6 ${engine.ready ? "border-sky-300/30 bg-sky-300/[0.06]" : "border-white/10"}`}
            >
              <p className={`text-xs ${engine.ready ? "text-sky-300" : "text-white/40"}`}>
                {engine.ready ? "지원" : "예정"}
              </p>
              <h3 className="font-reddit mt-6 text-lg font-medium">{engine.name}</h3>
              <p className="mt-1 text-sm text-white/45">{engine.kind}</p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>OpenDock — GDGoC KU × LALS 신약개발 협업 프로젝트</p>
          <a href={GITHUB_URL} className="transition-colors hover:text-white">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
