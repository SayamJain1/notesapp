import React from "react";
import { NoteType } from "../../types/noteType";

type NoteProps = {
  note: NoteType;
};

function NoteCard({ note }: NoteProps) {
  const { id, title, categories, description } = note;
  return (
    <div className="rounded-xl m-1 sm:card shadow-2xl w-52 sm:w-72 h-24 sm:h-[227px] bg-primary-focus hover:bg-opacity-90 text-primary-content cursor-pointer">
      <div className="card-body p-2 sm:p-8">
        <div className="flex justify-end">
          <small className=" font-semibold text-black text-end rounded-md px-2 bg-warning bg-opacity-60 w-fit">
            {categories}
          </small>
        </div>

        <h2 className="card-title line-clamp-1">{title}</h2>
        <p className="line-clamp-1 sm:line-clamp-4">{description}</p>
      </div>
    </div>
  );
}

export default NoteCard;
