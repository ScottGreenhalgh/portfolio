import Image from "next/image";

import style from "@/styles/header.module.css";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className={style["Header"]}>
      <Image
        className={style["Logo"]}
        src="/scott.png"
        alt="logo"
        width={50}
        height={50}
      />
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
};

export default Header;
