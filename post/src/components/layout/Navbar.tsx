/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'
import { SetStateAction, useState } from 'react';
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { Link } from 'react-router-dom';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

console.log(classNames)

export default function Navbar() {
  const [activeNavItem, setActiveNavItem] = useState('');

  const handleNavItemClick = (navItem: SetStateAction<string>) => {
    setActiveNavItem(navItem);
  };

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <ul>
                    <li className={`nav-item ${activeNavItem === 'home' ? 'border-indigo-500 text-gray-900 inline-flex items-center px-2 pt-1 border-b-2 text-sm font-medium' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-2 pt-1 border-b-2 text-sm font-medium'}`}>
                      <button onClick={() => handleNavItemClick('home')}><Link to={"/"}>Home</Link></button>
                    </li>
                    <li className={`nav-item ${activeNavItem === 'posts' ? 'border-indigo-500 text-gray-900 inline-flex items-center px-2 pt-1 border-b-2 text-sm font-medium' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-2 pt-1 border-b-2 text-sm font-medium'}`}>
                      <button onClick={() => handleNavItemClick('posts')}><Link to={"/posts"}>Posts</Link></button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiOutlineX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <ul>
                <li className={`nav-item ${activeNavItem === 'home' ? 'bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'}`}>
                  <button onClick={() => handleNavItemClick('home')}><Link to={"/"}>Home</Link></button>
                </li>
                <li className={`nav-item ${activeNavItem === 'post' ? 'bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'}`}>
                  <button onClick={() => handleNavItemClick('post')}><Link to={"/posts"}>Posts</Link></button>
                </li>
              </ul>
            </div>

          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
