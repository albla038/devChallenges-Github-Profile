import Image from "next/image";
import ProfileDetail from "../components/profile-detail";

type ProfileDetailsProps = {
  avatar_url: string;
  profileData: {
    term: string;
    description: string;
  }[];
};

export default function ProfileDetails({
  avatar_url,
  profileData,
}: ProfileDetailsProps) {
  return (
    <section className="flex gap-8 pt-2">
      <Image
        src={avatar_url}
        alt="Avatar"
        width={128}
        height={128}
        className="relative -top-14 size-[128px] rounded-3xl border-8 border-gray-dark object-none"
      />
      <dl className="flex flex-col items-start gap-4 lg:flex-row">
        {profileData.map((detail) => (
          <ProfileDetail
            key={detail.term}
            term={detail.term}
            description={detail.description}
          />
        ))}
      </dl>
    </section>
  );
}
