import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IoIosStats } from "react-icons/io";

export default function Navbar() {
  return (
    <header className="w-full flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>Hi, Sudhanshu</div>
      </div>
      <nav className="flex items-center gap-2">
        <IoIosStats size={20} />
        <Button className="bg-red-400 hover:bg-red-500">Sign Out</Button>
      </nav>
    </header>
  );
}
