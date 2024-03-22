"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/lib/animation";
import Link from "next/link";
import { IoIosStats } from "react-icons/io";

const TransitionLink = (href) => {
  const router = useRouter();
  const pathname = usePathname();
  
  const handleClick = () => {
    if (typeof href === "string" && pathname !== href) {
      animatePageOut(href, router);
    }
  };
  return (
    <Button onClick={handleClick}>
      <IoIosStats
        size={25}
        className="hover:scale-125 transition-all duration-200"
      />
    </Button>
  );
};

export default TransitionLink;
