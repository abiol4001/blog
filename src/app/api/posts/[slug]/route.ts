import { prisma } from "@/lib/connect";
import { NextRequest, NextResponse } from "next/server";


type Props = {
  params: {
    slug: string;
  };
};
// Get Single Post
export async function GET(req: NextRequest, {params} : Props) {

  const { slug } = params

  try {    
    const post = await prisma.post.findUnique({
      where: {slug},
      include: {user: true}
    })

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
