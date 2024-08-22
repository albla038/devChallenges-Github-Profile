import Image from "next/image";
import heroImage from "../../../public/hero-image-github-profile.png";
import Search from "./search";

export default function Header() {
  return (
    <header>
      <Image
        src={heroImage}
        alt=""
        className="h-60 object-cover"
        priority={true}
      />
      <Search />
    </header>
  );
}
