import Navbar from "@/components/organisms/NavbarComp";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="container mt-2 md:mt-4 px-3">{children}</main>
    </>
  );
};

export default Layout;
