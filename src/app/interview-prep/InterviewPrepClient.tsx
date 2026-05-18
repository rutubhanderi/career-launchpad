"use client";

import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaBullseye,
  FaCheckSquare,
  FaChevronDown,
  FaChevronUp,
  FaExternalLinkAlt,
  FaFileAlt,
  FaLaptopCode,
  FaMicrophone,
  FaRegComments,
  FaRegFileAlt,
  FaUsersCog,
} from "react-icons/fa";

import Button from "@/components/ui/Button";

// ─── Types ───────────────────────────────────────────────────────────────────

interface FaqItem {
  q: string;
  a: string;
}

interface TrackItem {
  label: string;
  href: string;
  badge: string;
  note?: string;
}

interface Track {
  icon: React.ReactNode;
  title: string;
  color: string;
  items: TrackItem[];
}

interface Step {
  num: number;
  title: string;
  sub: string;
}

interface Resource {
  badge: string;
  title: string;
  href: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const faqItems: FaqItem[] = [
  {
    q: "Tell me about yourself and why you are applying for this role.",
    a: "Start with a 2–3 sentence professional summary, then highlight your most relevant experience, and close with why this specific role interests you. Keep it under 2 minutes and practice out loud — don't just recite your CV, tell a story.",
  },
  {
    q: "Describe a time you faced a significant challenge at work. How did you handle it?",
    a: "Use the STAR method: Situation (context), Task (your responsibility), Action (what you specifically did), and Result (the positive outcome). Focus on your own actions and measurable impact — not just what the team did.",
  },
  {
    q: "What is your greatest strength and how does it help you in your work?",
    a: "Choose a real, relevant strength and give a specific example of how you've used it to achieve a positive result. Avoid generic answers like 'hard-working' — be concrete and memorable.",
  },
  {
    q: "Where do you see yourself in 5 years?",
    a: "Show ambition aligned with the company's trajectory. Mention skills you want to develop and how this role is a key step. Avoid saying you want to run the company — focus on growth within the domain.",
  },
  {
    q: "How do you handle not knowing the answer to a question?",
    a: "Be honest and think out loud. Say: 'I don't know off the top of my head, but here's how I'd approach finding the answer…' This shows intellectual honesty and problem-solving ability — both are valued over bluffing.",
  },
];

const roadmapSteps: Step[] = [
  { num: 1, title: "Build Confidence", sub: "Communication & clarity" },
  { num: 2, title: "Craft Resume", sub: "Honest, impact-based" },
  { num: 3, title: "Explain Projects", sub: "Problem → Approach → Result" },
  { num: 4, title: "Master HR Q&A", sub: "Structured answers" },
  { num: 5, title: "Mock & Refine", sub: "Practice with peers" },
];

const tracks: Track[] = [
  {
    icon: <FaMicrophone size={22} />,
    title: "Build Communication & Confidence",
    color: "bg-brand-blue",
    items: [
      {
        label: "Clear self-introductions and basic interview speaking",
        href: "https://www.youtube.com/watch?v=Unzc731iCUY",
        badge: "YouTube · Free",
      },
      {
        label: "Clarity and pronunciation for everyday interview English",
        href: "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english",
        badge: "BBC Learning English",
      },
      {
        label: "Reduce fear, hesitation, and nervousness while speaking",
        href: "https://www.coursera.org/learn/public-speaking",
        badge: "Coursera · Free audit",
      },
      {
        label: "Confidence over correctness — focus on ideas, not perfect grammar",
        href: "https://www.toastmasters.org/resources",
        badge: "Toastmasters · Free",
        note: "Focus on ideas, not perfect grammar",
      },
    ],
  },
  {
    icon: <FaFileAlt size={22} />,
    title: "Create a Strong, Honest Resume + Learn to Present It",
    color: "bg-brand-teal",
    items: [
      {
        label: "Only real skills, tools, projects, and internships that can be explained",
        href: "https://resumeworded.com/resume-checker",
        badge: "Resume Worded · Free",
      },
      {
        label: "Clean, impact-based resume — remove weak or fake content",
        href: "https://www.overleaf.com/gallery/tagged/cv",
        badge: "Overleaf · Free",
      },
      {
        label: "Explain every project: Problem → Approach → Result",
        href: "https://www.youtube.com/watch?v=owtSLJKbQLg",
        badge: "YouTube · Free",
      },
      {
        label: "Defend and explain every resume line confidently",
        href: "https://www.pramp.com",
        badge: "Pramp · Free",
      },
    ],
  },
  {
    icon: <FaBullseye size={22} />,
    title: "Master Interview Strategy",
    color: "bg-[#085041]",
    items: [
      {
        label: "Structured answers for common HR questions (self-intro, strengths, goals)",
        href: "https://www.youtube.com/watch?v=wzozENlKfmI",
        badge: "YouTube · Free",
      },
      {
        label: "Structure answers clearly and avoid vague responses",
        href: "https://www.coursera.org/learn/interviewing-jobs",
        badge: "Coursera · Free audit",
      },
      {
        label: "Basic SQL and explaining logic step-by-step",
        href: "https://sqlzoo.net",
        badge: "SQLZoo · Free",
      },
      {
        label: '"I don\'t know" questions — calmly and honestly by thinking out loud',
        href: "https://www.themuse.com/advice/how-to-answer-i-dont-know-in-an-interview",
        badge: "The Muse · Free",
      },
      {
        label: "Real interview patterns and expectations to reduce fear",
        href: "https://www.glassdoor.co.in/Interview/index.htm",
        badge: "Glassdoor · Free",
      },
    ],
  },
];

const resources: Resource[] = [
  {
    badge: "Speaking",
    title: "Toastmasters Resources",
    href: "https://www.toastmasters.org/resources",
  },
  {
    badge: "English",
    title: "BBC Learning English",
    href: "https://www.bbc.co.uk/learningenglish",
  },
  {
    badge: "Resume",
    title: "Resume Worded Checker",
    href: "https://resumeworded.com/resume-checker",
  },
  { badge: "Mock Interviews", title: "Pramp — Peer Practice", href: "https://www.pramp.com" },
  { badge: "SQL", title: "SQLZoo Interactive", href: "https://sqlzoo.net" },
  {
    badge: "Interview Patterns",
    title: "Glassdoor Reviews",
    href: "https://www.glassdoor.co.in/Interview/index.htm",
  },
  {
    badge: "HR Questions",
    title: "InterviewBit HR Guide",
    href: "https://www.interviewbit.com/hr-interview-questions/",
  },
  {
    badge: "Templates",
    title: "Overleaf Resume Templates",
    href: "https://www.overleaf.com/gallery/tagged/cv",
  },
  {
    badge: "Public Speaking",
    title: "Coursera: Public Speaking",
    href: "https://www.coursera.org/learn/public-speaking",
  },
];

const checklistItems = [
  "Research the company and your interviewers thoroughly beforehand.",
  "Prepare 3–5 strong stories using the STAR method.",
  "Prepare 3 insightful questions to ask the interviewer.",
  "Arrive 10 minutes early or join the call 2 minutes before.",
  "Keep your resume, a notepad, and water nearby.",
];

const prepFormats = [
  {
    icon: <FaLaptopCode size={32} />,
    title: "Technical Interviews",
    desc: "Master coding challenges with insights from peers who've cracked technical rounds at top companies.",
    cta: "Start Prep",
    href: "https://leetcode.com",
  },
  {
    icon: <FaRegComments size={32} />,
    title: "Behavioral Interviews",
    desc: "Learn storytelling techniques from students who've shared their successful STAR method experiences.",
    cta: "Start Prep",
    href: "https://www.themuse.com/advice/star-interview-method",
  },
  {
    icon: <FaRegFileAlt size={32} />,
    title: "Peer Mock Interviews",
    desc: "Practice with students who've recently interviewed at your target companies and received offers.",
    cta: "Find Partner",
    href: "https://www.pramp.com",
  },
  {
    icon: <FaUsersCog size={32} />,
    title: "HR & Negotiation",
    desc: "Get salary negotiation tips and culture-fit advice from peers who've successfully navigated HR rounds.",
    cta: "Start Prep",
    href: "https://www.interviewbit.com/hr-interview-questions/",
  },
];

// ─── Nav config ───────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Journey", href: "#journey" },
  { label: "Tracks", href: "#roadmap" },
  { label: "Prep Formats", href: "#formats" },
  { label: "Questions", href: "#questions" },
  { label: "Tips", href: "#tips" },
  { label: "Resources", href: "#resources" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const SectionNav = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur border-b border-gray-800 shadow-md"
      aria-label="Page sections"
    >
      <div className="container mx-auto px-6">
        <ul className="flex items-center justify-center gap-1 overflow-x-auto scrollbar-none py-0" role="list">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = active === href.replace("#", "");
            return (
              <li key={href} className="flex-shrink-0">
                <a
                  href={href}
                  onClick={(e) => handleClick(e, href)}
                  className={[
                    "inline-block px-5 py-4 text-sm font-semibold transition-colors border-b-2",
                    isActive
                      ? "text-brand-teal border-brand-teal"
                      : "text-gray-400 border-transparent hover:text-white hover:border-gray-600",
                  ].join(" ")}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

const AccordionItem = ({ q, a }: FaqItem) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-7 px-4 gap-6 hover:bg-gray-800/30 rounded-lg transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold leading-snug">{q}</span>
        {isOpen ? (
          <FaChevronUp className="text-brand-teal flex-shrink-0" size={16} />
        ) : (
          <FaChevronDown className="text-brand-teal flex-shrink-0" size={16} />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-8 pt-2 bg-gray-800/60 rounded-b-lg mx-1 mb-2">
          <p className="text-gray-300 text-base leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

const TrackCard = ({ track }: { track: Track }) => (
  <div className="bg-gray-800 rounded-2xl border border-gray-700 hover:border-brand-teal transition-colors overflow-hidden flex flex-col h-full">
    <div className={`${track.color} px-6 py-6 flex items-start gap-4`}>
      <span className="text-white/80 mt-0.5 flex-shrink-0">{track.icon}</span>
      <h3 className="text-white font-bold text-lg leading-snug">{track.title}</h3>
    </div>
    <div className="p-6 flex flex-col gap-0 flex-1 divide-y divide-gray-700">
      {track.items.map((item, i) => (
        <div key={i} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
          <span className="mt-2 w-2 h-2 rounded-full bg-brand-teal flex-shrink-0" />
          <div>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-200 hover:text-brand-teal transition-colors"
            >
              {item.label}
            </a>
            <span className="ml-2 text-xs text-brand-teal/80 font-medium">[{item.badge}]</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Roadmap = () => (
  <>
    {/* Mobile: vertical list */}
    <ol className="flex flex-col gap-0 md:hidden" aria-label="Learning journey steps">
      {roadmapSteps.map((step, i) => (
        <li key={step.num} className="flex items-stretch gap-5">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-brand-blue border-2 border-brand-teal text-white font-extrabold text-lg flex items-center justify-center flex-shrink-0">
              {step.num}
            </div>
            {i < roadmapSteps.length - 1 && (
              <div className="w-px flex-1 bg-gradient-to-b from-brand-teal to-teal-800 my-2" />
            )}
          </div>
          <div className="pb-8">
            <p className="text-base font-bold text-white leading-tight mt-3">{step.title}</p>
            <p className="text-sm text-gray-400 mt-1">{step.sub}</p>
          </div>
        </li>
      ))}
    </ol>

    {/* Desktop: horizontal stepper */}
    <ol
      className="hidden md:flex items-start justify-between w-full relative"
      aria-label="Learning journey steps"
    >
      <div
        className="absolute h-px bg-gradient-to-r from-brand-teal via-teal-700 to-teal-800 top-[23px] left-[68px] right-[68px] pointer-events-none"
        aria-hidden="true"
      />
      {roadmapSteps.map((step) => (
        <li key={step.num} className="flex flex-col items-center text-center z-10 flex-1 px-3">
          <div className="w-12 h-12 rounded-full bg-brand-blue border-2 border-brand-teal text-white font-extrabold text-lg flex items-center justify-center mb-4 bg-gray-900">
            {step.num}
          </div>
          <p className="text-base font-bold text-white leading-tight">{step.title}</p>
          <p className="text-sm text-gray-400 mt-2">{step.sub}</p>
        </li>
      ))}
    </ol>
  </>
);

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function InterviewPrepClient() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue py-28 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Interview Prep:{" "}
            <span className="text-brand-teal">Communication, Resume & Strategy</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            A structured roadmap built on peer insights. Learn what actually works from
            students who've recently nailed their interviews at top companies.
          </p>
          <div className="mt-10 flex justify-center gap-5 flex-wrap">
            <Button href="#roadmap" variant="cta">
              Start the Roadmap
            </Button>
            <Button href="#resources" variant="secondary">
              Free Resources
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky section nav */}
      <SectionNav />

      {/* Tagline bar */}
      <div className="bg-gray-900 py-5 px-6">
        <div className="container mx-auto flex items-center justify-center gap-3 flex-wrap text-sm font-semibold text-brand-teal">
          {[
            "Speak clearly",
            "Know your resume",
            "Explain well",
            "Handle questions smartly",
          ].map((t, i, arr) => (
            <span key={i} className="flex items-center gap-3">
              <span className="bg-brand-teal/10 border border-brand-teal/30 rounded-full px-5 py-1.5 text-brand-teal">
                {t}
              </span>
              {i < arr.length - 1 && (
                <FaArrowRight className="text-gray-600 flex-shrink-0" size={12} />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Learning Journey Steps */}
      <section id="journey" className="py-24 bg-gray-900/60 scroll-mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Learning Journey</h2>
            <p className="text-gray-400 text-lg">Follow the sequence for the best results</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Roadmap />
          </div>
        </div>
      </section>

      {/* Three Track Cards */}
      <section className="py-24 scroll-mt-16" id="roadmap">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Three Core Tracks</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Work through all three — each builds on the last. Every link is free.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {tracks.map((track, i) => (
              <TrackCard key={i} track={track} />
            ))}
          </div>
        </div>
      </section>

      {/* Prep Formats */}
      <section className="py-24 bg-gray-900/50 scroll-mt-16" id="formats">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Prep Format</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Learn from peer experiences and practice with fellow students who've recently succeeded.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {prepFormats.map((card, i) => (
              <div
                key={i}
                className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-brand-teal transition-colors flex flex-col"
              >
                <div className="mb-6 text-brand-teal">{card.icon}</div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-400 mb-8 flex-1 leading-relaxed">{card.desc}</p>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-brand-teal mt-auto hover:opacity-80 transition-opacity"
                >
                  {card.cta} &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Questions Accordion */}
      <section className="py-24 scroll-mt-16" id="questions">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sample Questions</h2>
            <p className="text-gray-400 text-lg">
              Click to reveal peer-tested strategies for each question
            </p>
          </div>
          <div className="max-w-3xl mx-auto bg-gray-800/40 border border-gray-700 rounded-2xl px-4 py-2">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Tips & Checklist */}
      <section className="py-24 bg-gray-900/50 scroll-mt-16" id="tips">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Checklist column */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-6 pb-4 border-b border-brand-teal/20">
                Interview day checklist
              </p>
              <ul className="divide-y divide-white/[0.05]">
                {checklistItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 py-5 first:pt-0">
                    <div className="w-7 h-7 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-gray-300 text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips column */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-lime-400 mb-6 pb-4 border-b border-lime-400/20">
                Top interview tips
              </p>
              <ul className="space-y-3">
                {[
                  {
                    icon: <FaRegComments size={15} />,
                    text: "Listen actively and pause before answering.",
                  },
                  {
                    icon: <FaCheckSquare size={15} />,
                    text: "Keep answers concise — aim for 1–2 minutes per response unless asked for more detail.",
                  },
                  {
                    icon: <FaRegFileAlt size={15} />,
                    text: "Ask thoughtful questions at the end — it signals genuine interest.",
                  },
                  {
                    icon: <FaUsersCog size={15} />,
                    text: "If you don't know something, say so and think out loud — honesty wins.",
                  },
                  {
                    icon: <FaArrowRight size={15} />,
                    text: "Follow up with a thank-you email within 24 hours.",
                  },
                ].map((tip, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 bg-lime-400/5 border border-lime-400/10 hover:border-lime-400/25 transition-colors rounded-xl px-5 py-4"
                  >
                    <div className="w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center flex-shrink-0">
                      {tip.icon}
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed pt-1">{tip.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources Grid */}
      <section className="py-24 scroll-mt-16" id="resources">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Free Knowledge Assets</h2>
            <p className="text-gray-400 text-lg">Curated free resources — no paywalls, no fluff</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {resources.map((res, i) => (
              <a
                key={i}
                href={res.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 border border-gray-700 hover:border-brand-teal rounded-2xl p-7 transition-colors group flex flex-col gap-4 h-full"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 rounded-full px-4 py-1.5 w-fit">
                  {res.badge}
                </span>
                <h4 className="text-base font-semibold text-white group-hover:text-brand-teal transition-colors flex-1 leading-snug">
                  {res.title}
                </h4>
                <span className="text-brand-teal/70 text-sm flex items-center gap-2 mt-auto pt-3 border-t border-gray-700">
                  Visit resource <FaExternalLinkAlt size={11} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
