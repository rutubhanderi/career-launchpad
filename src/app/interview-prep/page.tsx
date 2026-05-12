import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/auth";

import InterviewPrepClient from "./InterviewPrepClient";

export default async function InterviewPrepPage() {
  if (!(await isAuthenticated())) {
    redirect("/login?next=/interview-prep");
  }

  return <InterviewPrepClient />;
}