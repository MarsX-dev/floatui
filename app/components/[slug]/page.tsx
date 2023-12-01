import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PreviewApp from "components/ui/Preview/PreviewApp";
import sections from "sections/sections.json";
import { serialize } from "next-mdx-remote/serialize";
import { useRouter } from "next/navigation";

type Params = {
  slug: string;
};

type PageDetails = {
  description: string;
  section_name: string;
};

export async function generateStaticParams() {
  return sections.map((item) => ({
    slug: item.slug.slice(1),
  }));
}

export async function generateMetadata({
  params: { slug },
}: {
  params: Params;
}) {
  const pageDetails = sections.find(
    (item) => item.slug == `/${slug}`
  ) as PageDetails;

  return {
    metadataBase: new URL("https://floatui.com"),
    alternates: {
      canonical: `/components/${slug}`,
    },
    title: pageDetails
      ? `${pageDetails.section_name} - Tailwind CSS Components`
      : "Page Not Found",
    description: (pageDetails && pageDetails.description) || "",
    openGraph: {
      title: pageDetails
        ? `${pageDetails.section_name} - Tailwind CSS Components`
        : "",
      description: (pageDetails && pageDetails.description) || "",
    },
    twitter: {
      title: pageDetails
        ? `${pageDetails.section_name} - Tailwind CSS Components`
        : "",
      description: (pageDetails && pageDetails.description) || "",
    },
  };
}

export default async ({ params: { slug } }: { params: Params }) => {
  try {
    const pageDetails = sections.find(
      (item) => item.slug == `/${slug}`
    ) as PageDetails;

    const dir = path.join(process.cwd(), `componentsDB/${slug}`);

    const files = fs.readdirSync(dir);

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
        <div>
          <h1 className="heading text-3xl">{pageDetails.section_name}</h1>
          <p className="mt-3 text-zinc-300">{pageDetails.description}</p>
        </div>
        <div className="mt-12 space-y-12">
          <PreviewApp components={data} />
        </div>
      </>
    );
  } catch (err) {
    const router = useRouter();
    return <></>;
  }
};
