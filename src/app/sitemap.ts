import { getClient } from "@/src/lib/ApolloClient";
import { menus, TMenus } from "@/src/router/router";
import type { MetadataRoute } from "next";
import { GET_SITEMAP } from "./api/Graphql/posts";

const API_URL =
  process.env.NEXT_PUBLIC_DOMAIN || "https://ome.edu.vn/thuong-thuc-doi-song";

const getAllPaths = (menus: TMenus): MetadataRoute.Sitemap => {
  const paths: MetadataRoute.Sitemap = [];

  const collectPaths = (menuList: TMenus) => {
    for (const menu of menuList) {
      if (menu.path && menu.path !== "#") {
        paths.push({ url: `${API_URL}${menu.path}` });
      }

      // Đệ quy vào các childs nếu có
      if (menu.childs && menu.childs.length > 0) {
        collectPaths(menu.childs);
      }
    }
  };
  collectPaths(menus);
  return paths;
};

async function getPostPaths(): Promise<MetadataRoute.Sitemap> {
  try {
    const allPosts: { slug: string }[] = [];
    const batchSize = 100;
    let offset = 0;
    let hasMore = true;

    while (hasMore) {
      const { data } = await getClient().query({
        query: GET_SITEMAP,
        variables: {
          size: batchSize,
          offset: offset
        }
      });

      const posts = data?.posts?.nodes;
      const pageInfo = data?.posts?.pageInfo?.offsetPagination;

      if (posts && Array.isArray(posts)) {
        allPosts.push(...posts);
      }

      hasMore = pageInfo?.hasMore || false;
      offset += batchSize;

      if (!hasMore || !posts || posts.length === 0) {
        break;
      }
    }

    return allPosts.map((post: { slug: string }) => ({
      url: `${API_URL}/${post.slug}`
    }));
  } catch (error) {
    console.error("Failed to fetch posts for sitemap", error);
    return [];
  }
}
export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = getAllPaths(menus);
  const postPaths = await getPostPaths();
  return [...staticPaths, ...postPaths];
}
