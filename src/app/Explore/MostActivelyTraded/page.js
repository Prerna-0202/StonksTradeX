"use client";
import Link from "next/link";
import useRequest from "../../../hooks/useRequest";
import { useState } from "react";

const Page = () => {
  const { data, isLoading } = useRequest("TOP_GAINERS_LOSERS");
  const [visibleCards, setVisibleCards] = useState(20); // I
  if (isLoading) {
    return (
      <div className="text-center mt-8">
        <div className="animate-ping absolute inline-block h-12 w-12 rounded-full bg-blue-500 opacity-75"></div>
        <div className="relative inline-block h-12 w-12 rounded-full border-t-4 border-r-4 border-b-4 border-blue-500"></div>
        <div className="mt-4 text-lg text-blue-500 font-semibold">
          Loading...
        </div>
      </div>
    );
  }

  if (!data) {
    return "No data found";
  }

  // Extract the top_gainers array from the data
  const mostActivelyTraded = data.most_actively_traded;

  const loadMore = () => {
    // Increase the number of visible cards by a certain amount, e.g., 10
    setVisibleCards(visibleCards + 6);
  };
  return (
    <>
      <div className="h-[calc(100vh-3rem)] md:h-[calc(100vh-5rem)]">
        {/* Headings */}
        <div className="mx-6 py-4 flex gap-5 font-semibold md:mx-20 md:font-bold md:text-xl">
          <Link href="/Explore">Top Gainers</Link>
          <Link href="/Explore/TopLosers">Top Losers</Link>
          <div className="border-b-2 border-blue-500 md:border-b-4">
            Most Actively Traded
          </div>
        </div>

        {/* Display Most_actively_Traded data */}
        <Link
          href="/Product"
          className="flex flex-wrap justify-center cursor-pointer"
        >
          {mostActivelyTraded.slice(0, visibleCards).map((gainer, index) => (
            <div key={index} className="flex flex-col bg-[#4bb7cd] rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 duration-500 hover:scale-105 hover:shadow-xl">
              <div className="h-20 w-20 mx-auto my-6 text-center">
                <img
                  src="https://groww.in/groww-logo-270.png"
                  alt=""
                  className="rounded-md text-center"
                />
              </div>
              <h2 className="text-center px-2 font-bold">{gainer.ticker}</h2>
              <p className="text-center px-2">Volume: {gainer.volume}</p>
              <div
                href="#"
                className="bg-[#0074e1] text-white p-3 text-center hover:bg-blue-800 transition-all duration-500 font-bold"
              >
                <div className="text-center">Price: $ {gainer.price}</div>
                <div className="text-center">{gainer.change_percentage}</div>
              </div>
            </div>
          ))}
        </Link>
        {visibleCards < mostActivelyTraded.length && (
          <div className="text-center mt-4">
            <button onClick={loadMore} className="bg-[#0074e1] text-white py-2 px-4 rounded font-bold cursor-pointer">
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
