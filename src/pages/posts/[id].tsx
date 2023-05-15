import React, { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import GoBackButton from "@/components/Buttons/GoBackButton";

import { IPost } from "@/types/post.type";

type IPostDetailsProps = {
  post: IPost;
};

const PostDetail: FC<IPostDetailsProps> = ({ post }) => {
  return (
    <div>
      <GoBackButton />
      <h2 className="font-bold py-4"> {post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const data = await response.json();

  const paths = data.map((post: IPost) => {
    return { params: { id: post.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as { id: string };

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();

  return {
    props: { post: data },
  };
};
