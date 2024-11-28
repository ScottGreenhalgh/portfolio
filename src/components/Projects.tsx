import Image from "next/image";
import { projectsData } from "@/utils/projectData";
import style from "@/styles/projects.module.css";
import { AiFillGithub } from "react-icons/ai";

const Projects: React.FC = async () => {
  return (
    <div className={style["projects-container"]}>
      {/* <h3 className="text-2xl text-amber-500">Projects</h3> */}
      {projectsData.map((project) => (
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
                className="project-image"
                style={{ width: "auto", height: "auto" }}
              />
              <div className={style["project-title"]}>{project.title}</div>
            </div>
          </a>
          <div className={style["project-popup"]}>{project.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
