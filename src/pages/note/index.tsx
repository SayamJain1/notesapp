import NoteForm from "@/components/NoteForm";
import React from "react";

function Notes() {
  return (
    <div className="">
      <div className="p-5 flex">
        <div className="flex-1 border border-red-200 overflow-auto h-[calc(100vh-104px)]">
          {/* <div className="flex items-center justify-center h-full"> */}
          {/* <h2 className="font-bold text-lg border-b-2 border-black">
              No Notes
            </h2> */}
          {/* </div> */}
          <div className="flex flex-wrap gap-3 items-center justify-center">
            <div className="w-[100px] h-[100px] bg-green-300">1</div>
            <div className="w-[100px] h-[100px] bg-green-300">2</div>
            <div className="w-[100px] h-[100px] bg-green-300">3</div>
          </div>
        </div>
        <div className="border border-red-200 pl-2">
          {/* <button className="btn btn-md bg-blue-400">Add</button> */}
          <button className="btn" onClick={() => window.my_modal_3.showModal()}>
            open modal
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <NoteForm />
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
}

export default Notes;
