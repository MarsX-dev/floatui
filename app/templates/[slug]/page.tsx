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
    };
  })[0];

  return (
    <>
      {/* <PaddleLoader />
      <Head>
        <meta name='robots' content='index, follow' />
        <meta property='og:type' content='article' />
        <meta name='twitter:description' content={template?.description} />
        <meta property='og:image' content={template?.banner_url} />
        <meta name='twitter:image' content={template?.banner_url} />
        <meta
          name='twitter:title'
          content={`${template?.template_name} - Float UI`}
        />
        <meta
          property='og:title'
          content={`${template?.template_name} - Float UI`}
        />
        <meta property='og:description' content={""} />
        <meta name='description' content={template?.description} />
        <title>{template?.template_name} - Float UI</title>
      </Head>
      <Nav /> */}
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
                    href="/"
                    variant="shiny"
                    className="inline-block w-full hover:bg-zinc-700 sm:w-auto"
                  >
                    Download template
                  </LinkItem>
                </div>
                {/* <Link
                    href='/dashboard/templates'
                    className='flex items-center justify-center gap-1 py-3 px-4 rounded-lg text-center text-white dark:text-white border-none bg-gray-800 dark:bg-indigo-600 shadow w-full hover:bg-gray-700 dark:hover:bg-indigo-700 sm:w-auto md:py-2.5'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path
                        fillRule='evenodd'
                        d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Download template
                  </Link>
                <a
                  href={template?.preview_url}
                  target='_blank'
                  className='flex items-center justify-center gap-1 py-3 px-5 rounded-lg text-center text-gray-800 dark:text-gray-300 duration-150 hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-none w-full sm:w-auto md:py-2.5'>
                  Full preview
                </a> */}
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
