import HeroBgGradient from "components/HeroBgGradient";
import TemplateCard from "components/ui/TemplateCard";
import { fetchDocs } from "../../firebase/config";
import { Templates } from "types/types";

const { title, desc } = {
  title: "Float UI - Beautiful Tailwind website templates",
  desc: "Beautiful and responsive UI components and templates for React, Nextjs with Tailwind CSS.",
};

export const metadata = {
  metadataBase: new URL("https://floatui.com"),
  title,
  description: desc,
  openGraph: {
    title,
    description: desc,
  },
  twitter: {
    title,
    description: desc,
  },
};

export default async () => {
  const querySnapshot = await fetchDocs("templates");
  const templates = await querySnapshot.docs
    .map((item) => {
      const {
        banner_url,
        template_name,
        price,
        description,
        created_at,
        slug,
      } = item.data();

      return {
        banner_url,
        template_name,
        price,
        slug,
        description,
        created_at,
      };
    })
    .sort((a, b) => b.created_at - a.created_at);

  return (
    <>
      <section className="max-w-screen mt-20">
        <HeroBgGradient className="absolute inset-x-0 mx-auto duration-500 top-0 -translate-x-32 sm:-translate-x-10" />
        <div className="relative">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <h1 className="text-4xl heading sm:text-5xl">
              Professional website templates for your next project
            </h1>
            <p className="text-zinc-400 max-w-xl mx-auto">
              A collection of professional and beautifully designed website
              templates, built with React, Next.js with Tailwind CSS.
            </p>
          </div>
          <ul
            id="templates"
            className="mt-32 space-y-7 divide-y divide-zinc-800 gap-14 grid-cols-2 lg:grid lg:space-y-0 lg:divide-y-0"
          >
            {templates.map((item, idx) => (
              <TemplateCard key={idx} item={item as Templates} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
