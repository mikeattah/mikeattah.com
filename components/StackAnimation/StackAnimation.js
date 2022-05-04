import { useEffect } from "react";
import { animate, stack } from "./StackAnimation.module.scss";

export default function StackAnimation({ stackList }) {
  useEffect(() => {
    let i = 0;
    const stack = document.querySelector(".stackitem");
    setInterval(() => {
      while (stack.firstChild) {
        stack.removeChild(stack.firstChild);
      }
      stackList[i].split("").forEach((letter) => {
        const letterElement = document.createElement("span");
        letterElement.innerHTML = letter === " " ? "&nbsp;" : letter;
        stack.appendChild(letterElement);
      });
      i++;
      if (i === stackList.length - 1) {
        i = 0;
      }
    }, 2000);
    return clearInterval;
  }, [stackList]);
  return (
    <div
      className={`${animate} ${stack} stackitem text-2xl sm:text-3xl lg:text-3xl font-sec`}
    >
      <span>MY STACK</span>
    </div>
  );
}
