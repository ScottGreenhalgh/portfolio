import Info from "@/components/Info";
import Skills from "@/components/Skills";
import style from "@/styles/about.module.css";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Scott Greenhalgh | About",
  description:
    "About | Software Developer Portfolio | JavaScript | TypeScript | Node.js | React.js | Next.js | PostgreSQL",
};

export default function AboutPage() {
  return (
    <div className={style["about-container"]}>
      <div className={style["image-container"]}>
        <Image
          src="/profile.jpg"
          alt="profile picture"
          className={style["profile-image"]}
          width={100}
          height={100}
          aria-label="profile picture"
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
          }}
        />
      </div>
      <Info />
      <Skills />
    </div>
  );
}
