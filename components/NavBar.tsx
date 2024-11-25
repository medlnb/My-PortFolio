"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFigma } from "react-icons/fa";

function NavBar() {
  const pathname = usePathname();
  const links = [
    { title: "_hello", link: "/" },
    { title: "_projects", link: "/myworks" },
  ];

  return (
    <header className="fixed w-full top-0 left-0 flex justify-between md:text-base text-xs items-center bg-black z-10 ">
      <nav className="flex">
        {links.map((link) => (
          <Link
            key={link.link}
            href={link.link}
            className={`py-3 md:px-20 px-2 relative ${
              pathname === link.link
                ? "active text-[#c09f5e] bg-primary"
                : "text-white"
            }`}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <a
        target="_blank"
        href="https://www.figma.com/file/kM6G8u4jp614eaqWovQ3wS/Resume-(Copy)?type=design&node-id=0%3A1&mode=design&t=0YMghWM1ZyDr2ykN-1"
        className="flex items-center gap-1 py-3 md:mx-20 mx-2 hover:text-yellow-500"
      >
        <FaFigma /> resume.get()
      </a>
    </header>
  );
}

export default NavBar;
