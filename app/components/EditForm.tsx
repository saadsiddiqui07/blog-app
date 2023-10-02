"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

interface FormProps {
  id: string;
  title: string;
  content: string;
}

const EditForm = ({ id, title, content }: FormProps) => {
  const [newTitle, setNewTitle] = useState<string>(title);
  const [newContent, setNewContent] = useState<string>(content);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTitle || !newContent) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTitle,
          content: newContent,
        }),
      });
      if (response.ok) {
        router.push("/");
        setNewTitle("");
        setNewContent("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-10">
      <h1>Edit blog</h1>
      <form onSubmit={handleUpdate}>
        <input
          value={newTitle}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNewTitle(e.target.value)
          }
          className="bg-gray-800 outline-0 border-none w-[100%] p-2 mb-2 rounded-md"
          placeholder="Enter title"
        />
        <input
          value={newContent}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNewContent(e.target.value)
          }
          className="bg-gray-800 outline-0 border-none w-[100%] p-2 mb-2  rounded-md"
          placeholder="Write something you want to share ..."
        />
        <button
          disabled={isLoading}
          type="submit"
          className="bg-teal-500 hover:bg-teal-700 disabled:bg-gray-600 p-2 rounded-md w-[30%]"
        >
          {isLoading ? "Updating..." : "Update"}
        </button>
      </form>
    </div>
  );
};

export default EditForm;
