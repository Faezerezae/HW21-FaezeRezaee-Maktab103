// import { useEffect, useState } from "react"

import { useQuery } from "react-query";
import {CardPost} from "../components/CardPost";
import { PostSkeleton } from "../components/PostSkeleton";
import { fetchPosts } from "../apis/post-api";
import { useState } from "react";

export default function PostsList() {
  const [limit, setLimit] = useState(6);
  const { data,isLoading  } = useQuery(["Post", limit],() => fetchPosts(limit));
  console.log(data)

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 6);
  };

  return (
   <>
   {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 my-2 mx-auto max-w-7xl w-full px-4 sm:px-6 h-[598px] overflow-y-scroll lg:px-8 items-center gap-2">
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
        </div>
      ):
    <main className="">
        <div className="text-center font-semibold text-2xl drop-shadow-2xl">List Posts</div>
      <div className=" grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 my-2 mx-auto max-w-7xl w-full px-4 sm:px-6 h-[598px] overflow-y-auto lg:px-8 items-center gap-2 ">
        {data?.posts?.map((el: any) => {
          return(
            <div className="rounded shadow">
          <CardPost post={el}/>
          </div>
          ) 
        })}
      </div>
      <div className="text-center my-4 flex justify-center items-center gap-3">
            <button
              onClick={handleLoadMore}
              className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer disabled:cursor-none disabled:opacity-20"
              disabled={data?.posts?.length === data?.total}
            >
              Load More
            </button>
            <p>show <span className="text-red-600">{limit} </span> post</p>
          </div>
    </main>}
    </>
  )
}



