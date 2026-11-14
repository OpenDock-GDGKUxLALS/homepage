import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "./site";

// 링크 미리보기(카카오톡, 슬랙, X 등)에 뜨는 1200×630 카드. 커버 화면의 로고와 배경색을 따른다.
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logo = await readFile(join(process.cwd(), "public/cover/logo.svg"));
const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "linear-gradient(66.7deg, rgb(0, 61, 98) 7.95%, rgb(0, 0, 0) 70.38%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          <img src={logoSrc} width={130} height={96} alt="" />
          <div style={{ fontSize: 112, fontWeight: 600, letterSpacing: "-0.01em" }}>OPENDOCK</div>
        </div>
        <div style={{ marginTop: 28, fontSize: 36, color: "rgba(255,255,255,0.62)" }}>
          {site.tagline}
        </div>
      </div>
    ),
    size,
  );
}
