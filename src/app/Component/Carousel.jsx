"use client"

import Image from "next/image";
import { useEffect, useState } from "react";



const Carousel = () => {
    const [page, setPage] = useState(1);
    useEffect(() => {
        let int = setInterval(() => {
            setPage(prev => ((prev + 1) >= 5 ? 1 : prev + 1));
        }, 2000);
        return () => clearInterval(int);
    });
    // const handlePrevPage = () => {
    //     setPage(prev => ((prev - 1) <= 0 ? 3 : prev - 1));
    // }

    // const handleNextPage = () => {
    //     setPage(prev => ((prev + 1) >= 4 ? 1 : prev + 1));
    // }

    return (
        <main className="relative flex h-[calc(100vh-200px)] w-screen flex-col justify-center items-center">

            <div className="absolute w-full  h-96">
                <Image src={`/image/c-${page}.jpg`} className=" w-4/5 h-full object-cover object-center" width={1000000} height={10000} alt="Carousel Image" />
                {/* <div className="absolute bottom-8 left-10 py-3 px-6 bg-[#0000007c] rounded-lg">
                    {/* <h2 className="text-4xl">Responsive Carousel {page}</h2>
                    <p className="text-2xl mt-4 text-purple-200">Design & Developed by Saiful</p>
                </div> */}
            </div>


            {/* Left Arrow */}
            {/* <div onClick={handlePrevPage} className="z-10  fixed bottom-1/2 left-4 text-2xl font-semibold">
                <span className="absolute inline-block transition-transform hover:-translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-violet-500"> &lt;-</span>
            </div> */}

            {/* Right Arrow */}
            {/* <div onClick={handleNextPage} className="z-10 fixed bottom-1/2 right-4 text-2xl font-semibold">
                <span className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-violet-500"> -&gt;</span>
            </div> */}


        </main>
    );
};

export default Carousel;