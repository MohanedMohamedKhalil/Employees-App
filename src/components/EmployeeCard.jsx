import { useState } from "react";

const style = {
  Present: "bg-[#27b40c]/10 text-[#27b40c]",
  Absent: "bg-[#ff6a6a]/10 text-[#ff6a6a]",
  Holiday: "bg-[#23aaeb]/10 text-[#23aaeb]",
  Weekend: "bg-[#2764ac]/10 text-[#2764ac]",
  OnLeave: "bg-[#8997a4]/10 text-[#8997a4]",
};

function EmployeeCard({ employee }) {
  const [info, setInfo] = useState(null);
  function handleToggle() {
    setInfo((info) => !info);
  }
  return (
    <div
      className="employee-card flex space-x-12 items-center"
      key={employee?.id}
    >
      {/* <div
      className="employee-card flex space-x-12 items-center"
      key={employee?.id}
    > */}
      <div className="relative">
        <img
          src={employee.img}
          alt="employee"
          className="rounded-full w-[64px] h-[64px]"
        />
        <ul className="flex text-[#8997a4] text-[10px] mt-2 space-x-5">
          <li>
            <i className="fa-solid fa-pen"></i>
          </li>
          <li>
            <i className="fa-regular fa-circle-pause"></i>
          </li>
          <li>
            <i className="fa-solid fa-trash"></i>
          </li>
        </ul>
        <p className="absolute  h-[86px]  w-[0.1px]   bg-[#8997a4] opacity-10 top-0  left-[90px]"></p>
      </div>
      <div className="details flex flex-col grow">
        <p className=" font-lato italic  font-semibold text-[20px]  tracking-normal text-[#5c6974] ">
          {employee.name}
        </p>
        <p className=" font-roboto text-sm  ">{employee.position}</p>
        <p className="text-[#5c6974]  text-[10px] ">{employee.department}</p>
        <footer className="flex justify-between items-center mt-2 relative ">
          <p
            className={`rounded-sm ${
              style[employee.attendance]
            } px-2 pt-[0.5px] text-[11px] font-lato`}
          >
            {employee?.attendance}
          </p>
          <ul className="flex text-[#313030] text-[10px] space-x-2 ">
            <li>
              <i className="fa-solid fa-envelope bg-[#eaeef0] rounded-full py-[6px]  px-[6px]  "></i>
            </li>
            <li>
              <i className="fa-solid fa-phone bg-[#eaeef0] rounded-full py-[6px]  px-[5.7px] "></i>
            </li>
            <li onClick={handleToggle}>
              <i className="fa-solid fa-exclamation bg-[#eaeef0] rounded-full py-[6px] px-[10px] cursor-pointer z-20"></i>
            </li>
          </ul>
          {info && (
            <div className=" info  text-[8px] font-roboto grid grid-cols-3 ">
              <span
                className="arrow cursor-pointer"
                onClick={handleToggle}
              ></span>
              <div>
                <p className="text-[#8997a4]">Office</p>
                <p>{employee.office}</p>
              </div>
              <div>
                <p className="text-[#8997a4]">Role</p>
                <p>{employee.role}</p>
              </div>
              <div>
                <p className="text-[#8997a4]">Copied Manager</p>
                <p>{employee.manager}</p>
              </div>
              <div>
                <p className="text-[#8997a4]">Joining Date</p>
                <p>{employee.date}</p>
              </div>
              <div>
                <p className="text-[#8997a4]">Manager</p>
                <p>{employee.manager}</p>
              </div>
            </div>
          )}
        </footer>
      </div>
    </div>
  );
}

export default EmployeeCard;
