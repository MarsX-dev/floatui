import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUISelectMenuWithSearchBox() {
  // You can use any api to generate list of countries
  const menuItems = [
    "United States of America",
    "Albania",
    "Algeria",
    "Andorra",
    "Argentina",
    "Armenia",
    "Austria",
    "Australia",
    "Azerbaijan",
    "Bahamas",
    "Brazil",
    "Canada",
    "Colombia",
    "China",
    "Egypt",
    "France",
    "Germany",
    "India",
    "Iraq",
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

  const [value, setValue] = React.useState("");
  const [countries, setCountries] = React.useState(menuItems);

  const handleSearch = (e) => {
    const value = e.target.value;
    const results = menuItems.filter((item) =>
      item.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setTimeout(() => setCountries(results), 100);
  };

  return (
    <Select.Root
      onValueChange={setValue}
      onOpenChange={() => setCountries(menuItems)}
    >
      <div className="w-72 max-w-full mx-auto m-6">
        <Select.Trigger className="w-full inline-flex items-center justify-between px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
          <Select.Value placeholder="Select your country">
            {value}
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
            className="w-[var(--radix-select-trigger-width)] overflow-hidden mt-3 bg-white border rounded-lg shadow-sm text-sm"
          >
            <div className="shadow flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-3 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="p-2 text-gray-500 w-full rounded-md outline-none"
                onInput={handleSearch}
              />
            </div>
            <Select.Viewport className="max-h-64 mt-2 overflow-y-auto">
              {countries.length < 1 ? (
                <div className="px-3 py-2 text-gray-600">Nothing found.</div>
              ) : (
                ""
              )}
                <SelectItem value='United States of America'>
                  United States of America
                </SelectItem>

                <SelectItem value='Albania'>
                  Albania
                </SelectItem>

                <SelectItem value='Algeria'>
                  Algeria
                </SelectItem>

                <SelectItem value='Andorra'>
                  Andorra
                </SelectItem>

                <SelectItem value='Argentina'>
                  Argentina
                </SelectItem>

                <SelectItem value='Armenia'>
                  Armenia
                </SelectItem>

                <SelectItem value='Austria'>
                  Austria
                </SelectItem>

                <SelectItem value='Australia'>
                  Australia
                </SelectItem>

                <SelectItem value='Azerbaijan'>
                  Azerbaijan
                </SelectItem>

                <SelectItem value='Bahamas'>
                  Bahamas
                </SelectItem>

                <SelectItem value='Brazil'>
                  Brazil
                </SelectItem>

                <SelectItem value='Canada'>
                  Canada
                </SelectItem>

                <SelectItem value='Colombia'>
                  Colombia
                </SelectItem>

                <SelectItem value='China'>
                  China
                </SelectItem>

                <SelectItem value='Egypt'>
                  Egypt
                </SelectItem>

                <SelectItem value='France'>
                  France
                </SelectItem>

                <SelectItem value='Germany'>
                  Germany
                </SelectItem>

                <SelectItem value='India'>
                  India
                </SelectItem>

                <SelectItem value='Iraq'>
                  Iraq
                </SelectItem>

            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </div>
    </Select.Root>
  );
};
        