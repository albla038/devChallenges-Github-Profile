"use client";

import clsx from "clsx";
import Image from "next/image";
import searchIcon from "../../../public/Search.svg";

type SearchBarProps = {
  onChange: (key: string, value: string) => void;
};

export default function SearchBar({ onChange }: SearchBarProps) {
  return (
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
        onChange={(e) => onChange("search", e.target.value)}
        className="w-full bg-[inherit] text-gray-light outline-none placeholder:text-gray-medium"
      />
    </label>
  );
}
