import { ChatIcon, DotsHorizontalIcon, LinkIcon } from "@heroicons/react/outline";
import React from "react";

const ProjectCard = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-black font-semibold">Slack</h2>
        <DotsHorizontalIcon className="w-4" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe in atque nulla reprehenderit maxime voluptatem
        alias aut fuga iste ducimus incidunt dolore, molestias fugit consectetur porro? Eius doloremque sapiente ea.
      </p>
      <div className="flex gap-3 my-3">
        <span className="bg-[#ffebd4] text-[#ffb459] px-6 py-1 rounded-md">Ios App</span>
        <span className="bg-[#b1f3de] text-[#00cb96] px-6 py-1 rounded-md">Android App</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <LinkIcon className="w-4 -rotate-45" />
          <div className="flex gap-1 items-center">
            <p>3</p>
            <ChatIcon className="w-4 text-[#bbbbbb]" />
          </div>
        </div>

        <span className="w-12 h-12 rounded-full bg-[#C4C4C4]"></span>
      </div>
    </div>
  );
};

export default ProjectCard;
