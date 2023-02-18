import ComponentLayout from "@/components/ComponentLayout";
import DocsLayout from "@/components/DocsLayout";
import Head from "next/head";

export default function Docs() {
  return (
    <main>
      <Head>
        <title>Float UI - Modern UI Components & Templates</title>
        <meta
          name='description'
          content='Beautiful and responsive UI components and templates for React and Vue with Tailwind CSS.'
        />
      </Head>
      <DocsLayout>
        <ComponentLayout />
      </DocsLayout>
    </main>
  );
}
