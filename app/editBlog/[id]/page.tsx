const EditBlog = () => {
  return (
    <div className="mt-10">
      <h1>Edit blog</h1>
      <form>
        <input
          className="bg-gray-800 outline-0 border-none w-[100%] p-2 mb-2 rounded-md"
          placeholder="Enter title"
        />
        <textarea
          className="bg-gray-800 outline-0 border-none w-[100%] p-2 rounded-md"
          placeholder="Write something you want to share ..."
          rows={2}
        />
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-700 p-2 rounded-md w-[30%]"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
