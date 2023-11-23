const title = "Float UI - Privacy Policy";

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

export default () => {
  return (
    <>
      <section className="mt-20">
        <div className="text-center mx-4">
          <h1 className="text-3xl heading font-extrabold tracking-tight mb-4 sm:text-4.5xl">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 mt-3">
            Your data is protected and respected.
          </p>
        </div>
        <div className="prose prose-invert mt-12 mx-4 sm:mx-auto">
          <h2>Collection of non-personal information</h2>
          <p>
            When you visit the Website our servers automatically record
            information that your browser sends. This data may include
            information such as your device's IP address, browser type and
            version, operating system type and version, language preferences or
            the webpage you were visiting before you came to our Website, pages
            of our Website that you visit, the time spent on those pages,
            information you search for on our Website, access times and dates,
            and other statistics.
          </p>
          <h2>Information transfer and storage</h2>
          <p>
            Depending on your location, data transfers may involve transferring
            and storing your information in a country other than your own. You
            are entitled to learn about the legal basis of information transfers
            to a country outside the European Union or to any international
            organization governed by public international law or set up by two
            or more countries, such as the UN, and about the security measures
            taken by us to safeguard your information. If any such transfer
            takes place, you can find out more by checking the relevant sections
            of this document or inquire with us using the information provided
            in the Contact section.
          </p>
          <h2>Newsletters</h2>
          <p>
            We offer electronic newsletters which you may voluntarily subscribe
            to. You may choose to stop receiving our newsletter or marketing
            emails by following the unsubscribe instructions included in these
            emails or by contacting us. However, you will continue to receive
            essential transactional emails.
          </p>
          <h2>Cookies</h2>
          <p>
            The Website uses "cookies" to help personalize your online
            experience. A cookie is a text file that is placed on your hard disk
            by a web page server. Cookies cannot be used to run programs or
            deliver viruses to your computer. Cookies are uniquely assigned to
            you, and can only be read by a web server in the domain that issued
            the cookie to you. We may use cookies to collect, store, and track
            information for statistical purposes to operate our Website. You
            have the ability to accept or decline cookies. Most web browsers
            automatically accept cookies, but you can usually modify your
            browser setting to decline cookies if you prefer.
          </p>
          <p>
            In addition to using cookies and related technologies as described
            above, we also may permit certain third-party companies to help us
            tailor advertising that we think may be of interest to users and to
            collect and use other data about user activities on the Website.
            These companies may deliver ads that might also place cookies and
            otherwise track user behavior.
          </p>
        </div>
      </section>
    </>
  );
};
