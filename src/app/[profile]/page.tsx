import Image from "next/image";
import { profileT } from "../lib/types";
import RepoList from "../components/repo-list";
import Link from "next/link";
import ProfileDetails from "../components/profile-details";

type PageProps = {
  params: {
    profile: string;
  };
};

export default async function Page({ params }: PageProps) {
  const profile_req = await fetch(
    `https://api.github.com/users/${params.profile}`,
  );
  const profile: profileT = await profile_req.json();

  // Profile detail data for cards
  const profileDetailData = [
    {
      term: "Followers",
      description: profile.followers.toString(),
    },
    {
      term: "Following",
      description: profile.following.toString(),
    },
    {
      term: "Location",
      description: profile.location,
    },
  ];

  return (
    <main className="flex h-full flex-col justify-between gap-8 px-12 pb-12 xl:px-32">
      <ProfileDetails
        avatar_url={profile.avatar_url}
        profileData={profileDetailData}
      />

      <section>
        <h1 className="text-[32px] font-medium text-white">{profile.name}</h1>
        <p className="text-gray-light">{profile.bio}</p>
      </section>

      <RepoList repos_url={profile.repos_url} />

      <Link
        href={profile.html_url}
        target="_blank"
        className="mx-auto bg-gradient-to-r text-center font-medium text-gray-light"
      >
        View all repositories
      </Link>
    </main>
  );
}
