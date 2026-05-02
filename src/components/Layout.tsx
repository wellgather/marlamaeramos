import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Layout = () => (
  <div className="min-h-screen flex flex-col">
    <div className="relative">
      <Header />
    </div>
    <main className="flex-1 -mt-20">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
