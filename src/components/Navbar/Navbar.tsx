"use client";
import { LucideLayoutPanelLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsBell } from "react-icons/bs";
import { HiOutlineAcademicCap, HiOutlineBookOpen } from "react-icons/hi";
import logo from "../../../public/logo.webp";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";

const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header>
        <nav className="flex justify-between items-center py-4 border-b border-neutral-800 px-8">
          {/* Logo and first  part  */}
          <div className="flex items-center gap-5">
            {/* logo */}
            <div className="flex items-center gap-2">
              <Link href={"/"}>
                <Image
                  src={logo}
                  alt="logo"
                  width={1200}
                  height={100}
                  quality={100}
                  className="w-[90px] h-auto object-cover"
                />
              </Link>
              <Badge
                variant="secondary"
                className="bg-neutral-800 text-white rounded-md uppercase "
              >
                beta
              </Badge>
            </div>
            {/* logo */}
            <div className="flex items-center gap-3">
              <Link
                href={"/"}
                className="flex space-x-2 items-center px-4 py-2 text-sm hover:bg-neutral-800 rounded-md"
              >
                <HiOutlineAcademicCap className="w-[18px] h-5 stroke-1" />
                <span>Workshops</span>
              </Link>
              <Link
                href={"/"}
                className="flex space-x-2 items-center px-4 py-2 text-sm hover:bg-neutral-800 rounded-md"
              >
                <HiOutlineBookOpen className="w-[18px] h-5 stroke-1" />
                <span>Browse library</span>
              </Link>
            </div>
          </div>
          {/* second  part  */}
          <div>
            <div className="flex items-center gap-3">
              <div>
                <Link
                  href={"/"}
                  className="hover:bg-neutral-800 block p-2.5 rounded-md"
                >
                  <LucideLayoutPanelLeft className=" w-5 h-5" />
                </Link>
              </div>
              <div>
                <Popover>
                  <PopoverTrigger>
                    <BsBell />
                  </PopoverTrigger>
                  <PopoverContent className="w-full min-w-[320px] bg-neutral-950 border-neutral-800 text-white px-8 py-5">
                    <div className="w-full flex justify-between items-center">
                      <p className="font-semibold text-sm">Notifications</p>
                      <p className="text-neutral-400 text-xs ">
                        Mark all as read
                      </p>
                    </div>
                    <Separator className="my-2 bg-slate-700" />
                    <div>
                      <div className="min-h-[150px] gap-4 flex-col flex items-center justify-center">
                        <BsBell className="w-10 h-10 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground text-center">
                          No new notifications <br />
                          {`We'll`} notify you when something arrives
                        </p>
                      </div>
                    </div>
                    <Button
                      className="w-full text-xs capitalize bg-white hover:bg-slate-700 hover:text-white text-black"
                      size={"sm"}
                    >
                      view all notifications
                    </Button>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div></div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
