import { prisma } from "@/lib/connect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        views: "desc",
      },
      include: { user: true },
    });

    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
