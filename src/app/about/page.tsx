import Info from "@/components/Info";
import Skills from "@/components/Skills";
import style from "@/styles/about.module.css";

export default function AboutPage() {
  return (
    <div className={style["about-container"]}>
      <Info />
      <Skills />
    </div>
  );
}
