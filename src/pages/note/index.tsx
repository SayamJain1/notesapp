import NoteCard from "@/components/NoteCard";
import NoteForm from "@/components/NoteForm";
import { auth } from "@/firbase";
import { setData } from "@/redux/features/DataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Notes() {
  const { data } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      await fetch("api/getNotes", { cache: "no-store" })
        .then((res) => res.json())
        .then((d) => dispatch(setData(d.notes)));
    };
    fetchData();
    onAuthStateChanged(auth, (user) => {
      if (user) {
      } else {
        router.push("/login");
      }
    });
  }, []);

  return (
    <div className="">
      <div className="py-5 sm:p-5 flex">
        <div className="flex-1 overflow-auto h-[calc(100vh-104px)]">
          {data.length ? (
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              {data.map((note) => (
                <Link key={note.id} href={`/note/${note.id}`}>
                  <NoteCard  note={note} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <h2 className="font-bold text-lg border-b-2 border-black">
                No Notes
              </h2>
            </div>
          )}
        </div>
        <div className="pl-2">
          <button
            className="btn btn-sm btn-primary"
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
