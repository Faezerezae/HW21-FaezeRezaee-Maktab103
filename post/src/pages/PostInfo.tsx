import { useQuery } from "react-query";
import { useLoaderData, useParams } from "react-router-dom";
import { fetchPostComments, fetchPostInfo } from "../apis/post-api";
import { CardPost } from "../components/CardPost";
import { PostSkeleton } from "../components/PostSkeleton";
import { Comment } from "../components/Comments";

export default function PostInfo() {
    const { postId } = useParams();
    const { data,isLoading } = useQuery("PostInfo",() => fetchPostInfo(Number(postId)) );
    const loaderData = useLoaderData();
    const {data:postComent,refetch}=useQuery({
      queryKey:["postComent",postId],
      queryFn:()=>fetchPostComments(Number(postId)),
      enabled:false
    })
    console.log(postComent)
    return (
        <>
         {isLoading ? (
        <div className="mx-auto px-2 max-w-lg my-8">
            <PostSkeleton />
        </div>
      ):
        <div className="mx-auto px-2 max-w-lg my-8">
        <div className="bg-white pb-8 rounded shadow">
        <CardPost post={loaderData || data} disableShowMore={true} />
  
          
            <button className="text-sm ml-4 text-gray-500 hover:underline hover:cursor-pointer"
            onClick={()=>refetch()}
            >
              Show comments ...
            </button>

            <div className="border-t">
            {postComent?.comments?.map((el:any) =>(
              <Comment key={el.id} {...el}/>
            ))}
          </div>
       
        
     </div>
    </div>
    }
    </>
  );
  };
  


