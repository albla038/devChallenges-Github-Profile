import clsx from "clsx";
import RepoCard from "./repo-card";
import { reposT } from "../lib/types";

type RepoSectionProps = {
  repos_url: string;
};

export default async function RepoList({ repos_url }: RepoSectionProps) {
  const req = await fetch(repos_url);

  if (!req.ok) {
    return <p>Error: {req.status}</p>;
  
  } else {
    const data: reposT[] = await req.json();

    // Get the first 4 repos
    const repos = data.slice(0, 4);

    return (
      <section
        className={clsx([
          "flex flex-col gap-11",
          "md:grid md:grid-cols-2 md:grid-rows-2",
        ])}
      >
        {repos.map((repo) => (
          <RepoCard
            key={repo.id}
            name={repo.name}
            description={repo.description || ""}
            license={repo.license}
            forksCount={repo.forks_count}
            stargazersCount={repo.stargazers_count}
            updatedAt={repo.updated_at}
            url={repo.html_url}
          />
        ))}
      </section>
    );
  }
}
