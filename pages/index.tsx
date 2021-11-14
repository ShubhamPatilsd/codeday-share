import type { NextPage } from "next";
import { signOut } from "next-auth/client";
import PostCard from "../components/PostCard";
import Navbar from "../components/Navbar";

export interface DataProps {
  id: string;
  message: string;
  media?: string;
  resourceType?: string;
}

interface Posts {
  posts: DataProps[];
}

const Home: NextPage<Posts> = (props) => {
  return (
    <>
      <Navbar />
      <div>
        <div>
          <h1 className="text-center">CodeDay Share</h1>
          <button
            onClick={() => {
              signOut();
            }}
          >
            Sign out
          </button>
          <p className="text-center">
            A place where you can share what's going on at your CodeDay!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {props.posts.map((post) => {
              return (
                <PostCard
                  message={post.message}
                  media={post.media}
                  resourceType={post.resourceType}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  const { findAllPosts } = require("./api/get/all");

  const posts = await findAllPosts();

  return {
    props: { posts: posts },
  };
}

export default Home;
