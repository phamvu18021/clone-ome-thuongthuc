import { GET_SEO_TRANG_CHU } from "@/src/app/api/Graphql/trangChu";
import HomePage from "@/src/app/home/HomePage";
import { getSeoData } from "@/src/utils/getSeoData";
import { generateMetadataFromFullHead } from "@/src/utils/seoUtils";
import { Metadata } from "next";

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getSeoData(GET_SEO_TRANG_CHU, "pageBy");

  return {
    ...generateMetadataFromFullHead(
      seo.fullHead || "",
      seo.focusKeywords || ""
    ),
    robots: "index, follow"
  };
}

export default function Home() {
  return <HomePage />;
}
