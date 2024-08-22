type ProfileDetailProps = {
  term: string;
  description: string;
};

export default function ProfileDetailCard({
  term,
  description,
}: ProfileDetailProps) {
  return (
    <div className="flex w-fit items-center justify-center divide-x divide-gray-medium rounded-xl bg-gray-extradark p-2">
      <dt className="p-2 px-4 text-gray-medium">{term}</dt>
      <dd className="p-2 px-4 text-white">{description}</dd>
    </div>
  );
}
