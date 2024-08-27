import prisma from "@/lib/database"
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest ) {
   const body = request.body

   console.log(body)

  return NextResponse.json({
    error: 'API_ERROR.NO_USER_EMAIL'
  }, { status: 200 })
}