import { getSeoData } from "@/src/utils/getSeoData";
import { generateMetadataFromFullHead } from "@/src/utils/seoUtils";
import { Metadata } from "next";
import { ReactNode } from "react";
import { GET_SEO_LAM_DEP } from "@/src/app/api/Graphql/lamDep";

export const revalidate = 300;
export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getSeoData(GET_SEO_LAM_DEP, "pageBy");

  return {
    ...generateMetadataFromFullHead(
      seo.fullHead || "",
      seo.focusKeywords || ""
    ),
    robots: "index, follow"
  };
}

const Layout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
