import { Suspense } from "react";
import SignupClient from "./SignupClient";

export default function SignupPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[calc(100vh-120px)] flex items-center justify-center px-6 py-16 text-gray-300">
          Loading…
        </div>
      }
    >
      <SignupClient />
    </Suspense>
  );
}
