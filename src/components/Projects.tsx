// import style from "@/styles/projects.module.css";

const Projects: React.FC = async () => {
  return (
    <div>
      <div>
        <h3>Jimp</h3>
        <a href="https://jimp-seven.vercel.app/">Browser Image Editing</a>
        <a href="https://jimp-seven.vercel.app/matt/poke">Card Generator</a>
        <a href="https://github.com/ScottGreenhalgh/jimp">GitHub</a>
      </div>
      <br />
      <div>
        <h3>Social Network</h3>
        <a href="https://basic-social-network-ten.vercel.app/">
          Basic Social Network
        </a>
        <a href="https://github.com/ScottGreenhalgh/week09-social-network">
          GitHub
        </a>
      </div>
      <br />
      <div>
        <h3>Forums</h3>
        <a href="https://basic-forums.vercel.app/">Basic Forums</a>
        <a href="https://github.com/ScottGreenhalgh/week08-next-comments-form">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;
