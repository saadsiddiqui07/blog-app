import Link from "next/link";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center p-6 rounded-md bg-gray-800 sticky top-0 z-10">
      <Link href={"/"} className="hover:underline">
        <h1>
          <span className="text-slate-500">Nextjs</span> &{" "}
          <span className="text-green-400">MongoDB</span>
        </h1>
      </Link>
      <Link
        className="flex flex-row items-center hover:bg-gray-700 px-2 py-1 rounded-md transition-all hover:ease-out duration-300"
        href={"/addNew"}
      >
        <span className="text-sm">Add new</span>
        <AiOutlinePlus color="lightblue" className="ml-2" />
      </Link>
    </nav>
  );
};

export default Navbar;
