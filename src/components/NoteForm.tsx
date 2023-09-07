import React from "react";

function NoteForm() {
  return (
    // <div className="card max-w-[1200px] bg-base-100 shadow-xl">
    <form className="py-4 px-0 w-full md:px-8 flex flex-col gap-5 items-center justify-center">
      <div className="w-full">
        <label className="!text-sm m-1">Title</label>
        <input
          type="text"
          placeholder="Title"
          className="w-full input input-bordered "
        />
      </div>
      <div className="w-full">
        <label className="!text-sm m-1">Description</label>
        <textarea
          placeholder="Note..."
          className="w-full input h-[90px] textarea-bordered"
        />
      </div>
      <div className="w-full">
        <label className="block !text-sm m-1" htmlFor="Cat">
          categories
        </label>
        <select className="select select-bordered  max-w-xs">
          <option disabled selected>
            All
          </option>
          <option>Study</option>
          <option>Office</option>
          <option>Home</option>
        </select>
      </div>
      <button className="btn text-xs btn-sm btn-accent lowercase">
        Submit
      </button>
    </form>
    // </div>
  );
}

export default NoteForm;
