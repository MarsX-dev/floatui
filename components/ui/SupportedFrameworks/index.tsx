import FrameworksTabs from "./FrameworksTabs";
import PreviewCard from "./PreviewCard";

export default () => {
  return (
    <section className="mt-32">
      <div className="custom-screen">
        <div className="max-w-xl mx-auto space-y-4 text-center">
          <h2 className="text-4xl heading">Use your favorite framework</h2>
          <p className="text-zinc-400">
            Copy and paste the components you want with your favorite JS
            framework
          </p>
        </div>
        <div className="mt-10 flex items-center justify-between gap-x-6">
          <FrameworksTabs />
          <PreviewCard />
        </div>
      </div>
    </section>
  );
};
