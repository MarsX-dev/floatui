import {
  IconArrowsexpandLeft,
  IconBxCustomize,
  IconPennibLine,
} from "components/icons";
import { ReactNode } from "react";
import featureCover from "public/feature-cover.svg";
import Image from "next/image";
import Card from "./Card";

type Feature = {
  title: string;
  desc: string;
  icon: ReactNode;
};

export default () => {
  const features: Feature[] = [
    {
      title: "Beautifully designed",
      desc: "Float UI allows you build beautiful and modern websites regardless of your design skills.",
      icon: <IconPennibLine />,
    },
    {
      title: "Fully Responsive",
      desc: "Responsive designed components and templates that look great on any screen.",
      icon: <IconArrowsexpandLeft />,
    },
    {
      title: "Customizable",
      desc: "copy and paste into your apps and experience the power of customizable components.",
      icon: <IconBxCustomize />,
    },
  ];

  return (
    <section className="custom-screen mt-32">
      <div className="max-w-xl mx-auto space-y-4 text-center">
        <h2 className="text-4xl heading">Turn your ideas into reality</h2>
        <p className="text-zinc-400">
          Float UI offers all the vital building blocks you need to transform
          your idea into a great-looking startup.
        </p>
      </div>
      <ul className="space-y-6 gap-6 mt-8 max-w-7xl mx-auto grid-cols-2 sm:grid lg:grid-cols-3 sm:space-y-0">
        {features.map((item: Feature, key: number) => (
          <Card icon={item.icon} title={item.title} desc={item.desc} />
        ))}
      </ul>
    </section>
  );
};
