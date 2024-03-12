// import React, { useState } from 'react';
import EmplDetails from '../components/EmplDetails';
import "../index.css"
import Navbar from '../components/navbar';
const PageLayout = () => {

    return (
        <div className=" bg-image" >
            <Navbar />
            <div className="flex h-screen">
                {/* 1/4th left side for details */}
                <div className="w-1/3 p-4">
                    <EmplDetails />
                    {/* Add your details content here */}
                </div>

                {/* 3/4th right side for another section */}
                <section className="w-2/3  p-4 absolute top-[14rem] left-[35rem] bg-white rounded-2xl">
                    <h2 className="text-xl font-bold mb-4 ">Graph Section  
                    </h2>
                    {/* Add your code content here */}
                </section>
            </div>
        </div>
    );
};

export default PageLayout;
