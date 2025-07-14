"use client";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navbar5 = () => {
  return (
    <>
    <section className="py-4">
      <div className=" flex w-full">
        <nav className="flex items-center justify-between w-full px-4">
          <a
            href="/home"
            className="flex items-center gap-2"
          >
            <span className="text-lg font-semibold tracking-tighter px-1 md:px-5">
              Gimhani Samanalee
            </span>
          </a>
          <NavigationMenu className="hidden lg:block ">
            <NavigationMenuList >

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/projects"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100/20 hover:text-gray-900 focus:bg-gray-100/20 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/20 data-[state=open]:bg-gray-100/20"
                >
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contact"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100/20 hover:text-gray-900 focus:bg-gray-100/20 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/20 data-[state=open]:bg-gray-100/20"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Sheet >
            <SheetTrigger asChild className="lg:hidden ">
              <div className="px-1 ">
              <Button variant="outline" size="icon" >
                <MenuIcon className="h-4 w-4" />
              </Button>
              </div>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto ">
              <SheetHeader>
                <SheetTitle>
                  <a
                    href="/home"
                    className="flex items-center gap-2"
                  >
                    <span className="text-lg font-semibold tracking-tighter">
                      Gimhani Samanalee
                    </span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col py-10 px-3">

                    
                  
                
                <div className="flex flex-col gap-6">
                  
                  <a href="/projects" className="font-medium">
                    Projects
                  </a>
                  <a href="/contact" className="font-medium">
                    Contact
                  </a>
                </div>
                
              </div>
            </SheetContent>
          </Sheet>
          
          
        </nav>
      </div>
    </section>



</>
  );
};
