import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUIBasicTabs() {
  
const tabItems = [
  "Overview",
  "Integration",
  "Billing",
  "Transactions",
  "plans",
];
  
  return <Tabs.Root
    className="max-w-screen-xl mx-auto px-4 md:px-8"
    defaultValue="Overview"
  >
    <Tabs.List
      className="w-full border-b flex items-center gap-x-3 overflow-x-auto text-sm"
      aria-label="Manage your account"
    >
      {tabItems.map((item, idx) => (
        <Tabs.Trigger
          key={idx}
          className="group outline-none py-1.5 border-b-2 border-white text-gray-500 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600"
          value={item}
        >
          <div className="py-1.5 px-3 rounded-lg duration-150 group-hover:text-indigo-600 group-hover:bg-gray-50 group-active:bg-gray-100 font-medium">
            {item}
          </div>
        </Tabs.Trigger>
      ))}
    </Tabs.List>
    {tabItems.map((item, idx) => (
      <Tabs.Content key={idx} className="py-6" value={item}>
        <p className="text-xs leading-normal">
          This is <b>{item}</b> Tab
        </p>
      </Tabs.Content>
    ))}
  </Tabs.Root>
}

        