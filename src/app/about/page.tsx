import AboutContent from "@/components/AboutContent";
import style from "@/styles/about.module.css";

export default function AboutPage() {
  return (
    <div className={style["about-container"]}>
      <div className={style["info-pannel"]}>
        <p>
          I&#39;m a Junior Software Developer based in Norwich, England with a
          passion for all things tech.
        </p>
        <p>
          I graduated from the University of York in Electronic Engineering.
        </p>
      </div>
      <AboutContent />
    </div>
  );
}
