import Image from "next/image";

export default function StackCard({ ...props }) {
  const { key, tool, src } = props;
  return (
    <div
      className="w-18 h-18 flex flex-col justify-evenly items-center bg-white border hover:border-2 border-blue-600 font-black rounded-2xl text-xxs font-ter text-black m-2 p-0"
      key={key}
    >
      <Image alt={tool} height="28" src={src} width="28" />
      <span>{tool}</span>
    </div>
  );
}
