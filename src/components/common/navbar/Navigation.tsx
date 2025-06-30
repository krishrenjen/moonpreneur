"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { MobileNav } from "./MobileNavigation";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import useDimensions from "@/hooks/useDimensions";

type Sublink = {
  label: string;
  description?: string;
  img: string;
  href: string;
  section?: string; // Do not define this; this is automatically generated based on window size
};

type Tab = {
  label: string;
  sublinks?: Sublink[];
  href?: string;
  groups?: string[]; // Do not define this; this is automatically generated based on window size
};

const allTabs: Tab[] = [
  {
    label: "Innovator Programs",
    sublinks: [
      { label: "Robotics", description: "Age 7-18 Years", img: "/assets/navbar/innovator_program/robotics.webp", href: "/innovator-program/robotics" },
      { label: "Advanced Math", description: "Grade 2nd-8th", img: "/assets/navbar/innovator_program/math.webp", href: "/innovator-program/advanced-math" },
      { label: "Game Development", description: "Age 7-18 Years", img: "/assets/navbar/innovator_program/game_dev.webp", href: "/innovator-program/game-development" },
      { label: "App Development", description: "Age 7-18 Years", img: "/assets/navbar/innovator_program/app_dev.webp", href: "/innovator-program/app-development" },
      { label: "Power Skills Program", description: "Age 7-18 Years", img: "/assets/navbar/innovator_program/power_skills.webp", href: "/innovator-program/power-skills" },
    ],
  },
  {
    label: "Advanced Programs",
    sublinks: [
      { label: "Product Design", description: "Age 10-17 Years", img: "/assets/navbar/advanced_program/product_design.webp", href: "/programs/product-design" },
      { label: "IOT", description: "Age 10-17 Years", img: "/assets/navbar/advanced_program/IOT.webp", href: "/programs/iot" },
      { label: "Passion Project", description: "Age 15-18 Years", img: "/assets/navbar/advanced_program/passion_project.webp", href: "/programs/passion-project" },
      { label: "Pre-Incubator Program", description: "Age 14-23 Years", img: "/assets/navbar/advanced_program/pre_incubator.webp", href: "/programs/pre-incubator" },
    ],
  },
  {
    label: "Student Projects",
    sublinks: [
      { label: "Age Group 7-10 Years", img: "/assets/navbar/age_groups/Age-Group-7-10-Year.webp", href: "/mooncampaigns/?agegroup=1" },
      { label: "Age Group 11-13 Years", img: "/assets/navbar/age_groups/Age-Group-11-13-Year.webp", href: "/mooncampaigns/?agegroup=2" },
      { label: "Age Group 14-17 Years", img: "/assets/navbar/age_groups/Age-Group-14-17-Year.webp", href: "/mooncampaigns/?agegroup=3" },
      { label: "Age Group 18+ Years", img: "/assets/navbar/age_groups/Age-Group-18-Year.webp", href: "/mooncampaigns/?agegroup=4" },
    ],
  },
  { label: "Summer Camp", href: "/summer-camp" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const { width } = useDimensions();
  const threshold = 1350;

  const programTabs = allTabs.filter((tab) => tab.label.includes("Program"));
  const nonProgramTabs = allTabs.filter((tab) => !tab.label.includes("Program"));

  const tabs =
    width && width < threshold
      ? [
          {
            label: "Programs",
            groups: Array.from(new Set(programTabs.map((tab) => tab.label))),
            sublinks: programTabs.flatMap(
              (tab) =>
                tab.sublinks?.map((sublink) => ({
                  ...sublink,
                  section: tab.label,
                })) ?? []
            ),
          } as Tab,
          ...nonProgramTabs,
        ]
      : allTabs;

  return (
    <nav className="flex items-center justify-between">
      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-6 items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-row items-center gap-0 xl:gap-4">
            {tabs.map((tab, index) => (
              <NavigationMenuItem key={index}>
                {tab.sublinks ? (
                  <NavigationMenuTrigger>{tab.href ? <Link href={tab.href}>{tab.label}</Link> : tab.label}</NavigationMenuTrigger>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link href={tab.href || "#"}>{tab.label}</Link>
                  </NavigationMenuLink>
                )}

                {tab.sublinks && (
                  <NavigationMenuContent className="!border-gray-50 !border">
                    {tab.groups && tab.groups.length > 0 ? (
                      <div className="flex flex-col gap-2 mb-4">
                        {tab.groups.map((group, groupIndex) => (
                          <div key={groupIndex}>
                            <h1 className="text-sm font-semibold text-gray-700 mb-2">{group}</h1>
                            {tab.sublinks && (
                              <ul className="grid w-[400px] gap-2 md:w-[500px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-[600px]">
                                {tab.sublinks
                                  .filter((sublink) => sublink.section === group)
                                  .map((sublink, index) => (
                                    <ListItem key={index} title={sublink.label} href={sublink.href} src={sublink.img}>
                                      {sublink.description}
                                    </ListItem>
                                  ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="grid w-[400px] gap-2 md:w-[500px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-[600px]">
                        {tab.sublinks.map((sublink, index) => (
                          <ListItem key={index} title={sublink.label} href={sublink.href} src={sublink.img}>
                            {sublink.description}
                          </ListItem>
                        ))}
                      </ul>
                    )}
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[260px]">
            <MobileNav links={tabs} />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

function ListItem({ title, children, href, src, ...props }: React.ComponentPropsWithoutRef<"li"> & { href: string; src?: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          {src && <img src={src} alt={title} className="w-32 h-32 rounded-md mb-2" />}
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
