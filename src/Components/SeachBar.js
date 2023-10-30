"use client";
import { useState, useRef } from "react";
import useRequest from "@/hooks/useRequest";

const SearchBar = () => {
  const [keywords, setKeyword] = useState(undefined);
  const [focused, setFocused] = useState(false);

  const ref = useRef(null);

  const { data, isLoading, remove } = useRequest("SYMBOL_SEARCH", {
    keywords,
  });

  return (
    <div
      className={`flex flex-col relative justify-start ${keywords && !isLoading && data && focused ? "top-[7.5rem]" : ""
        }`}
    >
      <input
        value={keywords}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFocused(false);
          remove();
        }}
        onChange={(event) => setKeyword(event.target.value)}
        type="text"
        ref={ref}
        className="block py-2 px-4 w-70 text-gray-900 bg-white outline-none w-80 focus:w-[500px] focus:rounded-b-none transition-all rounded-md"
        placeholder="Search Here..."
      />
      {keywords && !isLoading && data && focused && (
        <ul className="relative top-30 bg-white rounded-t-none rounded-md p-4 w-[500px] border-t drop-shadow-md h-[240px] overflow-auto">
          {/* add search results here */}
          {data?.bestMatches?.map((match) => (
            <li key={match["1. symbol."]} className="border-b text-gray-600">
              <button className="bg-none w-full hover:bg-blue-50 text-left p-2 shadow-none rounded-none">
                {" "}
                {match["2. name"]}
              </button>
            </li>
          )) || <div className="text-black text-center">No Result Found!</div>}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
