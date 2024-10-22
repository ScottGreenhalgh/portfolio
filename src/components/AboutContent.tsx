import * as Separator from "@radix-ui/react-separator";
import { IoCog } from "react-icons/io5";
import { FaFolder } from "react-icons/fa";
import Image from "next/image";
import style from "@/styles/aboutcontent.module.css";
import Projects from "./Projects";

const AboutContent: React.FC = async () => {
  return (
    <div className="flex row-auto">
      <div className={style["skills-container"]}>
        <h2 className={`text-2xl text-amber-500 ${style["title-text"]}`}>
          <IoCog />
          Skills
        </h2>
        <br /> {/* Break */}
        <h3 className="font-bold">Proficient with web development languages</h3>
        <Separator.Root
          className={style["SeparatorRoot"]}
          style={{ margin: "15px 0" }}
        />
        <div className={style["TextContainer"]}>
          <div className={style["Text"]}>JavaScript</div>
          <Separator.Root
            className={style["SeparatorRoot"]}
            decorative
            orientation="vertical"
            style={{ margin: "0 15px" }}
          />
          <div className={style["Text"]}>TypeScript</div>
          <Separator.Root
            className={style["SeparatorRoot"]}
            decorative
            orientation="vertical"
            style={{ margin: "0 15px" }}
          />
          <div className={style["Text"]}>PostgreSQL</div>
        </div>
        {/* Logos here */}
        <div className={style["logo-container"]}>
          <Image src="/javascript.webp" alt="js logo" height={40} width={40} />
          <Image src="/typescript.png" alt="ts logo" height={40} width={40} />
          <Image
            src="/postgresql-logo.webp"
            alt="postgresql logo"
            height={40}
            width={40}
          />
        </div>
        <br /> {/* Break */}
        <h3 className="font-bold">Proficient with web development tools</h3>
        <Separator.Root
          className={style["SeparatorRoot"]}
          style={{ margin: "15px 0" }}
        />
        <div className={style["TextContainer"]}>
          <div className={style["Text"]}>React.js</div>
          <Separator.Root
            className={style["SeparatorRoot"]}
            decorative
            orientation="vertical"
            style={{ margin: "0 15px" }}
          />
          <div className={style["Text"]}>Next.js</div>
          <Separator.Root
            className={style["SeparatorRoot"]}
            decorative
            orientation="vertical"
            style={{ margin: "0 15px" }}
          />
          <div className={style["Text"]}>Node.js</div>
          <Separator.Root
            className={style["SeparatorRoot"]}
            decorative
            orientation="vertical"
            style={{ margin: "0 15px" }}
          />
          <div className={style["Text"]}>NPM</div>
        </div>
        {/* Logos here */}
        <div className={style["logo-container"]}>
          <Image src="/react.png" alt="react logo" height={40} width={40} />
          <Image
            src="/nextjs-icon.webp"
            alt="next logo"
            height={40}
            width={40}
          />
          <Image
            src="/nodejs-icon.png"
            alt="node logo"
            height={40}
            width={40}
          />
          <Image src="/npm.jpeg" alt="ts logo" height={40} width={40} />
        </div>
        <br /> {/* Break */}
        <h3 className="font-bold">Basic knowledge of programming languages</h3>
        <Separator.Root
          className={style["SeparatorRoot"]}
          style={{ margin: "15px 0" }}
        />
        <div className={style["TextContainer"]}>
          <div className={style["Text"]}>Python</div>
          <Separator.Root
            className={style["SeparatorRoot"]}
            decorative
            orientation="vertical"
            style={{ margin: "0 15px" }}
          />
          <div className={style["Text"]}>C</div>
          <Separator.Root
            className={style["SeparatorRoot"]}
            decorative
            orientation="vertical"
            style={{ margin: "0 15px" }}
          />
          <div className={style["Text"]}>Java</div>
        </div>
        {/* Logos here */}
        <div className={style["logo-container"]}>
          <Image
            src="/python-logo.png"
            alt="python logo"
            height={40}
            width={40}
          />
          <Image src="/c-logo.png" alt="c logo" height={40} width={40} />
          <Image src="/java-logo.png" alt="java logo" height={40} width={40} />
        </div>
      </div>
      <div className={style["projects-container"]}>
        <h2 className={`text-2xl text-amber-500 ${style["title-text"]}`}>
          <FaFolder />
          Projects
        </h2>
        <Projects />
      </div>
    </div>
  );
};

export default AboutContent;
