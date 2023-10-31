import {
  setCategories,
  setDescription,
  setTitle,
} from "@/redux/features/NoteFormSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

const schema = yup
  .object({
    title: yup.string().required("Title is required!"),
    description: yup.string().required("Description is required!"),
  })
  .required();

function NoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { title, isLoading, description, categories } = useAppSelector(
    (state) => state.noteForm
  );
  const dispatch = useAppDispatch();
  const router = useRouter();

  const closeModal = () => {
    document.getElementById("my_modal_3")?.classList.remove("modal-open");
  };

  const handleSubmitForm = async () => {
    const response = await fetch("api/getNotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: uuidv4(), title, description, categories }),
    });
    const result = await response.json();
    console.log(result);
    router.refresh();
    closeModal();
  };

  return (
    <div className="">
      <button
        onClick={closeModal}
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      >
        ✕
      </button>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="py-4 px-0 w-full md:px-8 flex flex-col gap-5 items-center justify-center"
      >
        <div className="w-full">
          <label className="!text-sm font-medium m-1">Title</label>
          <input
            type="text"
            {...register("title", { required: true })}
            value={title}
            onChange={(e) => dispatch(setTitle(e.target.value))}
            placeholder="Title"
            className="w-full input input-bordered mt-1"
          />
          <p className="text-red-400 text-sm font-semibold">
            {errors.title?.message}
          </p>
        </div>
        <div className="w-full">
          <label className="!text-sm font-medium m-1">Description</label>
          <textarea
            placeholder="Note..."
            {...register("description", { required: true })}
            onChange={(e) => dispatch(setDescription(e.target.value))}
            value={description}
            className="w-full input h-[90px] textarea-bordered mt-1"
          />
          <p className="text-red-400 text-sm font-semibold">
            {errors.description?.message}
          </p>
        </div>
        <div className="w-full">
          <label className="block !text-sm font-medium m-1" htmlFor="Cat">
            categories
          </label>
          <select
            value={categories}
            onChange={(e) => dispatch(setCategories(e.target.value))}
            className="select select-bordered max-w-xs"
          >
            <option disabled selected>
              All
            </option>
            <option>Study</option>
            <option>Office</option>
            <option>Home</option>
          </select>
        </div>
        <button
          type="submit"
          className={`btn font-medium text-sm btn-sm btn-accent ${
            isLoading ? " bg-opacity-60" : ""
          }`}
        >
          {isLoading ? (
            <span className="loading loading-spinner loading-xs"></span>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
