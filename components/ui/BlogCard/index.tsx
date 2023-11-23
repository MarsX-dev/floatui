import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import Link from "next/link";

export default ({
  href,
  date,
  title,
  desc,
}: {
  href: string;
  date: string;
  title: string;
  desc: string;
}) => {
  return (
    <li className="mt-5 pt-12">
      <Link href={"/blog/" + href}>
        <span className="block text-zinc-400 text-sm">
          {moment(date).format("dddd, MMMM D, YYYY")}
        </span>
        <div className="mt-2">
          <h3 className="inline-block text-lg text-zinc-100 font-semibold hover:underline sm:text-xl">
            {title}
          </h3>
          <p className="text-zinc-500 mt-2 leading-relaxed line-clamp-2">
            {desc}
          </p>
        </div>
        <button className="mt-2 outline-none flex items-center text-[14px] text-indigo-400 decoration-indigo-600 hover:underline">
          READ MORE
          <ArrowLongRightIcon className="w-4 h-4 ml-2" />
        </button>
      </Link>
    </li>
  );
};
