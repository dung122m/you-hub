import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/contextApi";
import Loader from "../shared/Loader";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);
  const navigate = useNavigate();
  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/SearchResult/${searchQuery}`);
    }
  };
  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };
  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];
  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
      {loading && <Loader />}
      <div className="flex h-14 items-center">
        {pageName !== "video" && (
          <div className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6] onClick = {mobileMenuToggle}">
            {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )}
        <Link to="/" className="flex h-14 items-center">
          <img
            className="h-full hidden dark:md:block mx-7"
            src="https://www.numerama.com/wp-content/uploads/2020/06/youtube-mix-hub.jpg"
            alt=" ytb"
          />
          <img
            className="  h-full md:hidden "
            src="https://www.numerama.com/wp-content/uploads/2020/06/youtube-mix-hub.jpg"
            alt="ytb"
          />
        </Link>
      </div>
      <div className="group flex items-center">
        <div className="flex h-8 md:h-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-orange-700 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 items-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl ml-4" />
          </div>
          <input
            type="text"
            className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 wd:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
            placeholder="Tìm kiếm"
          />
        </div>
        <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center  justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.2] ">
          <IoIosSearch className="text-white text-xl " />
        </button>
      </div>
      <div className="flex items-center ">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-orange-700 cursor-pointer">
            <RiVideoAddLine className="text-white text-xl cursor-poiinter" />
          </div>
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-orange-700 cursor-pointer">
            <FiBell className="text-white text-xl cursor-poiinter" />
          </div>
          <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4 ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfGMPEdu_p0XOW0XwzL9oqfpXT8IJwOj3ZQ&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
