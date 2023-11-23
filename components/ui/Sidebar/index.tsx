"use client";

import sections from "sections/sections.json";
import { MouseEventHandler, ReactNode, useEffect, useState } from "react";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import mergeTW from "utils/mergeTW";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Input from "../Input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Heading = ({ children }: { children: ReactNode }) => (
  <h3 className="pb-6 font-medium text-zinc-50">{children}</h3>
);

const NavList = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <ul
    className={mergeTW(
      "relative after:absolute after:top-0 after:left-3 after:w-px after:h-full after:bg-zinc-800",
      className
    )}
  >
    {children}
  </ul>
);

export default () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<
    { section_name: string; slug: string }[]
  >([]);

  const pathname = usePathname();

  const appUISections = sections.filter(
    (item: { category: string }) => item.category == "Application"
  );
  const marketingUISections = sections.filter(
    (item: { category: string }) => item.category == "Marketing"
  );

  useEffect(() => {
    setOpen(false);
    setSearchValue("");
    setSearchResults([]);
  }, [pathname]);

  const handleSearch = (e: React.MouseEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setSearchValue(value);

    const getResults = sections.filter((item) =>
      item.section_name.toLocaleLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(getResults);
  };

  return (
    <div className="flex-none fixed inset-x-0 z-40 top-16 w-full xl:relative xl:max-w-[16rem] xl:top-0 xl:inset-x-[unset]">
      <div className="py-2.5 px-4 bg-zinc-950 border-y border-zinc-800 xl:px-8 xl:hidden">
        <button
          className="flex gap-x-2 items-center text-gray-300"
          onClick={() => setOpen(!isOpen)}
        >
          <ChevronRightIcon
            className={`w-5 h-5 duration-200 ${isOpen ? "rotate-90" : ""}`}
          />
          Menu
        </button>
      </div>
      <aside className="relative w-full">
        <div
          className={`fixed inset-x-0 w-full h-full bg-zinc-950 px-4 border-r border-zinc-800 xl:inset-x-[unset] xl:block xl:max-w-[16rem] xl:top-auto xl:px-0 ${
            isOpen ? "" : "hidden"
          }`}
        >
          <div className="pr-4 pt-10 pb-2">
            <div className="relative">
              <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 inset-y-0 my-auto text-zinc-500" />
              <Input
                required
                placeholder="Search..."
                className="w-full pl-12 border-zinc-700"
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="h-full overflow-y-auto pb-32 text-gray-400 text-sm pt-4 pr-4 [&>*]:pt-6 xl:pb-28">
            {searchValue ? (
              <div className="">
                <Heading>Results</Heading>
                {searchResults.length > 0 ? (
                  <NavList>
                    {searchResults.map((item, idx) => (
                      <li key={idx}>
                        <NavLink
                          href={`/components${item.slug}`}
                          className="hover:bg-zinc-900 hover:text-zinc-100"
                          active="bg-zinc-900 text-zinc-100 font-medium"
                        >
                          {item.section_name}
                        </NavLink>
                      </li>
                    ))}
                  </NavList>
                ) : (
                  <div className="text-zinc-400 font-medium">
                    No components found
                  </div>
                )}
              </div>
            ) : (
              <></>
            )}
            {!searchValue ? (
              <>
                <div className="">
                  <Heading>Getting Started</Heading>
                  <NavList>
                    <li>
                      <NavLink
                        href="/components"
                        className="hover:bg-zinc-900 hover:text-zinc-100"
                        active="bg-zinc-900 text-zinc-100 font-medium"
                      >
                        Introduction
                      </NavLink>
                    </li>
                  </NavList>
                </div>
                <div className="">
                  <Heading>Marketing UI</Heading>
                  <NavList>
                    {marketingUISections.map((item, idx) => (
                      <li key={idx}>
                        <NavLink
                          href={`/components${item.slug}`}
                          className="hover:bg-zinc-900 hover:text-zinc-100"
                          active="bg-zinc-900 text-zinc-100 font-medium"
                        >
                          {item.section_name}
                        </NavLink>
                      </li>
                    ))}
                  </NavList>
                </div>
                <div className="">
                  <Heading>Application UI</Heading>
                  <NavList>
                    {appUISections.map((item, idx) => (
                      <li key={idx}>
                        <NavLink
                          href={`/components${item.slug}`}
                          className="hover:bg-zinc-900 hover:text-zinc-100"
                          active="bg-zinc-900 text-zinc-100 font-medium"
                        >
                          {item.section_name}
                        </NavLink>
                      </li>
                    ))}
                  </NavList>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
};
