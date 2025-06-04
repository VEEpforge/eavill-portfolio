"use client"; // For Next.js (if using App Router)

import { useEffect, useState } from "react";

import cn from "classnames"; // Assuming you have a utility for classnames

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full bg-neutral-50/75 backdrop-blur-sm border-b border-dotted border-b-zinc-300 transition-transform duration-300",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div>
        <div className="flex items-center justify-between p-4 px-[3vw] text-black">
          <div className="text-xl text-zinc-950 font-extrabold tracking-wide font-satoshi">EVill</div>
          <nav className="hidden lg:flex space-x-4">
            <a href="#projects" className="text-sm tracking-wide">
              PROJECTS
            </a>
            <a href="#about" className="text-sm tracking-wide">
              ABOUT
            </a>
            <a href="#" className="text-sm tracking-wide">
              RESUME
            </a>
            <a href="#services" className="text-sm tracking-wide">
              SERVICES
            </a>
            <a href="#contact" className="text-sm tracking-wide">
              CONTACT
            </a>
          </nav>
        </div>
      </div>
      {/* <div className="p-4 lg:px-8 text-xl font-medium tracking-wide">EAVILL</div>
      <div className="p-4 lg:px-8 text-xl font-medium tracking-wide">ABOUT</div> */}
    </header>
  )
}

export default Header