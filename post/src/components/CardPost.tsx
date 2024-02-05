import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { classNames } from "../utils/className";
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchUserById } from '../apis/user-api';
import { IPost } from '../utils/types';


export const CardPost = ({ id, title, body, tags, reactions, userId, disableShowMore = false }: IPost) => {
    const { data } = useQuery(['user', userId], () => fetchUserById(userId));
    return (
        <div className="p-4 bg-white rounded shadow md:p-6 dark:border-gray-700">
            <div className="flex space-x-3">
                <div className="flex-shrink-0">
                    <img
                        className="h-10 w-10 rounded-full"
                        src={data?.image}
                        alt=""
                    />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 hover:underline">
                        {data?.firstName} {data?.lastName}
                    </p>
                    <p className="text-sm text-gray-500 hover:underline w-48 truncate">
                        {title}
                    </p>
                </div>
                <div className="flex-shrink-0 self-center flex">
                    <Menu as="div" className="relative z-30 inline-block text-left">
                        <div>
                            <Menu.Button className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
                                <span className="sr-only">Open options</span>
                                <svg
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    {tags.map((tag, index) => (
                                        <Menu.Item key={index}>
                                            {({ active }) => (
                                                <p
                                                    className={classNames(
                                                        active
                                                            ? "bg-gray-100 text-gray-900"
                                                            : "text-gray-700",
                                                        "flex px-4 py-2 text-sm capitalize"
                                                    )}
                                                >
                                                    {tag}
                                                </p>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
            <p className="text-sm text-gray-500 my-4 truncate w-80">{body}</p>
            <div className="inline-flex items-center gap-x-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 fill-red-500 text-red-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                </svg>
                <span className="text-sm text-gray-500 font-semibold">
                    {reactions}
                </span>
                {!disableShowMore && (
                    <Link to={`/posts/${id}`}>
                        <span className="text-sm ml-4 text-gray-500 hover:underline hover:cursor-pointer">
                            Show more ...
                        </span>
                    </Link>
                )}
            </div>
        </div>
    )
}
