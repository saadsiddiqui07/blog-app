"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const AddNew = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !content) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });
      if (response.ok) {
        router.push("/");
        setTitle("");
        setContent("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
        <input
          className="bg-gray-800 outline-0 border-none w-[100%] p-2 mb-2  rounded-md"
          placeholder="Write something you want to share ..."
          value={content}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setContent(e.target.value)
          }
        />
        <button
          disabled={isLoading}
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 p-2 rounded-md w-[30%] disabled:bg-gray-500"
        >
          {isLoading ? "Posting..." : "Post"}
        </button>
      </form>
    </div>
  );
};

export default AddNew;
