import Link from "next/link";
import { getPost } from "utils/seobot";
import moment from "moment";
import HighlightCodeSeobot from "components/HighlightCodeSeobot";

type Params = {
  slug: string;
};

export async function generateMetadata({
  params: { slug },
}: {
  params: Params;
}) {
  const post = await getPost(slug);

  const { headline, metaDescription } = post;

  return {
    metadataBase: new URL("https://floatui.com"),
    title: `${headline} - Float UI Blog`,
    description: metaDescription,
    alternates: {
      canonical: `/blog/${slug}`,
    },

    openGraph: {
      type: "article",
      title: `${headline} - Float UI Blog`,
      description: metaDescription,
    },
    twitter: {
      title: `${headline} - Float UI Blog`,
      description: metaDescription,
    },
  };
}

export default async ({ params: { slug } }: { params: Params }) => {
  const post = await getPost(slug);

  const { headline, html, createdAt } = post;

  return (
    <>
      <section className="mt-20">
        <div className="max-w-4xl px-4 mx-auto mb-12">
          <Link
            href="/blog"
            className="flex items-center font-medium text-zinc-400 hover:text-zinc-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
        <div className="pb-8 text-center">
          <div className="max-w-2xl px-4 mx-auto">
            <h1 className="text-3xl font-extrabold text-zinc-100">
              {headline}
            </h1>
            <span className="block mt-4 text-zinc-400">
              {moment(createdAt).format("dddd, MMMM D, YYYY")}
            </span>
          </div>
        </div>
        <article
          className="max-w-2xl px-4 mx-auto mt-12 prose leading-relaxed prose-invert"
          dangerouslySetInnerHTML={{ __html: html }}
        ></article>
        <HighlightCodeSeobot />
      </section>
    </>
  );
};
