"use client";

import { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";
import LoginClient from "@/app/login/LoginClient";

export default function LoginModalPage() {
  const router = useRouter();

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") router.back();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [router]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center px-6 py-10"
      role="dialog"
      aria-modal="true"
      aria-label="Log in"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-label="Close"
        onClick={() => router.back()}
      />

      <div className="relative w-full max-w-md">
        <button
          type="button"
          className="absolute right-3 top-3 rounded-md p-2 text-gray-300 hover:bg-gray-800 hover:text-white transition"
          aria-label="Close"
          onClick={() => router.back()}
        >
          <FaTimes size={18} />
        </button>

        <Suspense
          fallback={<div className="px-1 py-6 text-gray-300">Loading…</div>}
        >
          <LoginClient
            variant="modal"
            onAuthSuccess={({ nextPath, hadNext }) => {
              router.back();
              if (hadNext) {
                setTimeout(() => {
                  router.replace(nextPath, { scroll: false });
                  router.refresh();
                }, 0);
              } else {
                setTimeout(() => router.refresh(), 0);
              }
            }}
          />
        </Suspense>
      </div>
    </div>
  );
}