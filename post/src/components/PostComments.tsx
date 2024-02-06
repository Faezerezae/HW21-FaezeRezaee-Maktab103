import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchPostComments } from '../apis/post-api';
import { Comment } from './Comments';



export default function PostComments() {
    const { postId } = useParams();
    const { data,isLoading ,isSuccess} = useQuery("PostInfo",() => fetchPostComments(Number(postId)) );
    console.log(data,isLoading)
    console.log(data.comments)

    if (isLoading) {
        return <p>Loading...</p>;
      }
      if (isSuccess) {
        return (
          <div className="border-t pt-3">
            <p className="pl-6 text-sm text-gray-500">Comments:</p>
            {data?.comments?.map((el:any) =>(
              <Comment key={el.id} {...el}/>
            ))}
          </div>
        );
      } else {
        return null;
      }
}


