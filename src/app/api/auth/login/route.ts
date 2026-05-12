import { NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, DEMO_USER } from "@/lib/auth";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as
    | { email?: string; password?: string }
    | null;

  const email = (body?.email ?? "").trim().toLowerCase();
  const password = body?.password ?? "";

  if (email !== DEMO_USER.email || password !== DEMO_USER.password) {
    return NextResponse.json(
      { ok: false, message: "Invalid credentials (demo-only)." },
      { status: 401 },
    );
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set({
    name: AUTH_COOKIE_NAME,
    value: "1",
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
  return res;
}
