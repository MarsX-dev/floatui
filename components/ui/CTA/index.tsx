import LinkItem from "../LinkItem";

export default () => (
  <section className="mt-32 custom-screen">
    <div className="max-w-3xl mx-auto space-y-4 text-center">
      <h2 className="text-4xl heading">
        Make your ideas come to life with no time
      </h2>
      <p className="text-zinc-400 max-w-xl mx-auto">
        Copy and paste our ready to use components into your apps, and save
        time, or use it in MarsX.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <LinkItem
          href="/components"
          variant="shiny"
          className="inline-block w-full hover:bg-zinc-700 sm:w-auto"
        >
          Get started
        </LinkItem>
        <LinkItem
          href="https://marsx.dev/?ref=floatui"
          target="_blank"
          className="inline-block w-full sm:w-auto"
        >
          Use in MarsX
        </LinkItem>
      </div>
    </div>
  </section>
);
