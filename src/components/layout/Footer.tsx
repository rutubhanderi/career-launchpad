import Link from "next/link";
import { FaRocket } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-gray-950/80">
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr] items-start">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3 text-2xl font-bold text-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-teal/10 ring-1 ring-brand-teal/20">
                <FaRocket className="text-brand-teal" />
              </span>
              <span>Career Launchpad</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Your complete career development platform, built to level the playing field and unlock opportunities for every student.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 transition hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 transition hover:text-white">
                  Skill Building
                </Link>
              </li>
              <li>
                <Link href="/find-opportunities" className="text-gray-400 transition hover:text-white">
                  Find Opportunities
                </Link>
              </li>
              <li>
                <Link href="/interview-prep" className="text-gray-400 transition hover:text-white">
                  Interview Prep
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
              Contact Us
            </h3>
            <p className="max-w-sm text-sm leading-7 text-gray-400">
              Share feedback, suggestions, or questions through our contact channels.
            </p>
            <div className="mt-3">
              <a
                href="mailto:contact.careerlaunchpad@gmail.com"
                className="text-sm font-medium text-gray-300 break-all transition hover:text-white"
              >
                GMAIL: contact.careerlaunchpad@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
