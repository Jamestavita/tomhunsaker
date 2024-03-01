import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Option({ id, title }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <li
      className="px-6 flex items-center gap-4 bg-Greyscale rounded-[20px] relative overflow-hidden"
      key={id}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <p
        htmlFor={title}
        className="py-4 text-[18px] w-[calc(100%-2.5rem)] z-20"
      >
        {title}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 32 32"
        fill="none"
      >
        <g opacity="0.5" clipPath="url(#clip0_877_257)">
          <path
            d="M14.6673 23.9997C14.6673 25.4663 13.4673 26.6663 12.0007 26.6663C10.534 26.6663 9.33398 25.4663 9.33398 23.9997C9.33398 22.533 10.534 21.333 12.0007 21.333C13.4673 21.333 14.6673 22.533 14.6673 23.9997ZM12.0007 13.333C10.534 13.333 9.33398 14.533 9.33398 15.9997C9.33398 17.4663 10.534 18.6663 12.0007 18.6663C13.4673 18.6663 14.6673 17.4663 14.6673 15.9997C14.6673 14.533 13.4673 13.333 12.0007 13.333ZM12.0007 5.33301C10.534 5.33301 9.33398 6.53301 9.33398 7.99967C9.33398 9.46634 10.534 10.6663 12.0007 10.6663C13.4673 10.6663 14.6673 9.46634 14.6673 7.99967C14.6673 6.53301 13.4673 5.33301 12.0007 5.33301ZM20.0007 10.6663C21.4673 10.6663 22.6673 9.46634 22.6673 7.99967C22.6673 6.53301 21.4673 5.33301 20.0007 5.33301C18.534 5.33301 17.334 6.53301 17.334 7.99967C17.334 9.46634 18.534 10.6663 20.0007 10.6663ZM20.0007 13.333C18.534 13.333 17.334 14.533 17.334 15.9997C17.334 17.4663 18.534 18.6663 20.0007 18.6663C21.4673 18.6663 22.6673 17.4663 22.6673 15.9997C22.6673 14.533 21.4673 13.333 20.0007 13.333ZM20.0007 21.333C18.534 21.333 17.334 22.533 17.334 23.9997C17.334 25.4663 18.534 26.6663 20.0007 26.6663C21.4673 26.6663 22.6673 25.4663 22.6673 23.9997C22.6673 22.533 21.4673 21.333 20.0007 21.333Z"
            fill="#051C09"
          />
        </g>
        <defs>
          <clipPath id="clip0_877_257">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </li>
  );
}
