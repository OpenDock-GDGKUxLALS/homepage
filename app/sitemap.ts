import type { MetadataRoute } from "next";
import { site } from "./site";

// 지금은 한 페이지짜리 사이트라 루트 주소 하나만 올린다. 페이지가 늘면 여기에 더한다.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, changeFrequency: "monthly", priority: 1 }];
}
