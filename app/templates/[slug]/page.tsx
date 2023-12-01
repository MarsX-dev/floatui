import TemplateTechStack from "components/ui/TemplateTechStackGroup";
import { fetchDocs, getDoc } from "../../../firebase/config";
import Head from "next/head";
import { Templates } from "types/types";
import { QueryDocumentSnapshot, QuerySnapshot } from "firebase/firestore";
import LinkItem from "components/ui/LinkItem";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

type Params = {
  slug: string;
};

export async function generateMetadata({
  params: { slug },
}: {
  params: Params;
}) {
  const querySnapshot = await getDoc(slug, "templates", "slug");
  const template = querySnapshot.docs.map((item: QueryDocumentSnapshot) => {
    const { banner_url, template_name, preview_url, description } = item.data();

    return {
      banner_url,
      template_name,
      preview_url,
      description,
    };
  })[0];

  return {
    metadataBase: new URL("https://floatui.com"),
    alternates: {
      canonical: `/templates/${slug}`,
    },
    title: `Float UI - ${template.template_name} Tailwind CSS Template`,
    description: template.description,
    openGraph: {
      images: template.banner_url,
      title: `Float UI - ${template.template_name} Tailwind CSS Template`,
      description: template.description,
    },
    twitter: {
      images: [template.banner_url],
      title: `Float UI - ${template.template_name} Tailwind CSS Template`,
      description: template.description,
    },
  };
}

export default async ({ params: { slug } }: { params: Params }) => {
  const querySnapshot = await getDoc(slug, "templates", "slug");
  const template = querySnapshot.docs.map((item: QueryDocumentSnapshot) => {
    const {
      id,
      banner_url,
      template_name,
      product_id,
      preview_url,
      price,
      description,
      details,
      templateFile,
    } = item.data();

    return {
      id: item.id,
      banner_url,
      template_name,
      product_id,
      preview_url,
      price,
      description,
      details,
      templateFile,
    };
  })[0];

  return (
    <>
      <section className="mt-24">
        <div className="max-w-screen max-w-2xl mx-auto lg:max-w-none">
          <div className="gap-12 lg:flex">
            <div className="flex-1 rounded-xl">
              <img src={template?.banner_url} className="rounded-xl" />
            </div>
            <div className="flex-1 space-y-6 mt-12 lg:max-w-sm lg:mt-0 xl:max-w-md">
              <div className="text-zinc-50 font-semibold flex justify-between items-center">
                <h1 className="text-3xl md:text-4xl">
                  {template?.template_name}
                </h1>
                <div className="flex items-center gap-x-2">
                  <del className="text-lg">${template?.price}</del>
                  <span className="text-xl sm:text-2xl">$0</span>
                </div>
              </div>
              <p className="mt-6 text-zinc-300 md:text-lg">
                {template?.description}
              </p>
              <div>
                <h3 className="text-zinc-200 font-medium">
                  Built with modern technologies
                </h3>
                <TemplateTechStack />
              </div>
              <div className="text-sm font-medium mt-6">
                <div className="flex flex-wrap items-center gap-3">
                  <LinkItem
                    href={template?.preview_url || ""}
                    className="inline-flex w-full justify-center items-center gap-x-2 duration-200 shadow hover:bg-zinc-100 group sm:w-auto"
                  >
                    Full preview
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 duration-200 group-hover:translate-x-1" />
                  </LinkItem>
                  <LinkItem
                    target="_blank"
                    href={`https://drive.google.com/u/0/uc?id=${template?.templateFile}`}
                    variant="shiny"
                    className="inline-block w-full hover:bg-zinc-700 sm:w-auto"
                  >
                    Download template
                  </LinkItem>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mt-12 leading-relaxed prose prose-invert"
            dangerouslySetInnerHTML={{ __html: template?.details }}
          ></div>
        </div>
      </section>
    </>
  );
};
