"use client";

import React from "react";
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
import Logo from "../icons/Logo";
import ThemSwitch from "../molecules/ThemSwitch";

const NavbarComp = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const name = "Sindre Sau";

  return (
    <>
      <Navbar isBordered isBlurred onMenuOpenChange={setIsMenuOpen}>
        {/* Logo and toggle */}
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link href={"/"}>
              <Logo />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* Menu */}
        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          <NavbarItem isActive>
            <Link color="foreground" href="/">
              Techitpedia
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/about" aria-current="page">
              About
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* Right menu */}
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
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
          <NavbarMenuItem>
            <Link href={"/"}>Techitpedia</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/about" aria-current="page">
              About
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default NavbarComp;
