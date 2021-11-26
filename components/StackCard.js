import Image from "next/image";

export default function StackCard({ ...props }) {
  return (
    <div
      className="w-18 h-18 flex flex-col justify-evenly items-center bg-white border hover:border-2 border-blue-600 font-black rounded-2xl text-xxs font-ter text-black m-2 p-0"
      key={props.key}
    >
      <Image
        alt={props.tool}
        height="28"
        src={props.src}
        width="28"
      />
      <span>{props.tool}</span>
    </div>
  );
}
