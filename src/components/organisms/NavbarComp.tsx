import { useRouter } from "next/router";
import ThemeToggler from "../molecules/ThemeToggler";
import Logo from "../atoms/Logo";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MenuIcon, User2, X } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";

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

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky left-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-zinc-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        {/* Left side */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-2 md:order-2 md:gap-0">
          <Avatar className="px-2">
            <AvatarImage>
              <User2 />
            </AvatarImage>
            <AvatarFallback>
              <User2 />
            </AvatarFallback>
          </Avatar>
          <ThemeToggler />
          {/* Hamburger */}
          <div className="flex flex-col">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="px-2 md:hidden"
              variant={"outline"}
            >
              {isOpen ? <X /> : <MenuIcon />}
            </Button>
            {isOpen && (
              <div className="flex flex-col">
                <ul>
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <Button
                        onClick={() => {
                          router
                            .push(item.href)
                            .catch((err) => console.log(err));
                        }}
                        variant={pathname === item.href ? "outline" : "ghost"}
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Middle */}
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
                  variant={pathname === item.href ? "outline" : "ghost"}
                >
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;
