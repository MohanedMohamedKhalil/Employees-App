import React, { useState } from "react";
import FormPopup from "./FormPopup";

function Search({ searchText, searchForEmployee, setSearchEmp }) {
  const [isOpen, setOpen] = useState(false);

  const openPopup = () => {
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
  };
  return (
    <>
      <div className=" relative  font-roboto flex justify-between gap-3  py-6 px-6 ">
        <input
          type="text"
          placeholder="Search"
          className="grow rounded-[5px]  px-16 focus:outline-none text-slate-500 "
          value={searchText}
          onChange={searchForEmployee}
        />
        <i className="fas fa-search text-[11px] absolute top-8  text-[#23aaeb] left-16 cursor-pointer max-[622px]:top-[38px] max-[594px]:top-[45px]  "></i>
        <button
          className="  leading-3	text-[13px]   px-4 text-slate-100 rounded-[5px] bg-[#2764ac]  py-2"
          onClick={openPopup}
        >
          <i className="fa-solid fa-plus text-sm mr-1"></i> Add new
        </button>
      </div>
      <FormPopup
        isOpen={isOpen}
        openPopup={openPopup}
        closePopup={closePopup}
        setSearchEmp={setSearchEmp}
      />
    </>
  );
}

export default Search;
