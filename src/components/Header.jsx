function Header() {
  return (
    <header className="flex justify-end items-center space-x-5 pt-2 pb-8 mr-8 pl-1 ">
      <span className="text-[#474747]  font-roboto text-[15px]  max-[770px]:px-2 mr-4">
        Thursday, 03 Oct 02:08:07 PM
      </span>
      <button className="text-white bg-[#27b40c] rounded-md text-sm w-[94px] h-[27px] block">
        Sign in
      </button>
      <span>
        <i className="text-[#8997a4] fa-solid fa-bell"></i>
      </span>
      <div className="flex items-center gap-2 text-[#8997a4] font-roboto ">
        <img
          className="rounded-full w-[32px] "
          src="https://randomuser.me/api/portraits/men/4.jpg"
          alt="user"
        />
        <p className="">Mohaned Mohamed</p>
        <span className=" text-xs">&#5167;</span>
      </div>
      <span>&#129123;</span>
    </header>
  );
}

export default Header;
