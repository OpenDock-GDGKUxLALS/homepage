import { GITHUB_URL } from "./content";

// 검색엔진과 링크 미리보기에 쓰는 사이트 정보. canonical 주소는 www 없는 도메인으로 통일한다.
export const site = {
  url: "https://opendock.co.kr",
  name: "OpenDock",
  title: "OpenDock — AI 단백질–리간드 도킹 플랫폼",
  tagline: "AI-powered protein–ligand docking platform",
  description:
    "설치도 커맨드라인도 없이 웹 브라우저에서 AutoDock Vina 도킹과 AlphaFold3 같은 AI 구조 예측을 실행하고, 결과를 3D로 나란히 비교하는 신약개발 플랫폼입니다. GDGoC KU × LALS 협업 프로젝트.",
  keywords: [
    "OpenDock",
    "분자 도킹",
    "단백질 리간드 도킹",
    "protein-ligand docking",
    "AutoDock Vina",
    "AlphaFold3",
    "AI 구조 예측",
    "신약개발",
    "drug discovery",
    "GDGoC KU",
    "LALS",
  ],
  sameAs: [GITHUB_URL],
};
