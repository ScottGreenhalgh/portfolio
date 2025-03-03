import style from "@/styles/info.module.css";
import Link from "next/link";
import { GoInfo } from "react-icons/go";

const Info: React.FC = () => {
  return (
    <div className={style["info-pannel"]}>
      <h2
        className={`text-2xl text-amber-300 font-bold ${style["title-text"]}`}
      >
        <GoInfo />
        About Me
      </h2>
      <p>
        I&#39;m a University of York Electronic Engineering graduate and Web/Software Developer based in Norwich, England with a passion for all things tech.
      </p>
      <p>
        I have strong hands-on experience with modern web development technologies, including React, Next.js, Node.js, Tailwind CSS, Vite and Docker. My skillset encapsulates TypeScript, PostgreSQL and JavaScript. My strong problem-solving abilities, adaptability, and collaborative spirit make me a valuable asset to any development team. 
      </p>
      <Link href={"/"}>
        <p className="text-center">Feel free to browse my <span className="text-xl underline font-bold text-amber-300">Projects</span></p>
      </Link>
    </div>
  );
};

export default Info;
