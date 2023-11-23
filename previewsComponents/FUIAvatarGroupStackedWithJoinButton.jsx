import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUIAvatarGroupStackedWithJoinButton() {
  
const avatarData = [
  {
    name: "CT",
    imgURL: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    name: "CT",
    imgURL: "https://randomuser.me/api/portraits/med/men/75.jpg",
  },
  {
    name: "CT",
    imgURL:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
  },
  {
    name: "CT",
    imgURL: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    name: "CT",
    imgURL: "https://randomuser.me/api/portraits/med/men/36.jpg",
  },
  {
    name: "CT",
    imgURL: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
  },
];
  
  return <div className="py-16 flex items-center justify-center -space-x-2 overflow-hidden">
    {avatarData.map((item, idx) => {
      return (
        <Avatar.Root
          key={idx}
          className="bg-white border-2 border-white h-10 w-10 flex items-center justify-center overflow-hidden rounded-full"
        >
          <Avatar.Image
            src={item.imgURL}
            className="h-full w-full object-cover"
          />
          <Avatar.Fallback delayMs={600}>{item.name}</Avatar.Fallback>
        </Avatar.Root>
      );
    })}
    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-gray-50 text-gray-600 text-xs font-medium">
      +100
    </div>
    <a
      href="javascript:void(0)"
      className="flex items-center justify-center translate-x-5 w-10 h-10 rounded-full border-dashed border bg-white hover:bg-gray-50 active:bg-gray-100 text-gray-400"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    </a>
  </div>
}

        