import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
const Search = () => {
    const [fixed, setfixed]=useState<boolean>(false)
    function FixedSearchBar() {
        window.scrollY>=350?setfixed(true):setfixed(false)
    }
    window.addEventListener("scroll",FixedSearchBar)
    return (
        <div className={`${fixed?"fixed top-0 py-6":"static py-12"} w-full flex justify-center z-50 bg-white`}>
            <div className="w-[60vw] relative">
                <input id="search" type="text" className="rounded-3xl border border-gray-300 pl-48 font-Montserrat font-medium py-2 w-full focus:outline-none"  placeholder="Search"/>
                <label htmlFor="search" className="absolute rounded-3xl h-full p-2 cursor-pointer right-0 bg-gray-300">
                <RiSearchLine size={20}/>
                </label>
                <button className="absolute left-3 h-full p-2 font-Montserrat font-medium">
                    All Categories
                </button>
               
            </div>
        </div>
    )
}

export default Search
