import Image from "next/image";
import { profileT } from "../lib/types";
import { debug, log } from "console";

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

  const repos_req = await fetch(profile.repos_url);
  const data = await repos_req.json();
  // Get the first 4 repos
  const repos = data.slice(0, 4);

  return (
    <main className="h-full bg-gray-medium">
      <Image src={profile.avatar_url} alt="Avatar" width={192} height={192} />
      <h1>{profile.name}</h1>
      <p>{profile.bio}</p>
    </main>
  );
}
