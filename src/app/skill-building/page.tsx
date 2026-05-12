import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/auth";

export default async function SkillBuildingPage() {
  if (!(await isAuthenticated())) {
    redirect("/login?next=/skill-building");
  }

  return (
    <main className="min-h-screen bg-brand-dark-blue text-white">
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">Skill Building</h1>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Coming soon.
          </p>
        </div>
      </section>
    </main>
  );
}
