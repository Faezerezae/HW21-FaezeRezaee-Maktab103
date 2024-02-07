import { useQuery } from "react-query";
import { fetchUsers } from "../apis/user-api"
import { IUser } from "../utils/types";
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';





export default function Home() {
    const { data } = useQuery('user',fetchUsers);
    console.log(data)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (screenWidth > 1024) {
            setSlidesPerView(3);
        } else if (screenWidth > 600) {
            setSlidesPerView(2);
        }
         else if (screenWidth < 600) {
            setSlidesPerView(1);
        }
    }, [screenWidth]);
    return (
       
        <section className="container mx-auto p-2 my-10 sm:px-3 lg:px-5 bg-white rounded-md shadow-xl">
            <h1 className='font-bold text-center text-5xl p-8' id='Work-samples'>Users</h1>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            > 
                {data?.users?.map((person:IUser) => (
                    <SwiperSlide key={person.username}>
                        <div className=' h-[300px] relative bottom-1'>
                        <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={person.image} alt="" />
                            <a className='absolute bg-slate-200 opacity-70 w-full p-3 text-center text-sm text-blue-500 rounded-md shadow-md top-40 left-0'>{person.email}</a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </section>
            
    )
}
