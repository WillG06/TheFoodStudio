import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  hideFooter?: boolean;
}

const Layout = ({ children, hideFooter = false }: LayoutProps) => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="relative">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
