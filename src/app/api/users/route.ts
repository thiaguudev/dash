import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcrypt";

import { prisma } from "@/lib/db";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { email, password } = await data;

  const isUserExists = await prisma.user.findUnique({
    where: { email },
  });

  if (isUserExists) {
    return NextResponse.json(
      { success: false, error: "Email already in use" },
      { status: 400 }
    );
  }

  const hashPassword = await hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      name: email.split("@")[0],
      hashPassword,
    },
  });

  return NextResponse.json({ success: true, user });
}
