import { cookies } from "next/headers";

export const AUTH_COOKIE_NAME = "cl_session";

export const DEMO_USER = {
  email: "demo@careerlaunchpad.local",
  password: "Password123!",
} as const;

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_COOKIE_NAME)?.value === "1";
}

export function getDemoEmail(): string {
  return DEMO_USER.email;
}
