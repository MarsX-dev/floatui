import sections from "sections/sections.json";
import { fetchDocs } from "../../firebase/config";
const BASE_URL = "https://floatui.com";

type SitemapItem = { slug: string; lastmod: string };

async function getBlogSiteMap() {
  const key = process.env.SEOBOT_API_KEY;
  if (!key)
    throw Error(
      "SEOBOT_API_KEY enviroment variable must be set. You can use the DEMO key a8c58738-7b98-4597-b20a-0bb1c2fe5772 for testing - please set it in the root .env.local file."
    );

  try {
    const res = await fetch(`https://app.seobotai.com/api/sitemap?key=${key}`, {
      cache: "no-store",
    });
    const result = await res.json();
    return result?.data;
  } catch {
    return { articles: [], categories: [], tags: [] };
  }
}

function toSitemapRecord(loc: string, updatedAt: string) {
  return `<url><loc>${new URL(
    loc,
    BASE_URL
  ).toString()}</loc><lastmod>${updatedAt}</lastmod></url>`;
}

async function generateSiteMap() {
  const querySnapshot = await fetchDocs("templates");
  const blogSiteMap = await getBlogSiteMap();
  const templates = await querySnapshot.docs;

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${BASE_URL}</loc>
     </url>
     <url>
       <loc>${BASE_URL}/components</loc>
     </url>
    <url>
      <loc>${BASE_URL}/templates</loc>
    </url>
    <url>
     <loc>${BASE_URL}/blog</loc>
    </url>
    ${blogSiteMap.articles.map((i: SitemapItem) =>
      toSitemapRecord(`/blog/${i.slug}`, i.lastmod)
    )}
     ${sections
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`${BASE_URL}/components${slug}`}</loc>
       </url>
     `;
       })
       .join("")}
       ${templates
         .map((item) => {
           const { slug } = item.data();

           return `
            <url>
              <loc>${`${BASE_URL}/templates/${slug}`}</loc>
            </url>
            `;
         })
         .join("")}
   </urlset>
 `;
}

export async function GET() {
  const body = await generateSiteMap();

  return new Response(body, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
      "content-type": "application/xml",
    },
  });
}
