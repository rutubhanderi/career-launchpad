import { Suspense } from "react";
import LoginClient from "./LoginClient";

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[calc(100vh-120px)] flex items-center justify-center px-6 py-16 text-gray-300">
          Loading…
        </div>
      }
    >
      <LoginClient />
    </Suspense>
  );
}
