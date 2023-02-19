import DocsLayout from "@/components/DocsLayout";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import sections from "@/json/sections.json";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ParsedUrlQuery } from "querystring";
import ComponentLayout from "@/components/ComponentLayout";
import { Component } from "@/types";

type Props = {
  components: Component[];
  pageDetails: {
    section_name: string;
    description: string;
  };
};

export default function Docs({ components, pageDetails }: Props) {
  return (
    <main>
      <Head>
        <title>Float UI - {pageDetails?.section_name}</title>
        <meta name='description' content={pageDetails?.description} />
      </Head>
      <DocsLayout>
        <ul className='space-y-12'>
          {components?.map((item: Component, idx: number) => (
            <li key={idx}>
              <ComponentLayout component={item} />
            </li>
          ))}
        </ul>
      </DocsLayout>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = sections.map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

interface Param extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Param;

  const pageDetails = sections.find((item) => item.slug == `/${slug}`) || null;

  const sectionDir = path.join(process.cwd(), `content/${slug}`);

  const sectionComponentsDir = fs.readdirSync(sectionDir);

  const components = sectionComponentsDir
    .map((filename) => {
      const filePath = path.join(sectionDir, filename);
      const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
      const { data: frontMatter } = matter(markdownWithMeta);

      return {
        ...frontMatter,
      };
    })
    .sort((a, b) => a.created_at - b.created_at);

  return {
    props: {
      pageDetails,
      components,
      slug,
    },
  };
};
