import { useState } from "react";
import UlNav from "../atoms/UlNav";
import LiNav from "../atoms/LiNav";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-white/10">
      <div className="h-20 flex justify-between items-center px-4 lg:px-8">
        <div className="flex gap-2 text-lg sm:text-xl font-bold flex-wrap">
          <p>Breackers Plaza</p>
          <p className="text-teal-300">Condominiums</p>
        </div>

        <div className="hidden md:block">
          <UlNav className="flex items-center gap-6">
            <LiNav text="Home" link="/" />
            <LiNav text="Us" link="/us" />
            <LiNav text="Gallery" link="/gallery" />
            <LiNav text="Amenities" link="/amenities" />
            <li>
              <a
                href="/location"
                className="py-2 px-4 rounded bg-teal-300 font-semibold hover:opacity-90">
                Location
              </a>
            </li>
          </UlNav>
        </div>

        <button
          className="md:hidden p-2 rounded hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
          aria-expanded={open}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-7 h-7">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className={`${open ? "fixed" : "hidden"} md:hidden z-5 w-3/4`}>
        <UlNav className="flex flex-col gap-3 bg-black/80 rounded-xl p-4 w-full ">
          <LiNav text="Home" link="/" />
          <LiNav text="Us" link="/us" />
          <LiNav text="Gallery" link="/gallery" />
          <LiNav text="Amenities" link="/amenities" />
          <li>
            <a
              href="/location"
              className="block text-center py-2 px-4 rounded bg-teal-300 font-semibold hover:opacity-90">
              Location
            </a>
          </li>
        </UlNav>
      </div>
    </nav>
  );
}
