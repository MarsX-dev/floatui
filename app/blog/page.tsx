import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogCard from "components/ui/BlogCard";
import { getPosts } from "utils/seobot";
import { BlogPost } from "types/types";
import Pagination from "components/ui/Pagination";

const { title, description } = {
  title: "Float UI - Blog",
  description: "The latest about Float UI, and some technical stuff.",
};

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://floatui.com",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default async ({
  searchParams: { page },
}: {
  searchParams: { page: number };
}) => {
  const pageNumber = Math.max((page || 0) - 1, 0);
  const { total, articles } = await getPosts(pageNumber);
  const posts = articles || [];
  const lastPage = Math.ceil(total / 10);

  return (
    <>
      <section className="max-w-3xl px-4 mx-auto mt-base">
        <div className="text-center mt-20">
          <h1 className="text-4xl font-extrabold heading">Blog</h1>
          <p className="mt-3 text-lg text-gray-400">
            The latest about Float UI, and some technical stuff.
          </p>
        </div>
        <ul className="mt-12">
          {posts.map((item: BlogPost, idx: number) => (
            <BlogCard
              key={idx}
              href={item.slug}
              date={item.createdAt}
              title={item.headline}
              desc={item.metaDescription}
            />
          ))}
        </ul>
        {lastPage > 1 && (
          <Pagination
            slug="/blog"
            pageNumber={pageNumber}
            lastPage={lastPage}
          />
        )}
      </section>
    </>
  );
};
