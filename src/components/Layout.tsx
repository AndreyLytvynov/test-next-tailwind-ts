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
      <main className="pb-16 px-5 pt-5">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
