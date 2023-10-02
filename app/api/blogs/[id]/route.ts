import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Blog from "@/models/blog";

// API to edit a blog post
export async function PUT(request: NextRequest, { params }: any) {
  try {
    const { id } = params;
    const { title, content } = await request.json();
    await dbConnect();
    await Blog.findByIdAndUpdate(id, { title, content });
    return NextResponse.json(
      { message: `Blog updated - ID: ${id}` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Could not update" }, { status: 401 });
  }
}

// get a specific blog
export async function GET(request: NextRequest,{ params }: any) {
  try {
    const { id } = params;
    await dbConnect();
      const blog = await Blog.findOne({ _id: id })
    return NextResponse.json(
      { blog },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Could not get details" }, { status: 401 });
  }
}

export async function DELETE(request: NextRequest,{ params }: any) {
  try {
    const { id } = params;
    await dbConnect();
    await Blog.findByIdAndDelete(id)
    return NextResponse.json(
      { message: 'Blog deleted' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Could not delete" }, { status: 401 });
  }
}