import { prisma } from "@/lib/connect";
import { getAuthSession } from "@/lib/nextauth";
import { NextRequest, NextResponse } from "next/server";


type SearchParamsType = {
  page: number
  category: string
}
export async function GET(req: NextRequest) {

  const { searchParams }: { searchParams: URLSearchParams } = new URL(req.url);
  
  const page = searchParams.get("page")
  const category = searchParams.get("category");
  let pageNumber = 1;

  if (page) {
    pageNumber = parseInt(page);
  }


  const POST_PER_PAGE = 2

  const query: any = {
    // orderBy: {
    //   createdAt: ""
    // },
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (pageNumber - 1),
    where: {
      ...(category && { catSlug: category }),
    },
  };

  // console.log(page)
  try {    
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({where: query.where})
    ])

    return NextResponse.json({posts, count}, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}


// Create a post
export async function POST(req: NextRequest) {
  const session = await getAuthSession()

  if(!session) {
    return NextResponse.json({message: "unauthorized"}, {status: 401})
  }

  try {    
    const body = await req.json()
    const post = await prisma.post.create({
     data: {...body, userEmail: session?.user?.email}
    })

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

