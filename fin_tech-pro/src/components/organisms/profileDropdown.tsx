import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/base/dropdown-menu";
import { Button } from "@/components/base/button";
import { dropdownSections } from "@/lib/mock-data/mock-data";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ProfileDropdown() {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "Financial Overview"
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleExpand = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  console.log({ isOpen });
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild onClick={() => setIsOpen(!isOpen)}>
        <Button
          variant="ghost"
          className="p-2 hover:text-gray-600 bg-transparent hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:border-0 hover:underline flex gap-1"
        >
          <span>Profile</span>{" "}
          <ChevronDown
            className={
              (cn("h-4 w-4 transition-transform"), `${isOpen && "rotate-180"}`)
            }
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-72 sm:w-80 max-h-[80vh]  overflow-y-auto bg-white  mt-22 -mr-5 sm:mt-5 sm:-mr-72 rounded-sm dark:bg-zinc-900"
      >
        <div className="p-2 space-y-2">
          {dropdownSections.map(({ title, items }) => (
            <div
              key={title}
              className="border-b border-muted pb-2 last:border-none"
            >
              <button
                className="flex justify-between items-center w-full text-left text-sm font-medium text-foreground hover:text-primary"
                onClick={() => toggleExpand(title)}
              >
                {title}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    expandedSections.includes(title) ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedSections.includes(title) && (
                <ul className="mt-2 pl-3 space-y-1.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground hover:text-foreground text-sm cursor-pointer"
                    >
                      <Link href="">{item}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
