import { useEffect, useState } from "react";

import { animate, stack } from "./StackAnimation.module.scss";

// import { stackList } from "./StackList.js";

// import { nanoid } from "nanoid";

export default function StackAnimation({ ...props }) {
  useEffect(() => {
    let i = 0;
    const stack = document.querySelector(".stackitem");

    setInterval(() => {
      while (stack.firstChild) {
        stack.removeChild(stack.firstChild);
      }

      props.stackList[i].split("").forEach((letter) => {
        const letterElement = document.createElement("span");
        letterElement.innerHTML = letter === " " ? "&nbsp;" : letter;
        stack.appendChild(letterElement);
      });
      i++;
      if (i === props.stackList.length) {
        i = 0;
      }
    }, 2000);
    return clearInterval;
  }, [props.stackList]);

  return (
    <div
      className={`${animate} ${stack} stackitem text-2xl sm:text-3xl lg:text-3xl font-sec`}
    >
      <span>MY STACK</span>
    </div>
  );
}
