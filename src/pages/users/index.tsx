import Link from "next/link";
import React from "react";

const UsersPage = ({ contacts }: any) => {
  console.log(contacts);
  return (
    <ul>
      {contacts.map((user: any) => {
        return (
          <li key={user.id}>
            <Link href={`${user.id}`}>
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
    props: { contacts: data },
  };
};
