import EditForm from "@/app/components/EditForm";

const getBlogDetails = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/blogs/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch topic");
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditBlog({ params }: any) {
  const { id } = params;
  const { blog } = await getBlogDetails(id);
  const { title, content } = blog;

  return <EditForm id={id} title={title} content={content} />;
}
