import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcrypt";
import { StatusCodes } from "http-status-codes";

import { prisma } from "@/lib/db";

export async function POST(request: NextRequest) {
  let user = null;
  const data = await request.json();
  const { email, password } = data;

  user = await prisma.user.findUnique({ where: { email } });
  console.log("[USER]", user);

  if (user)
    return NextResponse.json("Email or password incorrectly", {
      status: StatusCodes.BAD_REQUEST,
    });

  const hashPassword = await hash(password, 10);

  user = await prisma.user.create({
    data: {
      email,
      name: email.split("@")[0],
      hashPassword,
    },
  });

  return NextResponse.json(user);
}
