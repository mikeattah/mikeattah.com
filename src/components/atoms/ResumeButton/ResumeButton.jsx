// import Image from "next/image";

function ResumeButton() {
  return (
    <a
      className="w-28 h-10 flex flex-row justify-evenly items-center font-bold font-ter text-black rounded-xl border-2 border-blue-600 bg-white hover:bg-blue-600 mx-0 my-2 p-0"
      download
      href="/public/static/mike_attah_resume_2p_009.pdf"
    >
      Download Resume
    </a>
  );
}

export default ResumeButton;
