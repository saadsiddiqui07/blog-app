const AddNew = () => {
  return (
    <div className="mt-10">
      <h1>Add new blog</h1>
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
          className="bg-blue-500 hover:bg-blue-700 p-2 rounded-md w-[30%]"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default AddNew;
