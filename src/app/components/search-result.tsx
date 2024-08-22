"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import OutsideClick from "outsideclick-react";
import { Dispatch, SetStateAction } from "react";
import { searchResultDataT } from "./search";

type SearchResultProps = {
  href: string;
  profile: searchResultDataT;
  setProfile: Dispatch<SetStateAction<searchResultDataT | null>>;
};

export default function SearchResult({
  href,
  profile,
  setProfile,
}: SearchResultProps) {
  return (
    <OutsideClick onOutsideClick={() => setProfile(null)}>
      <Link
        href={href}
        onClick={() => setProfile(null)}
        className={clsx([
          "absolute left-1/2 top-[102px] z-10 flex w-2/3 -translate-x-1/2 items-center gap-3 rounded-xl bg-black p-2 outline-none",
          // Small screen
          "sm:max-w-[460px]",
          // Hover
          "transition hover:scale-[1.025]",
          // Focus ring
          "focus:ring-2 focus:ring-blue",
        ])}
      >
        <Image
          src={profile.avatar_url}
          alt="Avatar"
          width={64}
          height={64}
          className="rounded-xl"
        />
        <div className="space-y-1">
          <p className="text-white">{profile.name}</p>
          <p className="text-xs">{profile.bio}</p>
        </div>
      </Link>
    </OutsideClick>
  );
}
