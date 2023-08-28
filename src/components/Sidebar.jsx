function Sidebar() {
  return (
    <aside className="sidebar text-center">
      <ul className=" font-roboto  text-white cursor-pointer">
        <li className="h-24 flex flex-col justify-center">
          <i className=" text-2xl fa-solid fa-table"></i>
          <p className=" tracking-[0.66px] text-xs mt-2 ">Dashboard</p>
        </li>
        <li className="h-24 flex flex-col justify-center">
          <i className="text-2xl fa-solid fa-display"></i>
          <p className="tracking-[0.66px] text-xs mt-2">Workplace</p>
        </li>
        <li className="h-24 flex flex-col justify-center">
          <i className="text-2xl fa-solid fa-mug-saucer"></i>
          <p className="tracking-[0.66px] text-xs mt-2">Holidays</p>
        </li>
        <li className="active h-24 flex flex-col justify-center">
          <i className="text-2xl fa-solid fa-user-group"></i>
          <p className="tracking-[0.66px] text-xs mt-2">Employees</p>
        </li>
        <li className="h-24 flex flex-col justify-center">
          <i className="text-2xl fa-solid fa-hands-holding"></i>
          <p className="tracking-[0.9px] text-xs mt-2 ">inbound requests</p>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
