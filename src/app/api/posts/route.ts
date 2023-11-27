import { prisma } from "@/lib/connect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

  const {searchParams} = new URL(req.url)
  
  const page = searchParams.get("page")

  const intPage = parseInt(page)

  const POST_PER_PAGE = 2

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
  };

  // console.log(page)
  try {    
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count()
    ])

    return NextResponse.json({posts, count}, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
