import { profileT } from "./lib/types";
import RepoList from "./components/repo-list";
import Link from "next/link";
import ProfileDetails from "./components/profile-details";
import { notFound } from "next/navigation";

type PageProps = {
  searchParams: {
    profile?: string;
  };
};

export default async function Page({ searchParams }: PageProps) {
  const profile = searchParams.profile || "github";

  const profileReq = await fetch(`https://api.github.com/users/${profile}`);
  const profileData = await profileReq.json();

  if (profileData.status === "404") {
    notFound();
  } else {
    // Profile detail data for cards
    const profileDetailData = [
      {
        term: "Followers",
        description: profileData.followers.toString(),
      },
      {
        term: "Following",
        description: profileData.following.toString(),
      },
      {
        term: "Location",
        description: profileData.location
          ? profileData.location.toString()
          : "N/A",
      },
    ];

    return (
      <main className="flex h-full flex-col justify-between gap-8 px-12 pb-12 xl:px-32">
        <ProfileDetails
          avatar_url={profileData.avatar_url}
          profileData={profileDetailData}
        />
        <section>
          <h1 className="text-[32px] font-medium text-white">
            {profileData.name}
          </h1>
          <p className="text-gray-light">{profileData.bio}</p>
        </section>
        <RepoList repos_url={profileData.repos_url} />

        {/* //TODO Get correct link: */}
        <Link
          href={profileData.html_url}
          target="_blank"
          className="mx-auto bg-gradient-to-r text-center font-medium text-gray-light outline-none transition hover:scale-105 focus:scale-105"
        >
          View all repositories
        </Link>
      </main>
    );
  }
}
