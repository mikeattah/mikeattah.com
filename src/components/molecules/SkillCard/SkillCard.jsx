import Image from "next/image";

function SkillCard({ tool, src }) {
  return (
    <div className="w-18 h-18 flex flex-col justify-evenly items-center bg-white border hover:border-2 border-blue-600 font-black rounded-2xl text-xxs font-ter text-black m-2 p-0">
      <Image src={src} alt={tool} height="28" width="28" />
      <span>{tool}</span>
    </div>
  );
}

export default SkillCard;
