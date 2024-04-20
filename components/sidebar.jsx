"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Dashboard");
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className="flex border rounded-lg  ">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        }  h-screen relative duration-300 `}
      >
        <Image
          src="/menu.png"
          alt="logo"
          width={20}
          height={20}
          className={` object-contain absolute cursor-pointer -right-10 top-3 w-7 border-dark-purple 
            ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex w-full flex-row justify-center items-center shadow  py-10  ">
          <Image
            src="/favicon.png"
            alt="logo"
            width={40}
            height={40}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
        </div>
        <ul className="pt-6 mx-5 mt-3">
          <Link href="/">
            {" "}
            <li
              className={`flex rounded-sm p-2 cursor-pointer  text-sm items-center gap-x-4  ${
                activeItem === "Dashboard" ? "bg-yellow-300 font-semibold" : ""
              }`}
              onClick={() => handleItemClick("Dashboard")}
            >
              <Image
                src="/dashboard.png"
                alt="dashboard"
                width={20}
                height={20}
              />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Dashboard
              </span>
            </li>
          </Link>
          <Link href="/service">
            {" "}
            <li
              className={`flex rounded-sm p-2 cursor-pointer  text-sm items-center gap-x-4  ${
                activeItem === "service" ? "bg-yellow-300 font-semibold" : ""
              }`}
              onClick={() => handleItemClick("service")}
            >
              <Image src="/service.png" alt="service" width={26} height={26} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Services
              </span>{" "}
            </li>
          </Link>
          <Link href="/product">
            <li
              className={`flex rounded-sm p-2 cursor-pointer  text-sm items-center gap-x-4  ${
                activeItem === "product" ? "bg-yellow-300 font-semibold" : ""
              }`}
              onClick={() => handleItemClick("product")}
            >
              <Image src="/product.png" alt="product" width={26} height={26} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Products
              </span>
            </li>
          </Link>
        </ul>
        <Link href="/logout">
          <div
            className={`bg-yellow-300 py-2  cursor-pointer mt-60 mx-5 rounded-sm flex items-center justify-center gap-x-4 `}
          >
            <Image src="/logout.png" alt="logout" width={20} height={20} />
            <button className={`${!open && "hidden"} origin-left duration-200`}>
              Logout
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
