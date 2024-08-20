import Image from "next/image";
import Link from "next/link";
import shieldIcon from "../../../public/Chield_alt.svg";
import nestingIcon from "../../../public/Nesting.svg";
import starIcon from "../../../public/Star.svg";
import clsx from "clsx";

type RepoCardProps = {
  name: string;
  description: string | null;
  license: null | {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  };
  forksCount: number;
  stargazersCount: number;
  updatedAt: string;
  url: string;
};

export default function RepoCard({
  name,
  description,
  license,
  forksCount,
  stargazersCount,
  updatedAt,
  url,
}: RepoCardProps) {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;

  const currentDate = new Date().getTime();
  const updatedDate = Date.parse(updatedAt);
  const timeDiff = Math.floor((currentDate - updatedDate) / MS_PER_DAY);

  return (
    <Link
      href={url}
      target="_blank"
      className={clsx([
        "flex h-fit w-full flex-col gap-4 rounded-xl bg-gradient-to-r from-black to-purple p-6",
        // hover states
        "outline-none transition hover:scale-[1.025] focus:scale-[1.025]",
      ])}
    >
      <h2 className="text-xl text-white">{name}</h2>

      {description && <p className="lg:w-5/6">{description}</p>}

      <div className="flex items-center gap-4">
        {license && (
          <span className="flex items-center gap-1">
            <Image src={shieldIcon} alt="" />
            <span>{license.spdx_id}</span>
          </span>
        )}
        <span className="flex items-center gap-1">
          <Image src={nestingIcon} alt="" />
          <span>{forksCount}</span>
        </span>
        <span className="flex items-center gap-1">
          <Image src={starIcon} alt="" />
          <span>{stargazersCount}</span>
        </span>
        <span className="ml-4 text-xs">updated {timeDiff} days ago</span>
      </div>
    </Link>
  );
}
