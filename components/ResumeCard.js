import Image from "next/image";

export default function ResumeCard({ ...props }) {
  return (
    <a
      href="/mike_attah_resume_ncl_006.pdf"
      className="w-28 h-10 flex flex-row justify-evenly items-center font-bold font-ter text-black rounded-xl border-2 border-blue-600 bg-white hover:bg-blue-600 mx-0 my-2 p-0"
      download
    >
      <Image
        src="/download-outline.svg"
        width="20"
        height="20"
        alt="download icon"
        className="animate-bounce"
      />
      <span className="m-0 p-0">RESUME</span>
    </a>
  );
}
