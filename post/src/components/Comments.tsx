import { IComment, IUser } from '../utils/types';
import { fetchUserById } from '../apis/user-api';
import { useEffect, useState } from 'react';



export const Comment = ({ body,user }:IComment) => {
    
    const [userData, setUserData] = useState<IUser | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchUserById(user.id);
          setUserData(data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
  
      fetchData();
    }, [user.id]);
  return (
    <div className="bg-white px-4 py-5 sm:px-6">
      <div className="flex space-x-3 items-center">
      <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src={userData?.image}
            alt=""
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-gray-900 hover:underline">
            {user?.username}
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-500 my-4">{body}</p>
    </div>
  );
};


