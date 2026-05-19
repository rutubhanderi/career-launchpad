import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET() {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();
  const authed = Boolean(data.user);
  return NextResponse.json({
    authenticated: authed,
    email: authed ? data.user?.email ?? null : null,
  });
}
