import Image from "next/image";

export default function ResumeCard() {
  return (
    <a
      className="w-28 h-10 flex flex-row justify-evenly items-center font-bold font-ter text-black rounded-xl border-2 border-blue-600 bg-white hover:bg-blue-600 mx-0 my-2 p-0"
      download
      href="/public/static/mike_attah_resume_2p_009.pdf"
    >
      <Image
        alt="download icon"
        className="animate-bounce"
        height="20"
        src="/public/images/icons/download-outline.svg"
        width="20"
      />
      <span className="">RESUME</span>
    </a>
  );
}
