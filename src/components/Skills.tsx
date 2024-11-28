import React from "react";
import * as Separator from "@radix-ui/react-separator";
import { IoCog } from "react-icons/io5";
import Image from "next/image";
import style from "@/styles/skills.module.css";
import { skillsData } from "@/utils/skillsData";

const Skills: React.FC = () => {
  return (
    <div className={style["skills-container"]}>
      <h2 className={`text-2xl text-amber-500 ${style["title-text"]}`}>
        <IoCog />
        Skills
      </h2>
      {skillsData.map((category, index) => (
        <div key={index}>
          <br /> {/* Break */}
          <h3 className="font-bold">{category.category}</h3>
          <Separator.Root
            className={style["SeparatorRoot"]}
            style={{ margin: "15px 0" }}
          />
          <div className={style["TextContainer"]}>
            {category.skills.map((skill, skillIndex) => (
              <React.Fragment key={skillIndex}>
                <div className={style["Text"]}>{skill.name}</div>
                {skillIndex < category.skills.length - 1 && (
                  <Separator.Root
                    className={style["SeparatorRoot"]}
                    decorative
                    orientation="vertical"
                    style={{ margin: "0 15px" }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
          {/* Logos here */}
          <div className={style["logo-container"]}>
            {category.skills.map((skill, skillIndex) => (
              <Image
                key={skillIndex}
                src={skill.logo}
                alt={`${skill.name} logo`}
                height={40}
                width={40}
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "contain",
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
