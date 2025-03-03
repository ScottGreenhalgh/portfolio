import Projects from "@/components/Projects";
import style from "@/styles/home.module.css";
import Link from "next/link";
import { FaFolder } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";

export default function Home() {
  return (
    <div className={style["home-container"]}>
      <Link className={style["home-back"]} href={"/"}>
        <IoArrowBack />
      </Link>
      <h3 className="text-2xl font-bold text-amber-300 flex justify-center items-center gap-1">
        <FaFolder />
        TechEd Projects
      </h3>
      <p className="text-zinc-300">
        Note: Some projects are hosted on Render.com for free, therefore the
        express backend may take a short time to load.
      </p>
      <Projects />
    </div>
  );
}
