import { NextResponse } from "next/server";
import { isAuthenticated, getDemoEmail } from "@/lib/auth";

export async function GET() {
  const authed = await isAuthenticated();
  return NextResponse.json({
    authenticated: authed,
    email: authed ? getDemoEmail() : null,
  });
}
