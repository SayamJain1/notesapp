import NoteForm from "@/components/NoteForm";
import React from "react";

function Notes() {
  return (
    <div className="">
      <div className="py-5 sm:p-5 flex">
        <div className="flex-1 overflow-auto h-[calc(100vh-104px)]">
          {/* <div className="flex items-center justify-center h-full"> */}
          {/* <h2 className="font-bold text-lg border-b-2 border-black">
              No Notes
            </h2> */}
          {/* </div> */}
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <div className="w-[100px] h-[100px] bg-green-300">1</div>
            <div className="w-[100px] h-[100px] bg-green-300">2</div>
            <div className="w-[100px] h-[100px] bg-green-300">3</div>
          </div>
        </div>
        <div className="pl-2">
          <button
            className="btn btn-sm bg-blue-400"
            onClick={() =>
              document.getElementById("my_modal_3")?.classList.add("modal-open")
            }
          >
            Add
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <NoteForm />
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
}

export default Notes;
