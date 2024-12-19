"use client";
import {
  BadgeCheck,
  Bell,
  CreditCard,
  LayoutDashboard,
  LogOut,
  LucideLayoutPanelLeft,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsBell, BsPerson } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineMenu,
} from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";

import logo from "../../../public/logo.webp";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

import { toast } from "react-toastify";
const user = {
  name: "Mahamudul hasan Miyad ",
  email: "m@example.com",
  status: "Personal",
  avatar:
    "https://lh3.googleusercontent.com/a/ACg8ocKQpL2Sh9GBdf0ThaS21Qi8gK2594VetZHRYZan8QOJXxQJpI4=s96-c",
};
const Navbar = () => {
  const handleLogOut = () => {
    toast.success("Successfully logged out");
  };
  return (
    <>
      <header className="h-auto overflow-hidden mb-4">
        <nav className="flex justify-between items-center py-2 border-b border-neutral-800 px-8">
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
            <div className=" hidden lg:flex items-center gap-3">
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
            <div className="hidden lg:flex items-center">
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
                    <PopoverTrigger className="p-2.5">
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
                <Separator
                  orientation="vertical"
                  className="h-5 bg-slate-500"
                />
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    asChild
                    className="border-0 active:border-0 border-slate-900 active:border-neutral-600 ring-0 focus:ring-0"
                  >
                    <Button
                      size="lg"
                      className="bg-transparent border-slate-900 active:border-neutral-600 ring-0 focus:ring-0"
                    >
                      <Avatar className="h-8 w-8 rounded-full">
                        <AvatarImage
                          src={user?.avatar || ""}
                          alt={user?.name || ""}
                        />
                        <AvatarFallback className="rounded-full">
                          CN
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                          {user.name}
                        </span>
                        <span className="truncate text-xs">
                          {user?.status || "Personal"}
                        </span>
                      </div>
                      <GoChevronDown className="ml-auto size-4" />
                      {/* <ChevronsUpDown className="ml-auto size-4" /> */}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="bg-neutral-950 text-white py-4 border-neutral-600 min-w-56 rounded-lg"
                    side={true ? "bottom" : "right"}
                    align="end"
                    sideOffset={4}
                  >
                    <DropdownMenuLabel className="p-0 font-normal">
                      <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <Avatar className="h-8 w-8 rounded-lg">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback className="rounded-full">
                            CN
                          </AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                          <span className="truncate font-semibold">
                            {user.name}
                          </span>
                          <span className="truncate text-xs">{user.email}</span>
                        </div>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-slate-700" />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Sparkles />
                        Upgrade to Pro
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator className="bg-slate-700" />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <BadgeCheck />
                        Account
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CreditCard />
                        Billing
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Bell />
                        Notifications
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator className="bg-slate-700" />
                    <DropdownMenuItem onClick={handleLogOut}>
                      <LogOut />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <Sheet>
              <div className="lg:hidden">
                <SheetTrigger asChild>
                  <Button
                    className="bg-transparent hover:bg-neutral-900 active:bg-neutral-900"
                    size={"icon"}
                  >
                    <HiOutlineMenu />
                  </Button>
                </SheetTrigger>
              </div>

              <SheetContent side={"left"} className="bg-neutral-950 text-white">
                <SheetHeader>
                  <SheetTitle>
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
                  </SheetTitle>
                  <SheetDescription className="md:min-h-[500px]">
                    <div className="flex flex-col space-y-2 mt-5">
                      <Link
                        href={"/"}
                        className="flex space-x-2 items-center px-4 py-2 text-sm hover:bg-neutral-800 rounded-md text-white"
                      >
                        <HiOutlineAcademicCap className="w-[18px] h-5 stroke-1" />
                        <span>Workshops</span>
                      </Link>

                      <Link
                        href={"/"}
                        className="flex space-x-2 items-center px-4 py-2 text-sm hover:bg-neutral-800 rounded-md text-white"
                      >
                        <HiOutlineBookOpen className="w-[18px] h-5 stroke-1" />
                        <span>Browse library</span>
                      </Link>
                      <Link
                        href={"/"}
                        className="flex space-x-2 items-center px-4 py-2 text-sm hover:bg-neutral-800 rounded-md text-white"
                      >
                        <LayoutDashboard className="w-[18px] h-5 stroke-1" />
                        <span>Dashboard</span>
                      </Link>
                    </div>
                    <Separator className="my-2 bg-slate-700" />
                    <div className="flex flex-col space-y-2 mt-5">
                      <Link
                        href={"/"}
                        className="flex space-x-2 items-center px-4 py-2 text-sm hover:bg-neutral-800 rounded-md text-white"
                      >
                        <BsPerson className="w-[18px] h-5 stroke-inherit" />
                        <span>Workshops</span>
                      </Link>

                      <Link
                        href={"/"}
                        className="flex space-x-2 items-center px-4 py-2 text-sm hover:bg-neutral-800 rounded-md text-white"
                      >
                        <CiCreditCard1 className="w-[18px] h-5 stroke-1" />
                        <span>Account</span>
                      </Link>
                    </div>
                  </SheetDescription>
                </SheetHeader>
                <div className=" py-5 absolute w-full  max-w-xs bottom-0">
                  <SheetFooter className="  w-full">
                    <div className=" flex items-center gap-2 justify-between w-full ">
                      <Avatar className="h-8 w-8 rounded-full">
                        <AvatarImage
                          src={user?.avatar || ""}
                          alt={user?.name || ""}
                        />
                        <AvatarFallback className="rounded-full">
                          CN
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                          {user.name}
                        </span>
                        <span className="truncate text-xs">
                          {user?.status || "Personal"}
                        </span>
                      </div>
                      <button
                        onClick={handleLogOut}
                        className="flex items-center bg-slate-400/5 text-white px-2 py-2 rounded-md"
                      >
                        <IoIosLogOut className="ml-auto size-6" />
                      </button>
                    </div>
                  </SheetFooter>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
