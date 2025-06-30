import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";

type LinkItem = {
  label: string;
  href?: string;
  sublinks?: { label: string; href: string }[];
};

export function MobileNav({ links }: { links: LinkItem[] }) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggle = (label: string) => {
    setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <div className="px-2 mt-12 flex flex-col gap-4">
      {links.map((link) =>
        link.sublinks ? (
          <div key={link.label}>
            <button onClick={() => toggle(link.label)} className="flex items-center justify-between w-full text-left font-medium">
              <span>{link.label}</span>
              <ChevronUp className={clsx("transition-transform duration-300 ", { "rotate-180": openSections[link.label] })} />
            </button>
            {openSections[link.label] && (
              <div className="ml-4 mt-2 flex flex-col gap-2">
                {link.sublinks.map((sublink) => (
                  <Link key={sublink.href} href={sublink.href} className="text-sm text-muted-foreground hover:underline">
                    {sublink.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link key={link.href} href={link.href!} className="font-medium hover:underline">
            {link.label}
          </Link>
        )
      )}
    </div>
  );
}
