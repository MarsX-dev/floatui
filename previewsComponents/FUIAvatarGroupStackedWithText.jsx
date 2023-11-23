import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUIAvatarGroupStackedWithText() {
  
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
];
  return <div className="py-16 flex items-center justify-center -space-x-2 overflow-hidden">
    {avatarData.map((item, idx) => {
      return (
        <Avatar.Root
          key={idx}
          className="border-2 border-white h-10 w-10 flex items-center justify-center overflow-hidden rounded-full"
        >
          <Avatar.Image
            src={item.imgURL}
            className="h-full w-full object-cover"
          />
          <Avatar.Fallback delayMs={600}>{item.name}</Avatar.Fallback>
        </Avatar.Root>
      );
    })}
    <p className="text-sm text-gray-500 font-medium translate-x-5">
      Join 5.000+ users
    </p>
  </div>
}
        