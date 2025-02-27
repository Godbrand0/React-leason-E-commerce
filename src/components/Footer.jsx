import React from "react";
import logo from "../assets/images/showcase/logo.svg";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="min-h-16">
          <div className="flex justify-between items-center flex-col md:flex-row py-10">
            <h2 className="text-4xl font-bold text-white">
              Suscribe Our Newsletter
            </h2>
            <form className="md:w-1/3 w-full mt-8 md:mt-0 relative">
              <input
                type="text"
                placeholder="Enter your Email"
                className="py-4 px-4 rounded shadow-md w-full"
              />
              <button className="bg-gray-200 py-3 px-4 rounded-full absolute right-3 top-1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div>
              <img src={logo} alt="" className="my-4" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cupiditate molestiae consectetur ducimus ab possimus velit
                dolorem, deserunt voluptatibus cum id aut, nisi facere,
                perspiciatis eveniet enim beatae est asperiores doloribus?
              </p>
              <div className="flex items-center gap-8 mt-5">
                <Facebook
                  size={40}
                  className="bg-white text-black rounded-md p-2 cursor-pointer"
                />
                <Twitter
                  size={40}
                  className="bg-white text-black rounded-md p-2 cursor-pointer"
                />
                <Youtube
                  size={40}
                  className="bg-white text-black rounded-md p-2 cursor-pointer"
                />
                <Instagram
                  size={40}
                  className="bg-white text-black rounded-md p-2 cursor-pointer"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold my-4 "> Pages</h2>
              <ul>
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
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold my-4 "> Categories</h2>
              <ul>
                <li>
                  <Link to="/">Monitors</Link>
                </li>
                <li>
                  <Link to="/">GPUs</Link>
                </li>
                <li>
                  <Link to="/">Laptops</Link>
                </li>
                <li>
                  <Link to="/">Power Supply</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold my-4 "> Pages</h2>
            </div>
            <p>70 Washington square South, New York, Ny 10012, United States</p>
            <p>+12343443232</p>
            <p>+12343443232</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
