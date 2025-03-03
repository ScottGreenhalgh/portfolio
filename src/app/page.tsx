import ProjectShowcase from "@/components/ProjectShowcase";
import style from "@/styles/home.module.css";
import Link from "next/link";
import { FaTrophy } from "react-icons/fa";

export default function Home() {
  return (
    <div className={style["home-container"]}>
      <h3 className="text-2xl font-bold text-amber-300 flex justify-center items-center gap-1">
        <FaTrophy />
        Hackathon Project
      </h3>
      <p>
        <span className="text-amber-500 font-bold">#1 </span>Innovation Award
        winner at{" "}
        <a
          className="underline"
          href="https://techeducators.co.uk/hacked/norwich-2025"
        >
          HackEd
        </a>{" "}
        2025
      </p>
      <p>
        <span className="text-zinc-300 font-bold">#2 </span>Judges Choice runner
        up at{" "}
        <a
          className="underline"
          href="https://techeducators.co.uk/hacked/norwich-2025"
        >
          HackEd
        </a>{" "}
        2025
      </p>
      <ProjectShowcase />
      <p>
        Additional projects can be found: {""}
        <Link href={"/teched"}>
          <span className="text-amber-300 font-bold underline">Here</span>
        </Link>
      </p>
    </div>
  );
}
