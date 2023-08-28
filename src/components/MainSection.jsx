import { useState } from "react";
import Employees from "./Employees";
import Search from "./Search";
import { useSelector } from "react-redux";

function MainSection() {
  const [searchText, setSearchText] = useState("");
  const employees = useSelector((state) => state.employees);
  const [searchEmp, setSearchEmp] = useState([]);

  const searchForEmployee = (e) => {
    setSearchText(e.target.value);
    if (searchText) {
      const regex = new RegExp(e.target.value, "i"); // 'i' flag for case-insensitive search
      const searchObj = employees.filter(
        (item) =>
          regex.test(item.name) ||
          regex.test(item.position) ||
          regex.test(item.department)
      );
      setSearchEmp(searchObj);
    }
  };
  return (
    <div className="bg-[#f7f8f9] mr-8  ">
      <Search
        searchText={searchText}
        searchForEmployee={searchForEmployee}
        setSearchEmp={setSearchEmp}
      />
      <Employees searchEmp={searchEmp} />
    </div>
  );
}

export default MainSection;
