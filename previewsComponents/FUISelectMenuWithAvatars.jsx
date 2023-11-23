import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUISelectMenuWithAvatars() {
  
  const [selectedItemIdx, setSelectedItemIdx] = React.useState(0);

  const menuItems = [
    {
      name: "Danya",
      label: "@danya",
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      name: "Osama",
      label: "@osama",
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    },
    {
      name: "Loyan",
      label: "@loyan",
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    },
    {
      name: "Carllose",
      label: "@carllose",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f",
    },
    {
      name: "Micheal",
      label: "@micheal",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    },
  ];

const SelectItem = React.forwardRef(
  ({ children, className, value }, forwardedRef) => {
    // If you want to make this component more customizable you can use classnames and tailwind-merge library.
    return (
      <Select.Item
        className="flex items-center justify-between px-3 cursor-default py-2 duration-150 text-gray-600 data-[state=checked]:text-indigo-600 data-[state=checked]:bg-indigo-50 data-[highlighted]:text-indigo-600 data-[highlighted]:bg-indigo-50 data-[highlighted]:hover:text-indigo-600 data-[highlighted]:hover:bg-indigo-50 outline-none"
        value={value}
        ref={forwardedRef}
      >
        <Select.ItemText>
          <div className="pr-4 line-clamp-1 flex items-center gap-2">
            {children}
          </div>
        </Select.ItemText>
        <div className="w-6">
          <Select.ItemIndicator>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-indigo-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>{" "}
          </Select.ItemIndicator>
        </div>
      </Select.Item>
    );
  }
);


  return (
    <div className="m-6">
      <Select.Root onValueChange={setSelectedItemIdx}>
        <div className="w-72 max-w-full mx-auto">
          <Select.Trigger className="w-full inline-flex items-center justify-between px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
            <Select.Value placeholder="Select a member">
              <div className="flex items-center gap-2">
                <img
                  src={menuItems[selectedItemIdx].avatar}
                  className="w-5 h-5 rounded-full"
                />
                <div className="flex-1 text-left flex items-center gap-x-1">
                  {menuItems[selectedItemIdx].name}
                  <span>{menuItems[selectedItemIdx].label}</span>
                </div>
              </div>
            </Select.Value>
            <Select.Icon className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content
              position="popper"
              avoidCollisions={false}
              className="w-[var(--radix-select-trigger-width)] max-h-64 mt-3 overflow-y-auto bg-white border rounded-lg shadow-sm text-sm"
            >
              <Select.Viewport className="">
                  <SelectItem value='0'>
                    <img src='https://randomuser.me/api/portraits/women/79.jpg' className='w-5 h-5 rounded-full' />
                    <div className='flex-1 text-left flex items-center gap-x-1'>
                      Danya
                      <span className='text-sm'>@danya</span>
                    </div>
                  </SelectItem>

                  <SelectItem value='1'>
                    <img src='https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg' className='w-5 h-5 rounded-full' />
                    <div className='flex-1 text-left flex items-center gap-x-1'>
                      Osama
                      <span className='text-sm'>@osama</span>
                    </div>
                  </SelectItem>

                  <SelectItem value='2'>
                    <img src='https://randomuser.me/api/portraits/men/86.jpg' className='w-5 h-5 rounded-full' />
                    <div className='flex-1 text-left flex items-center gap-x-1'>
                      Loyan
                      <span className='text-sm'>@loyan</span>
                    </div>
                  </SelectItem>

                  <SelectItem value='3'>
                    <img src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f' className='w-5 h-5 rounded-full' />
                    <div className='flex-1 text-left flex items-center gap-x-1'>
                      Carllose
                      <span className='text-sm'>@carllose</span>
                    </div>
                  </SelectItem>

                  <SelectItem value='4'>
                    <img src='https://randomuser.me/api/portraits/men/46.jpg' className='w-5 h-5 rounded-full' />
                    <div className='flex-1 text-left flex items-center gap-x-1'>
                      Micheal
                      <span className='text-sm'>@micheal</span>
                    </div>
                  </SelectItem>

              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </div>
      </Select.Root>
    </div>
  );
};
        