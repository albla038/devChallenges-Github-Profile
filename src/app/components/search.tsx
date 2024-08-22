"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";

import SearchResult from "./search-result";
import SearchBar from "./search-bar";

export type searchResultDataT = {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
};

export default function Search() {
  // hooks
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [profile, setProfile] = useState<searchResultDataT | null>(null);

  const params = new URLSearchParams(searchParams);

  // event handlers
  const handleChange = useDebouncedCallback(
    async (key: string, value: string) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
        setProfile(null);
      }

      replace(`${pathname}?${params.toString()}`);

      if (params.size !== 0) {
        const res = await fetch(`https://api.github.com/users/${value}`);
        if (res.ok) {
          const data = await res.json();
          const profileData: searchResultDataT = {
            login: data.login,
            avatar_url: data.avatar_url,
            name: data.name,
            bio: data.bio,
          };
          setProfile(profileData);
        } else {
          console.log("Request failed:", res.status, res.statusText);
        }
      }
    },
    300,
  );

  return (
    <>
      <SearchBar onChange={handleChange} />

      {profile && (
        <SearchResult
          href={`/${searchParams.get("search")?.toString()}`}
          profile={profile}
          setProfile={setProfile}
        />
      )}
    </>
  );
}
