"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";

const DEMO_EMAIL = "demo@careerlaunchpad.local";
const DEMO_PASSWORD = "Password123!";

export default function LoginClient({
  variant = "page",
  onAuthSuccess,
}: {
  variant?: "page" | "modal";
  onAuthSuccess?: (args: { nextPath: string; hadNext: boolean }) => void;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextParam = useMemo(() => searchParams.get("next"), [searchParams]);
  const hadNext = Boolean(nextParam);
  const nextPath = nextParam || "/about";

  const [email, setEmail] = useState(DEMO_EMAIL);
  const [password, setPassword] = useState(DEMO_PASSWORD);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; message?: string }
        | null;

      if (!res.ok) {
        setError(data?.message || "Login failed.");
        return;
      }

      const safeNextPath = nextPath.startsWith("/") ? nextPath : "/about";

      if (variant === "modal") {
        if (onAuthSuccess) {
          onAuthSuccess({ nextPath: safeNextPath, hadNext });
          return;
        }

        // Fallback: close the modal first, then navigate if needed.
        router.back();
        if (hadNext) {
          setTimeout(() => {
            router.replace(safeNextPath, { scroll: false });
            router.refresh();
          }, 0);
        } else {
          setTimeout(() => router.refresh(), 0);
        }
        return;
      } else {
        router.push(safeNextPath);
      }
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const content = (
    <div
      className={[
        "w-full max-w-md rounded-xl p-8",
        variant === "modal"
          ? "bg-gray-900 border border-gray-600 shadow-xl"
          : "bg-gray-800/50 border border-gray-700",
      ].join(" ")}
    >
        <h1 className="text-3xl font-extrabold">Log in</h1>
        <p className="mt-2 text-gray-400">
          Demo-only login. Use the prefilled credentials.
        </p>

        {error && (
          <div className="mt-4 rounded-lg border border-red-400/40 bg-red-500/10 p-3 text-red-200">
            {error}
          </div>
        )}

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full rounded-lg bg-gray-900/60 border border-gray-700 px-4 py-3 outline-none focus:border-brand-teal"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-full rounded-lg bg-gray-900/60 border border-gray-700 px-4 py-3 outline-none focus:border-brand-teal"
              autoComplete="current-password"
              required
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg bg-cta-gradient text-brand-dark-blue transition-transform transform hover:scale-[1.01] disabled:opacity-60"
            >
              {isSubmitting ? "Logging in…" : "Log in"}
            </button>
          </div>

          <div className="pt-4 border-t border-gray-700 text-sm text-gray-400">
            <div className="flex items-center justify-between">
              <span>Demo email:</span>
              <code className="text-gray-200">{DEMO_EMAIL}</code>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span>Demo password:</span>
              <code className="text-gray-200">{DEMO_PASSWORD}</code>
            </div>
          </div>
        </form>

        <div className="mt-4">
          <Link
            href="/signup"
            scroll={false}
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-gray-700 bg-gray-900/40 text-gray-200 hover:bg-gray-900/60 transition text-sm"
          >
            New user? Create an account
          </Link>
        </div>

        {variant === "page" && (
          <div className="mt-6">
            <Button href="/" variant="secondary">
              Back to landing
            </Button>
          </div>
        )}
      </div>
  );

  if (variant === "modal") return content;

  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center px-6 py-16">
      {content}
    </div>
  );
}
