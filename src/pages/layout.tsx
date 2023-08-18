import Navbar from "@/components/organisms/NavbarComp";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="bg-primary">{children}</main>
    </>
  );
};

export default Layout;
