export const GITHUB_URL = "https://github.com/OpenDock-GDGKUxLALS";

export const nav = [
  { href: "#process", label: "프로세스" },
  { href: "#compare", label: "달라지는 점" },
  { href: "#engines", label: "엔진" },
];

export const steps = [
  {
    title: "입력",
    body: "단백질 구조나 서열, 그리고 리간드의 SMILES만 준비하면 됩니다.",
  },
  {
    title: "전처리",
    body: "포맷 변환과 Grid Box 설정을 화면에서 확인하며 진행합니다. 결과를 좌우하는 설정을 기본값 뒤에 숨기지 않습니다.",
  },
  {
    title: "실행",
    body: "물리 기반 도킹과 AI 구조 예측을 작업 큐에 올려 두고, 진행 상태를 브라우저에서 확인합니다.",
  },
  {
    title: "비교",
    body: "도킹 포즈와 AI가 예측한 복합체 구조를 3D로 나란히 놓고 스코어와 신뢰도를 함께 봅니다.",
  },
];

export const comparisons = [
  {
    topic: "시작",
    before: "설치와 환경 설정, 포맷 변환부터 막힙니다.",
    after: "웹 브라우저만 있으면 바로 시작합니다.",
  },
  {
    topic: "실행",
    before: "터미널을 열어 둔 채 몇 시간씩 기다립니다.",
    after: "작업 큐가 대신 돌리고 상태를 알려 줍니다.",
  },
  {
    topic: "전처리",
    before: "어떤 설정으로 돌렸는지 나중에 알기 어렵습니다.",
    after: "전처리 단계와 설정값이 화면에 그대로 남습니다.",
  },
  {
    topic: "해석",
    before: "Vina 결과와 AI 결과를 따로 열어 봅니다.",
    after: "두 결과를 한 화면에서 나란히 비교합니다.",
  },
];

export const engines = [
  { name: "AutoDock Vina", kind: "물리 기반 도킹", ready: true },
  { name: "AlphaFold3", kind: "AI 구조 예측", ready: true },
  { name: "Protenix", kind: "AI 구조 예측", ready: false },
  { name: "Boltz-2", kind: "AI 구조 예측", ready: false },
  { name: "Chai-1", kind: "AI 구조 예측", ready: false },
];
