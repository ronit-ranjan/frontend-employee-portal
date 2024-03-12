import React, { useState } from 'react';

const AnimatedDrawer = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="bg-gray-200 min-h-screen">
            <div className="bg-white shadow">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center py-4 px-2">
                        <h1 className="text-xl font-semibold">Animated Drawer</h1>
                        <button className="text-gray-500 hover:text-gray-600" onClick={openSidebar}>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex-1 overflow-auto p-4">
                <h1 className="text-2xl font-semibold">Welcome to our website</h1>
                <p>... Content goes here ...</p>
            </div>
            <div className={`absolute bg-gray-800 text-white w-56 min-h-screen overflow-y-auto transition-transform transform ${isSidebarOpen ? '-translate-x-full' : ''} ease-in-out duration-300`}>
                <div className="p-4">
                    <h1 className="text-2xl font-semibold">Sidebar</h1>
                    <ul className="mt-4">
                        <li className="mb-2">
                            <a href="/" className="block hover:text-indigo-400">
                                Home
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/" className="block hover:text-indigo-400">
                                About
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/" className="block hover:text-indigo-400">
                                Services
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/" className="block hover:text-indigo-400">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AnimatedDrawer;