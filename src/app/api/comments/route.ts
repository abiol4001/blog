import { prisma } from "@/lib/connect";
import { NextRequest, NextResponse } from "next/server";


type Props = {
  params: {
    slug: string;
  };
};
// Get All Comments
export async function GET(req: NextRequest) {
  console.log(req.url)
  const { searchParams } = new URL(req.url)
  const postSlug = searchParams.get("postSlug")

  try {    
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && {postSlug})
      },
      include: {user: true}
    })

    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
