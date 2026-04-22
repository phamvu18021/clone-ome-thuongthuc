import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private"
    },
    sitemap: `https://ome.edu.vn/thuong-thuc-doi-song/sitemap.xml`
  };
}
