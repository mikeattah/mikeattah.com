import Image from "next/image";

export default function ContactIcon({ icon, text }) {
  return (
    <div className="w-[33%] h-full flex flex-col">
      <i>{icon}</i>
      <p>{text}</p>
    </div>
  );
}
