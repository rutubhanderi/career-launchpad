import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/auth";

import SkillBuildingClient from "./SkillBuildingClient";

export default async function SkillBuildingPage() {
  if (!(await isAuthenticated())) {
    redirect("/login?next=/skill-building");
  }

  return <SkillBuildingClient />;
}
