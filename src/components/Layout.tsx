import { FC, ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

type ILayoutProps = {
  children: ReactNode;
};

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pb-16 px-5 pt-5 bg-teal-100 h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
