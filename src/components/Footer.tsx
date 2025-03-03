import { FaRegCopyright } from "react-icons/fa6";

import style from "@/styles/footer.module.css";

const Footer: React.FC = async () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={style["Footer"]}>
      <p>Scott Greenhalgh | Copyright</p>
      <FaRegCopyright />
      <p>2024 - {currentYear}</p>
    </footer>
  );
};

export default Footer;
