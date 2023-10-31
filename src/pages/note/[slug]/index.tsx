import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/router";
import { NoteType } from "../../../../types/noteType";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  const selectedId = router.query.slug;
  const { data } = useAppSelector((state) => state.data);

  const selectedNote = data.find((note: NoteType) => note.id === selectedId);

  return (
    <div className="min-h-[calc(100vh-64px)] bg-base-200 py-5 px-2 sm:p-5">
      <div className="max-w-2xl bg-accent mx-auto mt-11 rounded-md p-5 sm:px-8 sm:py-9">
        {selectedNote ? (
          <div key={selectedNote.id}>
            <Link href={"/note"}>
              <div
                data-theme="light"
                className="inline-block p-2 bg-opacity-40 rounded-full hover:bg-opacity-20 mb-5"
              >
                <Image
                  src="/left-arrow.svg"
                  width={24}
                  height={24}
                  alt="Light"
                  className=""
                />
              </div>
            </Link>
            <h2 className=" text-xl sm:text-5xl font-semibold leading-snug">
              {selectedNote.title.charAt(0).toUpperCase() +
                selectedNote.title.slice(1)}
            </h2>
            <div className="py-5 pb-9">
              <small className=" font-semibold text-black text-end rounded-md px-2 bg-warning bg-opacity-80 w-fit">
                {selectedNote.categories}
              </small>
            </div>
            <p className="leading-relaxed">
              {selectedNote.description.charAt(0).toUpperCase() +
                selectedNote.description.slice(1)}
            </p>
            <div className="py-10 ">Action Buttons</div>
          </div>
        ) : (
          <div>something went wrong.</div>
        )}
      </div>
    </div>
  );
}
