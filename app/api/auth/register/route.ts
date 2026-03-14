import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z.object({ email: z.string().email(), password: z.string().min(8), name: z.string().min(2) });

export async function POST(req: Request) {
  const body = schema.parse(await req.json());
  const passwordHash = await bcrypt.hash(body.password, 10);

  const user = await prisma.user.create({
    data: { email: body.email, name: body.name, passwordHash }
  });

  return NextResponse.json({ id: user.id, email: user.email }, { status: 201 });
}
