import Image from "next/image";
import { hackathonData } from "@/utils/hackathonData";
import style from "@/styles/showcase.module.css";
import { AiFillGithub } from "react-icons/ai";

const ProjectShowcase: React.FC = async () => {
  return (
    <div className={style["projects-container"]}>
      {hackathonData.map((project) => (
        <div key={project.id} className={style["project-item"]}>
          <div className={style["project-info"]}>
            <a
              className={style["link"]}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
          <a
            className={style["link"]}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={style["project-image-container"]}>
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                aria-label={project.title}
                className={style["project-image"]}
                style={{ width: "auto", height: "auto" }}
              />
              <div className={style["project-title"]}>{project.title}</div>
            </div>
          </a>
          <a
            className={style["link"]}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            <div className={style["project-popup"]}>{project.description}</div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectShowcase;