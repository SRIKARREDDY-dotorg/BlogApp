import { useEffect } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";
import { Spinner } from "flowbite-react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/post/getPosts?limit=6");
        const data = await res.json();
        setPosts(data.posts);
      } finally {
        // Set loading to false after the operation is complete
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-6 px-3 p-28 max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold lg:text-6xl ">Welcome to my Blog</h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Here you'll find a variety of articles and tutorials on topics such as
          web development, software engineering, and programming languages.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Spinner size="xl" />
        </div>
      ) : (
        <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
          {posts && posts.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold text-center">
                Recent Posts
              </h2>
              <div className="flex flex-wrap gap-4 justify-center mt-4">
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
              <Link
                to={"/search"}
                className="text-lg text-teal-500 hover:underline text-center"
              >
                View all posts
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
