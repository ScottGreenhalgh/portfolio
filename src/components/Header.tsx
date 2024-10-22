import style from "@/styles/header.module.css";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className={style["Header"]}>
      <div className={style["name"]}>
        <p>- Scott -</p>
        <p>Greenhalgh</p>
      </div>
      <Link className={style["link"]} href="/">
        Home
      </Link>
      <Link className={style["link"]} href="/about">
        About
      </Link>
      <a
        className={style["link"]}
        href="https://www.linkedin.com/in/scott-greenhalgh-288575212/"
      >
        LinkedIn
      </a>
    </header>
  );
};

export default Header;
