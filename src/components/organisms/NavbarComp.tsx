"use client";

import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Avatar,
} from "@nextui-org/react";
import Link from "next/link";
import Logo from "../atoms/Logo";
import ThemSwitch from "../molecules/ThemSwitch";
import { useRouter } from "next/router";

const NavbarComp = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const name = "Sindre Sau";

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

  return (
    <>
      <Navbar
        isBordered
        shouldHideOnScroll
        isBlurred={true}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-background"
      >
        {/* Logo and toggle */}
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
            onChange={() => setIsMenuOpen(!isMenuOpen)}
          />
          <NavbarBrand className="pl-1.5 md:pl-0">
            <Link href={"/"}>
              <Logo />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* Menu */}
        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          {menuItems.map((item) => (
            <NavbarItem
              aria-current="page"
              key={item.name}
              isActive={pathname === item.href}
            >
              <Link
                className={
                  pathname === item.href ? "text-primary" : "text-foreground"
                }
                href={item.href}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Right menu */}
        <NavbarContent justify="end">
          <NavbarItem className="">
            <ThemSwitch />
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Avatar
              as="button"
              className="transition-transform"
              name={name}
            ></Avatar>
          </NavbarItem>
        </NavbarContent>

        {/* Toggled menu */}
        <NavbarMenu>
          {menuItems.map((item) => (
            <NavbarMenuItem
              onClick={() => {
                console.log("clicked");

                setIsMenuOpen(false);
              }}
              aria-current="page"
              key={item.name}
            >
              <Link
                className={
                  pathname === item.href ? "text-primary" : "text-foreground"
                }
                href={item.href}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default NavbarComp;
