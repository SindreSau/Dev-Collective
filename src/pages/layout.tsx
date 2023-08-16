import Navbar from "@/components/organisms/NavbarComp";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
