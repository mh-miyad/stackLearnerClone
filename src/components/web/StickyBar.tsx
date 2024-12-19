import { useState } from "react";

export default function StickyBar() {
  const [show, setShow] = useState(true);
  return (
    <section
      className={`${show ? "opacity-100" : "opacity-0 hidden"} duration-500`}
    >
      <div className="w-full bg-gradient-to-l from-[#27F090] via-[#7F41F3] to-[#F59527] px-4 md:px-10">
        <div className="relative pr-6">
          <p className="py-3 text-center text-sm font-semibold text-white md:text-base">
            On Sale For A Very Limited Time!
            <a href="#" className="pl-1 underline">
              Get it now→
            </a>
          </p>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 text-dark-4 duration-200 hover:text-white"
            onClick={() => setShow(!show)}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2386_1123)">
                <path
                  d="M1 1L7 7M7 7L13 13M7 7L13 1M7 7L1 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2386_1123">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
