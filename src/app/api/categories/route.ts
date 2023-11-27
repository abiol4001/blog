import { prisma } from "@/lib/connect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await prisma.category.findMany()

    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
