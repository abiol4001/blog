import { prisma } from "@/lib/connect";
import { getAuthSession } from "@/lib/nextauth";
import { NextRequest, NextResponse } from "next/server";


type Props = {
  params: {
    slug: string;
  };
};
// Get All Comments
export async function GET(req: NextRequest) {
  // console.log(req.url)
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


// Create a comment
export async function POST(req: NextRequest) {
  const session = await getAuthSession()

  if(!session) {
    return NextResponse.json({message: "unauthorized"}, {status: 401})
  }

  try {    
    const body = await req.json()
    const {desc} = body
    if(!desc) {
      return
    }
    const comment = await prisma.comment.create({
     data: {...body, title: body.desc, userEmail: session?.user?.email}
    })

    return NextResponse.json(comment, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
