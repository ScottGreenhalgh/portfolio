import Projects from "@/components/Projects";
import style from "@/styles/home.module.css";
import { FaFolder } from "react-icons/fa";

export default function Home() {
  return (
    <div className={style["home-container"]}>
      <h3 className="text-2xl text-amber-500 flex justify-center items-center gap-1">
        <FaFolder />
        Projects
      </h3>
      <Projects />
    </div>
  );
}
