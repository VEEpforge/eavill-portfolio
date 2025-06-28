"use client"; // For Next.js (if using App Router)

import { useEffect, useState } from "react";

import cn from "classnames"; // Assuming you have a utility for classnames
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
        "fixed top-0 left-0 z-50 w-full bg-zinc-100/75 backdrop-blur-sm border-b border-dotted border-b-zinc-300 transition-transform duration-300",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div>
        <div className="flex items-center justify-between p-4 px-[3vw] text-black">
          <div className="text-xl text-zinc-950 font-extrabold tracking-wide font-satoshi">EVill</div>
          <nav className="hidden lg:flex space-x-4">
            <Button
              // href="#projects"
              className="text-sm tracking-wide"
              variant="link"
              onClick={() => window.scrollTo({ top: document.getElementById("projects").offsetTop, behavior: 'smooth' })}
            >
              PROJECTS
            </Button>
            <Button
              href="#services"
              className="text-sm tracking-wide"
              variant="link"
              onClick={() => window.scrollTo({ top: document.getElementById("services").offsetTop, behavior: 'smooth' })}
            >
              SERVICES
            </Button>
            <Button
              // href="#about"
              className="text-sm tracking-wide"
              variant="link"
              onClick={() => window.scrollTo({ top: document.getElementById("about").offsetTop, behavior: 'smooth' })}
            >
              ABOUT
            </Button>
            <Button
              href="#contact"
              className="text-sm tracking-wide"
              variant="link"
              onClick={() => window.scrollTo({ top: document.getElementById("contact").offsetTop, behavior: 'smooth' })}
            >
              CONTACT
            </Button>
            <Button
              className="text-sm tracking-wide"
              variant="link"
            >
              <Link
                href='https://drive.google.com/file/d/1oK-MQmMRE0dM57BeTtRhdj4VtwbPuKbn/view?usp=sharing'
                target="_blank"
              >
                RESUME
              </Link>
            </Button>
          </nav>
        </div>
      </div>
      {/* <div className="p-4 lg:px-8 text-xl font-medium tracking-wide">EAVILL</div>
      <div className="p-4 lg:px-8 text-xl font-medium tracking-wide">ABOUT</div> */}
    </header>
  )
}

export default Header