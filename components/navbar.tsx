"use client";

import * as React from "react";
import Link from "next/link";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
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
import { useLeadStore } from "@/hooks/store/leadStore";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

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
            <Image src={LOGO} alt="LOGO" className="h-9 w-auto" />
          </Link>
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
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
            <PortfolioBtn />
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
      <Link href="/about-us" className="font-medium text-xl">
        About Us
      </Link>
      <Link href="/contact-us" className="font-medium text-xl">
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

function PortfolioBtn() {
  const [modelState, setModelState] = React.useState<boolean>(false);
  const { lead } = useLeadStore();
  const router = useRouter();
  const handleClick = async () => {
    if(lead) router.push('/portfolio')
    else {
  setModelState(true)
}
  };
  return (
    <>
      <Button
        className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none "
        onClick={handleClick}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#ffa366_50%,#fff0e6_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-primary px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl ">
          Our Portfolio
        </span>
      </Button>

      <Dialog
        open={modelState}
        as="div"
        className="relative z-10 focus:outline-none "
        onClose={() => setModelState(false)}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto backdrop-blur-2xl">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              {/* <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                Payment successful
              </DialogTitle> */}
              <LeadForm setModelState={setModelState}/>
              {/* <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={() => setModelState(false)}
                >
                  Got it, thanks!
                </Button>
              </div> */}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

function LeadForm( {setModelState}: {setModelState: React.Dispatch<React.SetStateAction<boolean>>}) {
  const { updateLead } = useLeadStore();
  const router = useRouter()

  const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );
  
  const formSchema = z.object({
    fullName: z.string().min(2).max(255),
    email: z.string().email(),
    phoneNO: z.string().regex(phoneRegex, "invalid Number").min(10),
  });
  const [loading, setLoading] = useState(false);
  
    const { toast } = useToast();
  
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        fullName: "",
        email: "",
        phoneNO: "",
      },
    });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { fullName, email, phoneNO } = values;
    try {
      setLoading(true);
      const response = await fetch("/api/send-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, phoneNO }),
      });

      setLoading(false);
      if (response.status === 200){
        updateLead()
        toast({ description: "Subbmitted successfully!" });
        setModelState(false)
        router.push('/portfolio')
      }
      else
        toast({
          variant: "destructive",
          description: "Error in sending email",
        });
    } catch (error) {
      setLoading(false);
      toast({
        variant: "destructive",
        description: "Error in sending email",
      });
    }
  }


  return (
    <Card className="bg-transparent">
      <CardHeader className="text-primary text-2xl"> Enter Details </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid w-full gap-4"
          >
            <div className="flex flex-col md:!flex-row gap-8">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Full Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <FormField
                control={form.control}
                name="phoneNO"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone No</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="Enter Phone No"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            

            {loading ? <SendBtnLoading /> : <SendBtn />}
          </form>
        </Form>
      </CardContent>

    </Card>
  );
}

const SendBtn = () => {
  return <Button className="mt-4">Submit</Button>;
};

const SendBtnLoading = () => {
  return (
    <Button disabled>
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
  );
};
