

import { useQuery } from "react-query";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchPostInfo } from "../apis/post-api";
import { CardPost } from "../components/CardPost";
import { PostSkeleton } from "../components/PostSkeleton";

export default function PostInfo() {
    const { postId } = useParams();
    const { data,isLoading } = useQuery("PostInfo",() => fetchPostInfo(Number(postId)) );
    return (
        <>
         {isLoading ? (
        <div className="mx-auto px-2 max-w-lg my-8">
            <PostSkeleton />
        </div>
      ):
        <div className="mx-auto px-2 max-w-lg my-8">
        <div className="bg-white pb-8 rounded shadow">
        <CardPost post={data} disableShowMore={false} />
        {!window.location.pathname.includes("comments") && (
          <Link to={`/posts/${postId}/comments`}>
            <span className="text-sm ml-4 text-gray-500 hover:underline hover:cursor-pointer">
              Show comments ...
            </span>
          </Link>
        )}
        <Outlet/>
     </div>
    </div>
    }
    </>
  );
  };
  


