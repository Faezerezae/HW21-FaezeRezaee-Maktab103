// import { useEffect, useState } from "react"

import { useQuery } from "react-query";
import {CardPost} from "../components/CardPost";
import { PostSkeleton } from "../components/PostSkeleton";
import { fetchPosts } from "../apis/post-api";

export default function Post() {
  const { data,isLoading } = useQuery("Post", fetchPosts);
  console.log(data)


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
      <div className=" grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 my-2 mx-auto max-w-7xl w-full px-4 sm:px-6 h-[598px] overflow-y-scroll lg:px-8 items-center gap-2 ">
        {data?.posts?.map((el: any) => {
          return(
          <CardPost {...el}  key={el.id}/>
          ) 
        })}
      </div>

    </main>}
    </>
  )
}



