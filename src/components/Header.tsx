import style from "@/styles/header.module.css";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

const Header: React.FC = () => {
  return (
    <header className={style["Header"]}>
      <div className={style["name"]}>
        <p>- Scott -</p>
        <p>Greenhalgh</p>
      </div>
      <Link className={`${style["link"]} text-3xl`} href="/" aria-label="Home">
        <IoHomeSharp />
      </Link>
      <Link
        className={`${style["link"]} text-3xl`}
        href="/about"
        aria-label="About"
      >
        <FaInfoCircle />
      </Link>
      <a
        className={`${style["link"]} text-3xl`}
        href="https://github.com/ScottGreenhalgh"
        aria-label="GitHub"
      >
        <AiFillGithub />
      </a>
      <a
        className={`${style["link"]} text-3xl`}
        href="https://www.linkedin.com/in/scott-greenhalgh-288575212/"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
    </header>
  );
};

export default Header;
