"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { MobileNav } from "./MobileNavigation";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

type Sublink = {
  label: string;
  description: string;
  img: string;
  href: string;
};

type Tab = {
  label: string;
  sublinks?: Sublink[];
  href?: string;
};

const tabs: Tab[] = [
  {
    label: "Innovator Program",
    sublinks: [
      { label: "Robotics", description: "Age 7-18 Years", img: "", href: "/innovator-program/robotics" },
      { label: "Advanced Math", description: "Grade 2nd-8th", img: "", href: "/innovator-program/advanced-math" },
      { label: "Game Development", description: "Age 7-18 Years", img: "", href: "/innovator-program/game-development" },
      { label: "App Development", description: "Age 7-18 Years", img: "", href: "/innovator-program/app-development" },
      { label: "Power Skills Program", description: "Age 7-18 Years", img: "", href: "/innovator-program/power-skills" },
    ],
  },
  {
    label: "Advanced Programs",
    sublinks: [
      { label: "Product Design", description: "Age 10-17 Years", img: "", href: "/programs/product-design" },
      { label: "IOT", description: "Age 10-17 Years", img: "", href: "/programs/iot" },
      { label: "Passion Project", description: "Age 15-18 Years", img: "", href: "/programs/passion-project" },
      { label: "Pre-Incubator Program", description: "Age 14-23 Years", img: "", href: "/programs/pre-incubator" },
    ],
  },
  {
    label: "Student Projects",
    sublinks: [
      { label: "Product Design", description: "7-10", img: "", href: "/mooncampaigns/?agegroup=1" },
      { label: "IOT", description: "11-13", img: "", href: "/mooncampaigns/?agegroup=2" },
      { label: "Passion Project", description: "14-17", img: "", href: "/mooncampaigns/?agegroup=3" },
      { label: "Pre-Incubator Program", description: "18+", img: "", href: "/mooncampaigns/?agegroup=4" },
    ],
  },
  { label: "Summer Camp", href: "/summer-camp" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-row items-center space-x-4">
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
                    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {tab.sublinks.map((sublink, index) => (
                        <ListItem key={index} title={sublink.label} href={sublink.href}>
                          {sublink.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
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

function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
