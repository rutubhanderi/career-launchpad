import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as
    | { email?: string; password?: string }
    | null;

  const email = (body?.email ?? "").trim().toLowerCase();
  const password = body?.password ?? "";

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error || !data.user) {
    return NextResponse.json(
      {
        ok: false,
        message: error?.message || "Signup failed.",
      },
      { status: 400 },
    );
  }

  return NextResponse.json({
    ok: true,
    email: data.user.email,
    sessionCreated: Boolean(data.session),
    requiresConfirmation: !data.session,
    message: data.session
      ? "Account created and signed in."
      : "Check your email to confirm your account, then log in.",
  });
}
