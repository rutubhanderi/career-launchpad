"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaBars, FaTimes, FaRocket, FaChevronDown } from "react-icons/fa";
import Button from "@/components/ui/Button";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;
    fetch("/api/auth/me", { cache: "no-store" })
      .then((r) => r.json())
      .then((data: { authenticated?: boolean; email?: string | null }) => {
        if (!isMounted) return;
        const authed = Boolean(data?.authenticated);
        setIsAuthenticated(authed);
        setUserEmail(authed ? (data?.email ?? null) : null);
      })
      .catch(() => {
        if (!isMounted) return;
        setIsAuthenticated(false);
        setUserEmail(null);
      });
    return () => {
      isMounted = false;
    };
  }, [pathname]);

  useEffect(() => {
    setIsUserMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isUserMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsUserMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isUserMenuOpen]);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } finally {
      setIsAuthenticated(false);
      setUserEmail(null);
      setIsUserMenuOpen(false);
      setIsOpen(false);
      router.push("/");
      router.refresh();
    }
  };

  const navLinks = useMemo(
    () => [
      { name: "About", href: "/about" },
      { name: "Skill Building", href: "/skill-building" },
      { name: "Find Opportunities", href: "/find-opportunities" },
      { name: "Interview Prep", href: "/interview-prep" },
    ],
    [],
  );

  const getNavHref = (href: string) => {
    if (isAuthenticated) return href;
    const next = encodeURIComponent(href);
    return `/login?next=${next}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-dark-blue/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-xl font-bold">
          <FaRocket size={20} className="text-brand-teal" />
          <span>Career Launchpad</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={getNavHref(link.href)}
              scroll={false}
              className="text-gray-300 hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          {isAuthenticated ? (
            <div className="relative">
              <button
                type="button"
                className="px-4 py-2 rounded-lg border border-gray-700 bg-gray-900/40 text-gray-200 hover:bg-gray-900/60 transition inline-flex items-center gap-2"
                aria-haspopup="menu"
                aria-expanded={isUserMenuOpen}
                onClick={() => setIsUserMenuOpen((v) => !v)}
              >
                <span className="max-w-[220px] truncate">{userEmail || "Logged in"}</span>
                <FaChevronDown
                  size={12}
                  className={[
                    "text-gray-300 transition-transform",
                    isUserMenuOpen ? "rotate-180" : "rotate-0",
                  ].join(" ")}
                  aria-hidden="true"
                />
              </button>

              {isUserMenuOpen && (
                <>
                  <button
                    type="button"
                    className="fixed inset-0 cursor-default"
                    aria-label="Close user menu"
                    onClick={() => setIsUserMenuOpen(false)}
                  />
                  <div
                    role="menu"
                    className="absolute right-0 mt-2 w-64 rounded-lg border border-gray-700 bg-gray-900/95 backdrop-blur-sm shadow-lg p-2 z-50"
                  >
                    <div className="px-3 py-2 text-sm text-gray-200 truncate" role="menuitem">
                      {userEmail || "Logged in"}
                    </div>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-200 hover:bg-gray-800 transition"
                      role="menuitem"
                    >
                      Logout
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <Button href="/login" variant="cta" scroll={false}>
              Sign in
            </Button>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark-blue/95 flex flex-col items-center space-y-4 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={getNavHref(link.href)}
              scroll={false}
              className="text-xl text-gray-300 hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {isAuthenticated ? (
            <div className="w-full max-w-[280px]">
              <button
                type="button"
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-900/40 text-gray-200 hover:bg-gray-900/60 transition inline-flex items-center justify-between gap-3"
                aria-haspopup="menu"
                aria-expanded={isUserMenuOpen}
                onClick={() => setIsUserMenuOpen((v) => !v)}
              >
                <span className="truncate">{userEmail || "Logged in"}</span>
                <FaChevronDown
                  size={12}
                  className={[
                    "text-gray-300 transition-transform flex-shrink-0",
                    isUserMenuOpen ? "rotate-180" : "rotate-0",
                  ].join(" ")}
                  aria-hidden="true"
                />
              </button>

              {isUserMenuOpen && (
                <div
                  role="menu"
                  className="mt-2 w-full rounded-lg border border-gray-700 bg-gray-900/95 backdrop-blur-sm shadow-lg p-2"
                >
                  <div className="px-3 py-2 text-sm text-gray-200 truncate" role="menuitem">
                    {userEmail || "Logged in"}
                  </div>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-200 hover:bg-gray-800 transition"
                    role="menuitem"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Button href="/login" variant="cta" scroll={false}>
              Sign in
            </Button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
