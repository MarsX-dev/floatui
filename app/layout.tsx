"use client";

import { Inter } from "next/font/google";
import Script from "next/script";
import "./tailwind.css";
import "./customize.css";
import "./prismjs-theme.css";
import Navbar from "components/ui/Navbar";
import Footer from "components/ui/Footer/Footer";
import { usePathname } from "next/navigation";
import ProgressBarNav from "components/ProgressBarNav";

const inter = Inter({ subsets: ["latin"] });

const GA_ID = process.env.GA_ID;
const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION;

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isInComponentsPage = pathname.includes("/components");

  return (
    <html lang="en" className="bg-zinc-950">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=3"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@float_ui" />
        <meta name="twitter:creator" content="@float_ui" />
        <link rel="icon" href="/favicon.ico" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <meta
          name="google-site-verification"
          content={GOOGLE_SITE_VERIFICATION}
        />
        <meta name="msvalidate.01" content="D00EDAC78FB47DDD869F2C18FD8A6572" />
        <Script
          async
          strategy="lazyOnload"
          defer
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${GA_ID}');
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ProgressBarNav />
        <div
          className={
            isInComponentsPage
              ? "sticky z-50 top-0 bg-zinc-950 border-zinc-800 xl:border-b"
              : ""
          }
        >
          <Navbar />
        </div>
        <main>{children}</main>
        {!isInComponentsPage ? <Footer /> : ""}
      </body>
    </html>
  );
}
