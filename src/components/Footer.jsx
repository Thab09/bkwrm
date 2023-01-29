import { HiOutlineCode } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <div className="mt-2 mx-6 h-12 flex justify-center items-center gap-16 bg:white dark:bg-grey-dark dark:text-white">
      <div
        className="flex items-center gap-2 cursor-pointer hover:text-purple-main"
        onClick={() => window.open("https://github.com/Thab09/bkwrm", "_blank")}
      >
        <HiOutlineCode />
        <p>Project</p>
      </div>
      <div
        className="flex items-center gap-2 cursor-pointer hover:text-purple-main"
        onClick={() => window.open("https://github.com/Thab09", "_blank")}
      >
        <BsGithub />
        <p>Ibraheem</p>
      </div>
    </div>
  );
}

export default Footer;
