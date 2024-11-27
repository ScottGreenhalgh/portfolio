import Projects from "@/components/Projects";
import style from "@/styles/home.module.css";

export default function Home() {
  return (
    <div className={style["home-container"]}>
      <h3 className="text-2xl text-amber-500">Projects</h3>
      <Projects />
    </div>
  );
}
