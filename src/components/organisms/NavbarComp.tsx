import { useRouter } from "next/router";
import ThemeToggler from "../molecules/ThemeToggler";
import Logo from "../atoms/Logo";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MenuIcon, User2, X } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const NavbarComp = () => {
  const router = useRouter();
  const { pathname } = router;

  const menuItems = [
    {
      name: "Techitpedia",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  // Close the navbar when the route changes or user clicks inside <main>
  useEffect(() => {
    setIsOpen(false);
  }, [router, setIsOpen]);

  // Animation
  const popIn = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.01,
      },
    },
  };

  const navbarVariants = {
    open: {
      opacity: 0.7,
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const { data: sessionData } = useSession();

  return (
    <nav className="sticky left-0 top-0 w-full border-b border-gray-200 bg-white shadow-md dark:border-gray-950 dark:bg-background">
      <motion.div
        variants={navbarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="container mx-auto flex flex-wrap items-center justify-between p-4"
      >
        {/* Left side */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-2 md:order-2 md:gap-0">
          {sessionData ? (
            <div className="flex items-center justify-center px-2">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  {/* <span className="hidden text-popover-foreground md:block">
                {sessionData?.user.name}
              </span> */}
                  <Avatar>
                    <AvatarImage>
                      <User2 />
                    </AvatarImage>
                    <AvatarFallback>
                      <Image
                        className="rounded-full"
                        src={sessionData?.user.image ?? ""}
                        width={34}
                        height={34}
                        alt="Img"
                      ></Image>
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel className="cursor-default">My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile (To be coming)</DropdownMenuItem>
                  <DropdownMenuItem>Settings (To be coming)</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => {
                      router.push("/api/auth/signout").catch((err) => {
                        console.log(err);
                      });
                    }}
                  >
                    <span className="font-bold">Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <Avatar className="cursor-not-allowed px-2">
              <AvatarImage>
                <User2 />
              </AvatarImage>
              <AvatarFallback>
                <User2 />
              </AvatarFallback>
            </Avatar>
          )}

          <ThemeToggler />

          {/* Menu toggle on smaller screens */}
          <div className="">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="px-2 md:hidden"
              variant={"outline"}
            >
              {isOpen ? <X /> : <MenuIcon />}
            </Button>
          </div>
        </div>

        {/* Middle section */}
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="flex gap-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Button
                  onClick={() => {
                    router.push(item.href).catch((err) => console.log(err));
                  }}
                  variant={pathname === item.href ? "secondary" : "ghost"}
                >
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Mobile */}
      {isOpen && (
        <motion.div initial="hidden" animate="visible" variants={popIn}>
          <Separator color="black" />
          <div className="mr-4 mt-4 flex w-full pb-2 md:hidden">
            <ul className="w-full">
              {menuItems.map((item) => (
                <li key={item.href} className="mb-1">
                  <Button
                    className="w-full"
                    onClick={() => {
                      router.push(item.href).catch((err) => console.log(err));
                    }}
                    variant={pathname === item.href ? "secondary" : "ghost"}
                  >
                    {/* Can't be selected with tab */}
                    <Link tabIndex={-1} href={item.href}>
                      {item.name}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default NavbarComp;
