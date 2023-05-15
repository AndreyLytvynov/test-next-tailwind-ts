import Link from "next/link";
import React, { FC } from "react";

const MainNav: FC = () => {
  return (
    <nav>
      <ul className="flex gap-10">
        <li>
          <Link href="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <span>Users</span>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <span>Posts</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
