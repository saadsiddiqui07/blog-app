"use client";
import { redirect } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const AddNew = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title || !description) {
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/blogs", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
        }),
      });
      if (response.status === 201) {
        setTitle("");
        setDescription("");
        redirect("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-10">
      <h1>Add new blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-gray-800 outline-0 border-none w-[100%] p-2 mb-2 rounded-md"
          placeholder="Enter title"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <textarea
          className="bg-gray-800 outline-0 border-none w-[100%] p-2 rounded-md"
          placeholder="Write something you want to share ..."
          rows={2}
          value={description}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 p-2 rounded-md w-[30%]"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default AddNew;
