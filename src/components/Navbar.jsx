import { User, ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/showcase/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../features/products/ProductSlice";

export default function Navbar() {
  const [isOpen, SetIsOpen] = useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.product.searchTerm);

  const handleUser = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <header className="bg-white shadow-md">
      <>
        <div className="py-4 shadow-md">
          <ul className="container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center relative">
            <div className="flex gap-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">FAQs</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </div>
            <div
              className={`${
                isOpen
                  ? "flex flex-col absolute right-0 md:right-0 top-12 z-10 bg-zinc-50 p-4 gap-4"
                  : "hidden"
              }`}
            >
              <li>
                <Link to="/">Sign in</Link>
              </li>
              <li>
                <Link to="/">My Account</Link>
              </li>
            </div>
            <User
              size={40}
              className="bg-gray-200 p-2 text-black rounded cursor-pointer"
              onClick={handleUser}
            />
          </ul>
        </div>
        <nav className="flex justify-between items-center container mx-auto md:py-6 py-8 px-2">
          <div>
            <Link to="/">
              <img
                src={logo}
                alt=""
                className="bg-gray-700 rounded text-gray-700"
              />
            </Link>
          </div>
          <form className="w-1/2 sm:block hidden">
            <input
              type="text"
              placeholder="Search Product"
              className="bg-zinc-100 rounded border border-zinz-200 focus:outline-none py-3 px-3 w-full"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
          </form>
          <Link to="/cart">
            <ShoppingCart
              size={54}
              className="cursor-pointer bg-gray-100 px-3 rounded-full py-2"
            />
          </Link>
        </nav>
      </>
    </header>
  );
}
