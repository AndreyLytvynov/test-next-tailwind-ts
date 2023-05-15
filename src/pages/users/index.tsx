import Link from "next/link";
import React, { FC } from "react";
import { IUser } from "@/types/user.type";

type IUsersProps = {
  users: IUser[];
};

const UsersPage: FC<IUsersProps> = ({ users }) => {
  return (
    <ul className="flex flex-col gap-3">
      {users.map((user) => {
        return (
          <li key={user.id} className="p-2 bg-teal-200 hover:bg-teal-300">
            <Link href={`users/${user.id}`}>
              <p>{user.name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default UsersPage;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: { users: data },
  };
};
