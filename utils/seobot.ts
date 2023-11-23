export async function getPosts(page: number) {
  const key = process.env.SEOBOT_API_KEY;
  if (!key) throw Error("SEOBOT_API_KEY enviroment variable must be set");

  try {
    const res = await fetch(
      `https://app.seobotai.com/api/articles?key=${key}&page=${page}&limit=10`
    );
    const result = await res.json();
    return result?.data;
  } catch {
    return { total: 0, articles: [] };
  }
}

export async function getPost(slug: string) {
  const key = process.env.SEOBOT_API_KEY;
  if (!key) throw Error("SEOBOT_API_KEY enviroment variable must be set");

  try {
    const res = await fetch(
      `https://app.seobotai.com/api/article?key=${key}&slug=${slug}`,
      { cache: "no-store" }
    );
    const result = await res.json();
    return result?.data?.article;
  } catch {
    return null;
  }
}
