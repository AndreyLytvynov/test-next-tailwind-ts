import React, { FC } from "react";
import MainNav from "@/components/MainNav";

const Header: FC = () => {
  return (
    <header className="flex p-5 bg-zinc-400 justify-between">
      <h2>LOGO</h2>
      <MainNav />
    </header>
  );
};

export default Header;
