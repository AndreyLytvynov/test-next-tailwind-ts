import React, { FC } from "react";
import { GetServerSideProps } from "next";
import { IUser } from "@/types/user.type";
import GoBackButton from "@/components/Buttons/GoBackButton";

type IUserDetailsProps = {
  user: IUser;
};

const UserDetail: FC<IUserDetailsProps> = ({ user }) => {
  return (
    <div>
      <GoBackButton />
      <p>Name: {user.name}</p>
      <p>Phone: {user.phone}</p>
      <p>WebSite: {user.website}</p>
    </div>
  );
};

export default UserDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  return {
    props: { user: data },
  };
};
