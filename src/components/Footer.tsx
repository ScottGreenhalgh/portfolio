import { FaRegCopyright } from "react-icons/fa6";

import style from "@/styles/footer.module.css";

const Footer: React.FC = async () => {
  return (
    <footer className={style["Footer"]}>
      <p>Scott Greenhalgh</p>
      <FaRegCopyright />
      <p>2024</p>
    </footer>
  );
};

export default Footer;
