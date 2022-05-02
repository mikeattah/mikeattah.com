import Image from "next/image";

export default function ContactIcon(props) {
  const { icon, text } = props;
  return (
    <div className="w-[33%] h-full flex flex-col">
      <i>{icon}</i>
      <p>{text}</p>
    </div>
  );
}
