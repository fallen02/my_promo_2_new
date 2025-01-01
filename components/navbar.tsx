"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import LOGO from "@/app/logo.png";
import Image from "next/image";

const Services: { title: string; href: string; description: string }[] = [
  {
    title: " Website Development ",
    href: "/services/webdev",
    description:
      "Transform Your Online Presence with Website Development Expert.",
  },
  {
    title: "Search Engine Optimization",
    href: "/services/seo",
    description: "Boost Your Online Visibility with SEO Expert.",
  },
  {
    title: "Social Media Marketing",
    href: "/services/smmarketing",
    description: "Elevate Your Brand with Social Media Marketing Expert.",
  },
  {
    title: "Graphic Design",
    href: "/services/graphicdesign",
    description: "Transform Your Brand with Stunning Graphic Design.",
  },
  {
    title: "Lead Generation",
    href: "/services/leadgen",
    description: " Supercharge Your Sales with Expert Lead Generation.",
  },
  {
    title: "Marketing Automation",
    href: "/services/marketingautomation",
    description:
      "Streamline Your Marketing with Advanced Automation Solutions.",
  },
  {
    title: "AI Enhanced Digital Optimization",
    href: "/services/aioptimization",
    description:
      "Unlock Superior Performance with AI-Enhanced Digital Optimization.",
  },
  {
    title: "Content Writing",
    href: "/services/contentwriting",
    description: "Elevate Your Brand with Professional Content Writing.",
  },
  {
    title: "Content Marketing ",
    href: "/services/contentmarketing",
    description: "Drive Engagement and Growth with Expert Content Marketing.",
  },
  {
    title: "Collab Membership",
    href: "/services/collab",
    description: "Unlock Exclusive Benefits with Our Collab Membership",
  },
  {
    title: "Salesforce CRM",
    href: "/services/salesforce",
    description:
      "We are dedicated to helping businesses like yours unlock the full potential of Salesforce.",
  },
];

export function Navbar() {
  return (
    <header className=" border-b  backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <div className="container flex h-10 w-full items-center">
        <div className="mr-4 w-full flex justify-between items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* <Icons.logo className="h-6 w-6" /> */}
            <Image src={LOGO} alt="LOGO" className="h-9 w-auto" />
            {/* <span className="hidden font-bold sm:inline-block">
              Acme Inc
            </span> */}
          </Link>
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {/* <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:text-primary">
                    Home
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <Image
                              src={LOGO}
                              alt="LOGO"
                              className="h-10 w-auto"
                            />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              MyPromo
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              We turn your digital dreams into groovy realities!
                              Are you ready to jazz up your brand and rock the
                              internet?
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/#" title="About Us">
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Typography"
                      >
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem> */}
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about-us" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:text-primary">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {Services.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Documentation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem> */}
                <NavigationMenuItem>
                  <Link href="/contact-us" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="">
            <a href="/contact-us" className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#ffa366_50%,#fff0e6_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-primary px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Contact Us
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                  <Icons.menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pr-0">
                <MobileNav />
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <div className="flex flex-col mt-20 space-y-3">
      <Link href="/" className="font-medium text-xl">
        Home
      </Link>
      <Link href="/aboutus" className="font-medium text-xl">
        About Us
      </Link>
      <Link href="/contactus" className="font-medium text-xl">
        Contact Us
      </Link>
      <div className="flex flex-col space-y-2">
        <h1 className="font-medium text-xl">Services</h1>
        {Services.map((component) => (
          <Link
            key={component.title}
            href={component.href}
            className="text-muted-foreground hover:text-accent-foreground text-sm"
          >
            {component.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
