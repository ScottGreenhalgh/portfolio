import style from "@/styles/about.module.css";

export default function AboutPage() {
  return (
    <div className={style["about-container"]}>
      <div className={style["skills-container"]}>
        <h2>Skills</h2>
        <h3>Proficient with web development languages</h3>
        {/* Logos here */}
        <p>JavaScript | TypeScript | PostgreSQL</p>

        <h3>Proficient with web development tools</h3>
        {/* Logos here */}
        <p>React.js | Next.js | Node.js | </p>

        <h3>Basic knowledge of programming languages</h3>
        <p>Python | C | Java</p>
      </div>
      <div className={style["achieve-container"]}>
        <h2>Achievements</h2>
        {/* past projects here */}
      </div>
    </div>
  );
}
