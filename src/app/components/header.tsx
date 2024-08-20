"use client";

import Image from "next/image";
import heroImage from "../../../public/hero-image-github-profile.png";
import searchIcon from "../../../public/Search.svg";
import clsx from "clsx";

export default function Header() {
  const handleChange = (term: string) => {
    console.log(term);
  };

  return (
    <header>
      <Image
        src={heroImage}
        alt=""
        className="h-60 object-cover"
        priority={true}
      />
      <label
        className={clsx([
          "absolute left-1/2 top-9 flex w-2/3 -translate-x-1/2 items-center gap-3 rounded-xl bg-gray-extradark p-4",
          // Small screen
          "sm:max-w-[460px]",
          // Focus ring
          "has-[:focus]:ring-2 has-[:focus]:ring-blue",
        ])}
      >
        <Image src={searchIcon} alt="" />
        <input
          type="text"
          placeholder="username"
          onChange={(e) => handleChange(e.target.value)}
          className="w-full bg-[inherit] text-gray-light outline-none placeholder:text-gray-medium"
        />
      </label>
    </header>
  );
}
