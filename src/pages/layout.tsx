import Navbar from "@/components/organisms/NavbarComp";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="flex h-auto w-full justify-center">
        <div className="mx-2.5 w-full max-w-[1024px] lg:mx-0">{children}</div>
      </main>
    </>
  );
};

export default Layout;
