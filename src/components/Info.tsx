import style from "@/styles/info.module.css";
import { GoInfo } from "react-icons/go";

const Info: React.FC = () => {
  return (
    <div className={style["info-pannel"]}>
      <h2
        className={`text-2xl text-amber-500 font-bold ${style["title-text"]}`}
      >
        <GoInfo />
        About Me
      </h2>
      <p>
        I&#39;m a University of York Electronic Engineering graduate and Junior
        Software Developer based in Norwich, England with a passion for all
        things tech.
      </p>
      <p>
        Recently completing a 12-week intensive software development bootcamp
        with Tech Educators. During this program, I gained hands-on experience
        with modern web development technologies, including React, Next.js,
        Tailwind CSS, and Vite. Additionally, I developed skills in TypeScript,
        PostgreSQL, JavaScript, and Node.js. My strong problem-solving
        abilities, adaptability, and collaborative spirit make me a valuable
        asset to any development team.
      </p>
    </div>
  );
};

export default Info;
