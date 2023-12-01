import { PlusIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Button from "../Button";

const members = [
  {
    avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    name: "John lorin",
    email: "john@example.com",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Chris bondi",
    email: "chridbondi@example.com",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "yasmine",
    email: "yasmine@example.com",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f",
    name: "Joseph",
    email: "joseph@example.com",
  },
];

export default () => (
  <div className="flex-1 max-w-lg mx-auto p-6 rounded-2xl bg-[#18181B]/75 hidden md:block">
    <div className="items-start justify-between sm:flex">
      <div>
        <h3 className="text-zinc-100 text-lg font-semibold">Team members</h3>
        <p className="mt-2 text-zinc-300 text-sm max-w-xs">
          Give your team members access to manage the system.
        </p>
      </div>
      <Button className="flex-none flex items-center gap-1 rounded-lg text-xs text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 px-3 py-2">
        <PlusIcon className="w-5 h-5" />
        New member
      </Button>
    </div>
    <ul className="mt-12 divide-y divide-zinc-800">
      {members.map((item, idx) => (
        <li key={idx} className="py-5">
          <div className="flex gap-3">
            <Image
              src={item.avatar}
              className="flex-none w-12 h-12 rounded-full"
              width={48}
              height={48}
              alt=""
            />
            <div className="text-sm">
              <span className="block text-zinc-100 font-semibold">
                {item.name}
              </span>
              <span className="block mt-2 text-zinc-400">{item.email}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
