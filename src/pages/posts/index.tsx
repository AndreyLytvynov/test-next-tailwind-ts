import Link from "next/link";
import React, { FC } from "react";
import { GetStaticProps } from "next";

import { IPost } from "@/types/post.type";

type IPostsPageProps = {
  posts: IPost[];
};

const PostsPage: FC<IPostsPageProps> = ({ posts }) => {
  return (
    <ul className="flex flex-col gap-3">
      {posts.map((post) => {
        return (
          <li key={post.id} className="p-2 bg-teal-200 hover:bg-teal-300">
            <Link href={`posts/${post.id}`}>
              <p>{post.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PostsPage;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: { posts: data },
  };
};
