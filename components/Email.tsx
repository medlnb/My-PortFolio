"use client";
import { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";

function Email() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("mohamedlanabi0@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <div
      className="text-2xl cursor-pointer flex items-center gap-2 hover:gap-3 duration-200 relative"
      onClick={handleCopy}
    >
      <MdAlternateEmail />
      <p className="text-lg">mohamedlanabi0@gmail.com</p>

      <p
        className={`absolute bottom-full left-1/2 -translate-x-1/2 bg-white text-black text-sm p-2 rounded-md duration-300 ${
          copied ? " scale-1" : " scale-0"
        }`}
      >
        Copied!
      </p>
    </div>
  );
}

export default Email;
