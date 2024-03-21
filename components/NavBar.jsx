"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IoIosStats } from "react-icons/io";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SignOutButton() {
  return <Button className="bg-red-400 hover:bg-red-500">Sign Out</Button>;
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sheet>
        <SheetTrigger className="sm:hidden flex justify-end w-full">
          <GiHamburgerMenu size={20} className="text-white" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="flex w-full items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>Hi, Sudhanshu</div>
            </SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <SignOutButton />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

export function DesktopNav() {
  return (
    <header className="w-full justify-between items-center mt-2 mb-6 relative hidden sm:flex">
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>Hi, Sudhanshu</div>
      </div>
      <nav className="flex items-center gap-2">
        <IoIosStats size={20} />
        <SignOutButton />
      </nav>
    </header>
  );
}

export default function Navbar() {
  return (
    <div className="w-full">
      <MobileNav />
      <DesktopNav />
    </div>
  );
}
