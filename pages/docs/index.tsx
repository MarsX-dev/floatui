import DocsLayout from "@/components/DocsLayout";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import { GetStaticProps } from "next";

export default function Docs({
  mdxSource,
}: {
  mdxSource: MDXRemoteProps;
  title: string;
}) {
  return (
    <main>
      <Head>
        <title>Float UI - Introduction</title>
        <meta
          name='description'
          content='Beautiful and responsive UI components and templates for React and Vue with Tailwind CSS.'
        />
      </Head>
      <DocsLayout>
        <article className='prose max-w-3xl'>
          <MDXRemote {...mdxSource} />
        </article>
      </DocsLayout>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), "content/intro.md"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      mdxSource,
      ...frontMatter,
    },
  };
};
