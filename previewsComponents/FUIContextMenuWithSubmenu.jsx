import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUIContextMenuWithSubmenu() {
  
const submenuItem = {
  name: "Plugins",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path
        fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
        clipRule="evenodd"
      />
    </svg>
  ),
  submenu: [
    {
      name: "Unsplash",
      command: "",
    },
    {
      name: "Inbox Cleaner",
      command: "",
    },
    {
      name: "Auto layout",
      command: "",
    },
  ],
};

const menuItems = {
  group_1: [
    {
      name: "Share",
      command: "",
    },
    {
      name: "Move to",
      command: "Ctrl+M",
    },
  ],
  group_2: [
    {
      name: "Copy link",
      command: "Ctrl+C",
    },
  ],
  group_3: [
    {
      name: "Rename",
      command: "",
    },
    {
      name: "Duplicate",
      command: "",
    },
  ],
  group_4: [
    {
      name: "Delete",
      command: "Ctrl+D",
    },
    {
      name: "Archieve",
      command: "",
    },
    {
      name: "Import files",
      command: "",
    },
  ],
};
  return <div className="px-4 pt-12" style={{height: "520px"}}>  
    <ContextMenu.Root>
    <ContextMenu.Trigger className="max-w-sm h-32 mx-auto mt-12 rounded-lg border border-dashed bg-gray-50 text-sm flex items-center justify-center select-none text-gray-600">
      Right click here.
    </ContextMenu.Trigger>

    <ContextMenu.Portal>
      <ContextMenu.Content
        className="w-60 rounded-lg bg-white shadow-md border text-[13px] text-gray-800"
        sideOffset={5}
        align="end"
      >
        {/* An item with submenu */}
        <div className="pt-1.5 px-2">
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger className="group w-full flex items-center justify-between gap-x-2 px-2 py-1.5 data-[highlighted]:text-white data-[highlighted]:bg-blue-600 data-[highlighted]:data-[state=open]:text-white data-[highlighted]:data-[state=open]:bg-blue-600 data-[state=open]:bg-blue-50 rounded-lg duration-150 outline-none select-none">
              {submenuItem.name}
              <div className="text-gray-600 group-data-[highlighted]:text-white">
                {submenuItem.icon}
              </div>
            </ContextMenu.SubTrigger>
            <ContextMenu.Portal>
              <ContextMenu.SubContent
                className="w-60 rounded-lg bg-white shadow-md border text-[13px] text-gray-800"
                sideOffset={2}
                alignOffset={-5}
              >
                <div className="py-1.5 px-2">
                  {submenuItem.submenu.map((item, idx) => (
                    <ContextMenu.Item
                      key={idx}
                      className="group w-full flex items-center justify-between gap-x-2 px-2 py-1.5 data-[highlighted]:text-white data-[highlighted]:bg-blue-600 rounded-lg duration-150 outline-none select-none"
                    >
                      {item.name}
                    </ContextMenu.Item>
                  ))}
                </div>
                <ContextMenu.Separator className="h-px bg-gray-200" />
                <div className="py-1.5 px-2">
                  <ContextMenu.Item className="group w-full flex items-center justify-between gap-x-2 px-2 py-1.5 data-[highlighted]:text-white data-[highlighted]:bg-blue-600 rounded-lg duration-150 outline-none select-none">
                    Find more plugins{" "}
                    <span className="text-gray-500 group-data-[highlighted]:text-white">
                      Ctrl+P
                    </span>
                  </ContextMenu.Item>
                </div>
              </ContextMenu.SubContent>
            </ContextMenu.Portal>
          </ContextMenu.Sub>
        </div>

        <div className="pb-1.5 px-2">
          {/* Group of items without Separator */}
          {menuItems.group_1.map((item, idx) => (
            <ContextMenu.Item
              key={idx}
              className="group w-full flex items-center justify-between gap-x-2 px-2 py-1.5 data-[highlighted]:text-white data-[highlighted]:bg-blue-600 rounded-lg duration-150 outline-none select-none"
            >
              {item.name}{" "}
              <span className="text-gray-500 group-data-[highlighted]:text-white">
                {item.command}
              </span>
            </ContextMenu.Item>
          ))}
        </div>

        {/* Groups with Separator */}
        {[menuItems.group_2, menuItems.group_3, menuItems.group_4].map(
          (group, idx) => (
            <>
              <ContextMenu.Separator className="h-px bg-gray-200" />
              <div key={idx} className="py-1.5 px-2">
                {group.map((item, idx) => (
                  <ContextMenu.Item
                    key={idx}
                    className="group w-full flex items-center justify-between gap-x-2 px-2 py-1.5 data-[highlighted]:text-white data-[highlighted]:bg-blue-600 rounded-lg duration-150 outline-none select-none"
                  >
                    {item.name}{" "}
                    <span className="text-gray-500 group-data-[highlighted]:text-white">
                      {item.command}
                    </span>
                  </ContextMenu.Item>
                ))}
              </div>
            </>
          )
        )}
      </ContextMenu.Content>
    </ContextMenu.Portal>
  </ContextMenu.Root>
  </div>
}
        