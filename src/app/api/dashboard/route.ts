import prisma from "@/lib/database"
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { email?: string } }) {
  const { email } = params
  console.log('TESTE PELO AMOR DE DEUS')

  if (!!email) {
    try {
      const userByEmail = await prisma.user.findFirst({
        where: { email }
      })

      console.log(userByEmail)
      const isOnboardingDone = userByEmail
      //TODO more stuff related to dashboard

      return NextResponse.json({
        isOnboardingDone
      }, { status: 200 })
    } catch (error) {
      return NextResponse.json({
        error
      }, { status: 500 })
    }
  }

  return NextResponse.json({
    error: 'API_ERROR.NO_USER_EMAIL'
  }, { status: 500 })
}