import dbConnect from "@/lib/dbConnect";
import Blog from "@/models/blog";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { title, content } = await request.json();
    // make sure MongoDB is connected!
    await dbConnect();
    await Blog.create({ title, content });
    // return the reponse
    return NextResponse.json(
      { message: "Blog created successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.log("Could not add new blog", error);
    return NextResponse.json({ message: "Could not add new blog" });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Cannot fetch blogs" },
      { status: 403 }
    );
  }
}