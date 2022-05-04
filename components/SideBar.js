import Image from "next/image";
import StackAnimation from "./StackAnimation/StackAnimation";
import { stackList } from "../public/data/stackList";
import SocialMediaIcons from "./SocialMediaIcons";

export default function SideBar() {
  return (
    <section className="w-[300px] h-screen fixed top-0 left-0 flex flex-col justify-center items-center z-20 border">
      <div className="w-[200px] h-[200px] rounded-full relative">
        <Image
          alt="Mike Attah"
          className=""
          layout="fill"
          objectFit="cover"
          objectPosition="top center"
          src="/images/personal/mikeattah-about-002.png"
        />
      </div>
      <h1 className="text-center text-black text-6xl sm:text-9xl font-bold leading-tight font-pri mb-3">
        Mike Attah
      </h1>
      <p className="text-black text-center text-3xl sm:text-5xl italic mb-3 font-sec">
        I am a Full Stack Developer of Web, Mobile and Desktop Applications and
        I am passionate about creating beautiful and intuitive user experiences.
      </p>
      <div className="w-full flex flex-row justify-center items-center">
        <SocialMediaIcons link={"https://github.com/mikeattah"} />
        <SocialMediaIcons link={"https://twitter.com/mikeattahh"} />
        <SocialMediaIcons link={"https://linkedin.com/in/mikeattah"} />
        <SocialMediaIcons link={"https://www.polywork.com/mikeattah/"} />
      </div>
      <StackAnimation stackList={stackList} />
      <button>HIRE ME</button>
    </section>
  );
}
