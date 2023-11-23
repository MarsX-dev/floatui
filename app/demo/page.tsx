import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import PreviewApp from "components/ui/Preview/PreviewApp";
import HeroBgGradient from "components/HeroBgGradient";
import { serialize } from "next-mdx-remote/serialize";

const title = "Float UI - Float UI components demo";

export const metadata = {
  metadataBase: new URL("https://floatui.com"),
  title,
  openGraph: {
    title,
    url: "https://floatui.com",
  },
  twitter: {
    title,
  },
};

export default async () => {
  try {
    const dir = path.join(process.cwd(), `demo`);

    const files = fs.readdirSync(dir);

    // const data: any = files.map((filename) => {
    //   const filePath = path.join(dir, filename);
    //   const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
    //   const { data: frontMatter } = matter(markdownWithMeta);

    //   return {
    //     ...frontMatter,
    //   };
    // });

    const data: any = await Promise.all(
      files.map(async (filename) => {
        const filePath = path.join(dir, filename);
        const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
        const { data: frontMatter, content } = matter(markdownWithMeta);
        const mdxSource = await serialize(content);
        return {
          ...frontMatter,
          mdxSource,
        };
      })
      // .sort((a, b) => a.created_at - b.created_at)
    );

    return (
      <>
        <section className="max-w-screen mt-20">
          <HeroBgGradient className="absolute inset-x-0 mx-auto duration-500 top-0 -translate-x-32 sm:-translate-x-10" />
          <div className="relative">
            <div className="max-w-3xl mx-auto space-y-4 text-center">
              <h1 className="text-4xl heading sm:text-5xl">
                Discover the power of our UI Components with live demos
              </h1>
              <p className="text-zinc-400 max-w-xl mx-auto">
                Take a closer look at our UI components and see how they can
                elevate your website or web application
              </p>
            </div>
          </div>
          <div className="mt-24 space-y-12">
            <PreviewApp components={data} />
          </div>
          <div className="flex justify-center mt-12 text-sm font-medium">
            <Link
              href="/components"
              className="flex items-center justify-center gap-1 py-3 px-4 rounded-md text-center text-white border-none bg-zinc-800 shadow-md w-auto hover:bg-zinc-700 duration-150 sm:py-2.5"
            >
              Browse all components
            </Link>
          </div>
        </section>
      </>
    );
  } catch (err) {
    return <></>;
  }
};
