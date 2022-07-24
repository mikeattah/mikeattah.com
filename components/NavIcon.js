import Link from "next/link";
import { useRouter } from "next/router";

export default function Navicon({
  
  pageName,
  pathName,
}) {
  const router = useRouter();
  return (
    <Link href={pathName} passHref>
      <a
        className={
          router.pathname === pathName
            ? "font-bold font-ter text-blue-600 w-1/4 sm:w-3/25 h-full flex flex-col justify-center items-center hover:bg-gray-100"
            : "font-ter text-black w-1/4 sm:w-3/25 h-full flex flex-col justify-center items-center  hover:bg-gray-100"
        }
      >
        {pageName}
      </a>
    </Link>
  );
}
