import { ChatIcon, DotsHorizontalIcon, LinkIcon } from "@heroicons/react/outline";
import React from "react";

const ProjectCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-black font-semibold">{item?.name}</h2>
        <DotsHorizontalIcon className="w-4" />
      </div>
      <p>{item?.content}</p>
      <div className="flex gap-3 my-3">
        <span className="bg-[#ffebd4] text-[#ffb459] px-6 py-1 rounded-md">{item?.platforms[0]}</span>
        {item?.platforms[1] && (
          <span className="bg-[#b1f3de] text-[#00cb96] px-6 py-1 rounded-md">{item?.platforms[1]}</span>
        )}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <LinkIcon className="w-4 -rotate-45" />
          <div className="flex gap-1 items-center">
            <p>{item?.comments}</p>
            <ChatIcon className="w-4 text-[#bbbbbb]" />
          </div>
        </div>

        <span className="w-12 h-12 rounded-full bg-[#C4C4C4]"></span>
      </div>
    </div>
  );
};

export default ProjectCard;
