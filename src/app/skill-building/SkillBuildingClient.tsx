"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaBookOpen,
  FaBrain,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaCloud,
  FaCode,
  FaCodeBranch,
  FaCogs,
  FaCubes,
  FaDocker,
  FaExternalLinkAlt,
  FaGithub,
  FaGitAlt,
  FaGraduationCap,
  FaJava,
  FaLaptopCode,
  FaLightbulb,
  FaMicrochip,
  FaMobileAlt,
  FaPalette,
  FaProjectDiagram,
  FaPuzzlePiece,
  FaPython,
  FaRobot,
  FaShieldAlt,
  FaSitemap,
  FaTerminal,
  FaTrophy,
  FaVial,
} from "react-icons/fa";

import Button from "@/components/ui/Button";

// ─── Types ───────────────────────────────────────────────────────────────────

interface ResourceLink {
  label: string;
  href: string;
  badge?: string;
}

interface Pillar {
  icon: React.ReactNode;
  title: string;
  accent: string;
  bgAccent: string;
  intro: string;
  bullets: { text: string; links?: ResourceLink[] }[];
}

interface JourneyStep {
  num: number;
  title: string;
  sub: string;
}

interface GrowthTopic {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface Course {
  name: string;
  desc: string;
  href: string;
  tag: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const pillars: Pillar[] = [
  {
    icon: <FaBrain size={26} />,
    title: "Build Programming & Problem-Solving Skills",
    accent: "text-brand-teal",
    bgAccent: "bg-brand-teal",
    intro:
      "The non-negotiable base. Fluency in 1–2 languages, comfort with data structures and algorithms, and a daily reps habit that compounds over a semester.",
    bullets: [
      {
        text: "Focus on fundamentals: data structures, algorithms & complexity (Big-O).",
        links: [
          { label: "Striver Sheet", href: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/", badge: "DSA" },
          { label: "GFG Puzzles", href: "https://www.geeksforgeeks.org/puzzles/", badge: "Aptitude" },
        ],
      },
      {
        text: "Language depth over breadth — pick 1–2 primary languages and become fluent.",
        links: [
          { label: "Python", href: "https://www.python.org/", badge: "Python" },
          { label: "Java", href: "https://dev.java/learn/", badge: "Java" },
          { label: "C++", href: "https://isocpp.org/get-started", badge: "C++" },
        ],
      },
      {
        text: "Practice regularly with small exercises — 30 to 60 minutes daily.",
      },
      {
        text: "Master CS Core subjects: DBMS, CN, OS, OOPS.",
        links: [
          { label: "CS Core Notes (GfG)", href: "https://www.geeksforgeeks.org/computer-science-projects/", badge: "Theory" },
        ],
      },
      {
        text: "Build competitive practice momentum — HackerRank → LeetCode.",
        links: [
          { label: "HackerRank", href: "https://www.hackerrank.com/", badge: "Practice" },
          { label: "LeetCode", href: "https://leetcode.com/", badge: "Contests" },
        ],
      },
    ],
  },
  {
    icon: <FaCogs size={26} />,
    title: "Learn Practical Tools & Software Engineering Practices",
    accent: "text-brand-light-blue",
    bgAccent: "bg-brand-light-blue",
    intro:
      "The workflow real teams use. Version control, automated tests, secure coding habits, and the build & deploy basics that take your code off your laptop.",
    bullets: [
      {
        text: "Version control basics: clone, commit, branch, merge, pull requests.",
        links: [
          { label: "Git Docs", href: "https://git-scm.com/doc", badge: "Git" },
          { label: "GitHub Learning Lab", href: "https://docs.github.com/en/get-started", badge: "GitHub" },
        ],
      },
      {
        text: "Testing: write unit tests, basic integration tests, and learn secure coding practices.",
        links: [
          { label: "Testing Library", href: "https://testing-library.com/docs/", badge: "Tests" },
          { label: "OWASP Top 10", href: "https://owasp.org/www-project-top-ten/", badge: "Security" },
        ],
      },
      {
        text: "Build & deployment basics — packaging, CI/CD concepts, containers.",
        links: [
          { label: "Docker Basics", href: "https://docs.docker.com/get-started/", badge: "Docker" },
          { label: "GitHub Actions", href: "https://docs.github.com/en/actions", badge: "CI/CD" },
        ],
      },
      {
        text: "Read code in popular open-source repos — learn how production codebases are organised.",
      },
    ],
  },
  {
    icon: <FaProjectDiagram size={26} />,
    title: "Apply Skills Through Projects & Structured Learning",
    accent: "text-brand-green",
    bgAccent: "bg-brand-green",
    intro:
      "Where learning becomes a portfolio. Ship 3–5 real projects, contribute to open source, and compete in hackathons — each one is a story you can tell in an interview.",
    bullets: [
      {
        text: "Project-based learning: build 3–5 portfolio projects (small → medium → end-to-end).",
        links: [
          { label: "Portfolio Project Ideas", href: "https://github.com/practical-tutorials/project-based-learning", badge: "Ideas" },
        ],
      },
      {
        text: "Use real data and APIs to add realism — public datasets, REST APIs.",
        links: [
          { label: "REST APIs Guide", href: "https://restfulapi.net/", badge: "APIs" },
          { label: "Public APIs", href: "https://github.com/public-apis/public-apis", badge: "Data" },
        ],
      },
      {
        text: "Participate in open-source events — GSoC, GSoD.",
        links: [
          { label: "GSoC", href: "https://summerofcode.withgoogle.com/", badge: "Google" },
          { label: "GSoD", href: "https://developers.google.com/season-of-docs", badge: "Docs" },
        ],
      },
      {
        text: "Compete & ship in hackathons.",
        links: [
          { label: "Unstop", href: "https://unstop.com/", badge: "Hackathons" },
          { label: "Devfolio", href: "https://devfolio.co/", badge: "Builders" },
        ],
      },
    ],
  },
];

const journey: JourneyStep[] = [
  { num: 1, title: "Fundamentals", sub: "DS, Algos, Big-O" },
  { num: 2, title: "Language Fluency", sub: "Pick 1–2, go deep" },
  { num: 3, title: "Build Projects", sub: "Small → end-to-end" },
  { num: 4, title: "Tooling & SE", sub: "Git, Tests, Docker" },
  { num: 5, title: "Ship & Showcase", sub: "OSS, hackathons" },
];

const dailyHabits = [
  "30–60 min coding daily",
  "Push to GitHub",
  "Read one OSS PR",
  "Solve one DSA problem",
  "Document your learning",
  "Ship something small",
  "Review yesterday's code",
  "Pair with a peer",
];

const growthTopics: GrowthTopic[] = [
  {
    icon: <FaPalette size={22} />,
    title: "Computer Graphics / Architecture",
    desc: "From rendering pipelines to CPU/GPU internals — the maths and silicon behind software.",
  },
  {
    icon: <FaSitemap size={22} />,
    title: "Software Development Process",
    desc: "Agile, Scrum, Kanban, code review, release cycles — how real teams ship.",
  },
  {
    icon: <FaVial size={22} />,
    title: "Software Testing & QA",
    desc: "Unit, integration, E2E, regression — the safety net for confident refactors.",
  },
  {
    icon: <FaPuzzlePiece size={22} />,
    title: "GFG Puzzles (Aptitude)",
    desc: "Logic and quant puzzles that show up in placement aptitude rounds.",
  },
  {
    icon: <FaMobileAlt size={22} />,
    title: "Web / Android Development",
    desc: "Frontend, backend, mobile — pick a stack and ship something users can install.",
  },
  {
    icon: <FaRobot size={22} />,
    title: "AI / Machine Learning / DevOps",
    desc: "Models, MLOps, pipelines, infra-as-code — the high-leverage modern stack.",
  },
  {
    icon: <FaCloud size={22} />,
    title: "Cloud Computing (AWS S3 / EC2)",
    desc: "Storage, compute, networking — deploy beyond your laptop.",
  },
  {
    icon: <FaShieldAlt size={22} />,
    title: "Cyber Security",
    desc: "Threat modeling, secure coding, OWASP, CTFs — defend what you build.",
  },
  {
    icon: <FaLightbulb size={22} />,
    title: "Guesstimates & Case Studies",
    desc: "Structured thinking for consulting, product, and analytical interview rounds.",
  },
];

const courses: Course[] = [
  {
    name: "Coursera",
    tag: "University-grade",
    desc: "University-led specializations and professional certificates across CS, ML, and business.",
    href: "https://www.coursera.org/",
  },
  {
    name: "Udemy",
    tag: "Practical",
    desc: "Affordable, hands-on courses on every stack imaginable — great for project-based learners.",
    href: "https://www.udemy.com/",
  },
  {
    name: "NVIDIA",
    tag: "AI / GPU",
    desc: "Deep Learning Institute — accelerated computing, CUDA, and AI training direct from NVIDIA.",
    href: "https://www.nvidia.com/en-us/training/",
  },
  {
    name: "Salesforce",
    tag: "Trailhead",
    desc: "Free interactive learning paths for CRM, admin, and developer tracks on Trailhead.",
    href: "https://trailhead.salesforce.com/",
  },
  {
    name: "NPTEL",
    tag: "IIT-led · Free",
    desc: "IIT/IISc faculty-led courses with industry-recognized certifications across CS and core engineering.",
    href: "https://nptel.ac.in/",
  },
  {
    name: "MIT OpenCourseWare",
    tag: "OCW · Free",
    desc: "Full MIT course materials — lectures, problem sets, exams — open for anyone, free of cost.",
    href: "https://ocw.mit.edu/",
  },
  {
    name: "LinkedIn Learning",
    tag: "Career",
    desc: "Short professional courses with certificates that surface directly on your LinkedIn profile.",
    href: "https://www.linkedin.com/learning/",
  },
];

// ─── Section nav ─────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Foundation", href: "#foundation" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Daily Habits", href: "#habits" },
  { label: "Growth Topics", href: "#growth" },
  { label: "Courses", href: "#courses" },
  { label: "Action", href: "#action" },
];

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

// ─── Sub-components ──────────────────────────────────────────────────────────

const SectionNav = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
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
      className="sticky top-0 z-40 bg-gray-950/95 backdrop-blur border-b border-gray-800 shadow-md"
      aria-label="Skill building sections"
    >
      <div className="container mx-auto px-6">
        <ul className="flex items-center gap-1 overflow-x-auto scrollbar-none py-0" role="list">
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

const ParallaxHero = () => {
  const layerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (layerRef.current) {
          layerRef.current.style.transform = `translate3d(0, ${y * 0.25}px, 0)`;
        }
      });
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!mouseRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      mouseRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-brand-blue py-28 text-center">
      {/* Animated grid layer */}
      <div ref={layerRef} className="absolute inset-0 sb-bg-grid opacity-60" aria-hidden="true" />

      {/* Floating blobs (mouse-tracked) */}
      <div ref={mouseRef} className="absolute inset-0" aria-hidden="true">
        <div className="sb-blob sb-float-slow bg-brand-teal"   style={{ width: 320, height: 320, top: "-60px", left: "-80px" }} />
        <div className="sb-blob sb-float-medium bg-brand-green" style={{ width: 260, height: 260, top: "30%", right: "-60px" }} />
        <div className="sb-blob sb-float-fast bg-brand-light-blue" style={{ width: 200, height: 200, bottom: "-40px", left: "30%" }} />
      </div>

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(15,23,42,0.55) 90%)",
        }}
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-6">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-brand-teal/90 mb-5">
          The Career Launchpad Curriculum
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
          Skill Building:{" "}
          <span className="sb-gradient-text">Foundation, Tools & Growth</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
          A clear curriculum from CS fundamentals to shipped, recruiter-ready work — exactly what to
          study, the tools to know, and where to apply them.
        </p>
        <div className="mt-10 flex justify-center gap-5 flex-wrap">
          <Button href="#foundation" variant="cta">
            Start with Foundation
          </Button>
          <Button href="#growth" variant="secondary">
            Explore Growth Topics
          </Button>
        </div>

        {/* Skill chips — clean staggered entrance + hover lift */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3 text-sm">
          {["DSA", "Git", "Docker", "REST APIs", "GSoC", "Unstop", "Cloud"].map((t, i) => (
            <span
              key={t}
              className="sb-chip-in px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-100 backdrop-blur-sm hover:bg-white/10 hover:border-brand-teal/50 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const PillarCard = ({ pillar, index }: { pillar: Pillar; index: number }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="sb-reveal sb-tilt bg-gray-800 rounded-2xl border border-gray-700 hover:border-brand-teal overflow-hidden flex flex-col h-full"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className={`${pillar.bgAccent} px-6 py-6 flex items-start gap-4`}>
        <span className="text-white/90 mt-0.5 flex-shrink-0">{pillar.icon}</span>
        <div>
          <h3 className="text-white font-bold text-lg leading-snug">{pillar.title}</h3>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-0 flex-1 divide-y divide-gray-700">
        <p className="text-sm text-gray-300 leading-relaxed pb-5">{pillar.intro}</p>
        {pillar.bullets.map((b, i) => (
          <div key={i} className="flex items-start gap-4 py-5">
            <span className={`mt-2 w-2 h-2 rounded-full ${pillar.bgAccent} flex-shrink-0`} />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-200 leading-snug">{b.text}</p>
              {b.links && b.links.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {b.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border border-gray-700 bg-gray-900/60 ${pillar.accent} hover:bg-gray-900 hover:border-current transition-colors`}
                    >
                      {l.label}
                      <FaExternalLinkAlt size={9} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Roadmap = () => (
  <>
    {/* Mobile: vertical list */}
    <ol className="flex flex-col gap-0 md:hidden" aria-label="Skill building journey">
      {journey.map((step, i) => (
        <li key={step.num} className="flex items-stretch gap-5">
          <div className="flex flex-col items-center">
            <div className="relative w-12 h-12 rounded-full bg-brand-blue border-2 border-brand-teal text-white font-extrabold text-lg flex items-center justify-center flex-shrink-0 sb-pulse-ring">
              {step.num}
            </div>
            {i < journey.length - 1 && (
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

    {/* Desktop stepper */}
    <ol
      className="hidden md:flex items-start justify-between w-full relative"
      aria-label="Skill building journey"
    >
      <div
        className="absolute h-px bg-gradient-to-r from-brand-teal via-teal-500 to-brand-green top-[23px] left-[68px] right-[68px] pointer-events-none sb-stepper-bar"
        aria-hidden="true"
      />
      {journey.map((step, i) => (
        <li key={step.num} className="flex flex-col items-center text-center z-10 flex-1 px-3">
          <div
            className="relative w-12 h-12 rounded-full bg-brand-blue border-2 border-brand-teal text-white font-extrabold text-lg flex items-center justify-center mb-4 bg-gray-900 sb-pulse-ring"
            style={{ animationDelay: `${i * 0.3}s` }}
          >
            {step.num}
          </div>
          <p className="text-base font-bold text-white leading-tight">{step.title}</p>
          <p className="text-sm text-gray-400 mt-2">{step.sub}</p>
        </li>
      ))}
    </ol>
  </>
);

const HabitsTicker = () => (
  <div className="relative overflow-hidden bg-gray-900 py-6 border-y border-gray-800">
    <div className="flex sb-ticker-track gap-4 whitespace-nowrap will-change-transform">
      {[...dailyHabits, ...dailyHabits].map((h, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-sm font-semibold"
        >
          <FaClipboardCheck size={12} />
          {h}
        </span>
      ))}
    </div>
    {/* Fades */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-900 to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-900 to-transparent" />
  </div>
);

const GrowthCard = ({ topic, index }: { topic: GrowthTopic; index: number }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="sb-reveal sb-tilt sb-glow-hover bg-gray-800 rounded-2xl border border-gray-700 hover:border-brand-teal p-6 flex flex-col gap-3 h-full"
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="w-11 h-11 rounded-xl bg-brand-teal/10 border border-brand-teal/30 text-brand-teal flex items-center justify-center">
        {topic.icon}
      </div>
      <h3 className="text-base font-bold text-white leading-snug">{topic.title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{topic.desc}</p>
    </div>
  );
};

const CourseCard = ({ course, index }: { course: Course; index: number }) => {
  const ref = useReveal<HTMLAnchorElement>();
  return (
    <a
      ref={ref}
      href={course.href}
      target="_blank"
      rel="noopener noreferrer"
      className="sb-reveal sb-tilt bg-gray-800 border border-gray-700 hover:border-brand-green rounded-2xl p-7 transition-colors group flex flex-col gap-4 h-full"
      style={{ transitionDelay: `${(index % 4) * 90}ms` }}
    >
      <span className="text-xs font-bold uppercase tracking-widest text-brand-green bg-brand-green/10 rounded-full px-4 py-1.5 w-fit">
        {course.tag}
      </span>
      <h4 className="text-lg font-bold text-white group-hover:text-brand-green transition-colors leading-snug">
        {course.name}
      </h4>
      <p className="text-sm text-gray-400 leading-relaxed flex-1">{course.desc}</p>
      <span className="text-brand-green/80 text-sm flex items-center gap-2 mt-auto pt-3 border-t border-gray-700">
        Visit platform <FaExternalLinkAlt size={11} />
      </span>
    </a>
  );
};

const ToolsStrip = () => {
  const ref = useReveal<HTMLDivElement>();
  const tools = [
    { icon: <FaPython size={28} />,     label: "Python" },
    { icon: <FaJava size={28} />,       label: "Java" },
    { icon: <FaCode size={28} />,       label: "C++" },
    { icon: <FaGitAlt size={28} />,     label: "Git" },
    { icon: <FaGithub size={28} />,     label: "GitHub" },
    { icon: <FaDocker size={28} />,     label: "Docker" },
    { icon: <FaCloud size={28} />,      label: "AWS" },
    { icon: <FaTerminal size={28} />,   label: "CLI" },
    { icon: <FaCubes size={28} />,      label: "APIs" },
    { icon: <FaMicrochip size={28} />,  label: "Systems" },
  ];
  return (
    <div ref={ref} className="sb-reveal grid grid-cols-5 md:grid-cols-10 gap-4">
      {tools.map((t, i) => (
        <div
          key={t.label}
          className="sb-tool-in group relative bg-gray-900/60 border border-gray-800 hover:border-brand-teal rounded-xl py-5 flex flex-col items-center gap-2 text-gray-300 hover:text-brand-teal hover:-translate-y-1 hover:bg-gray-900/80 transition-all duration-300"
          style={{ animationDelay: `${i * 60}ms` }}
        >
          <span className="transition-transform duration-300 group-hover:scale-110">
            {t.icon}
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-wider">{t.label}</span>
          <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: "0 0 30px -8px rgba(20,184,166,0.5)" }} />
        </div>
      ))}
    </div>
  );
};

// ─── Main page ───────────────────────────────────────────────────────────────

export default function SkillBuildingClient() {
  const foundationRef = useReveal<HTMLDivElement>();
  const journeyRef = useReveal<HTMLDivElement>();
  const growthRef = useReveal<HTMLDivElement>();
  const coursesRef = useReveal<HTMLDivElement>();
  const ctaRef = useReveal<HTMLDivElement>();

  return (
    <>
      <ParallaxHero />

      <SectionNav />

      {/* ─── Foundation ──────────────────────────────────────────────── */}
      <section id="foundation" className="py-24 scroll-mt-16 relative overflow-hidden">
        <div className="absolute inset-0 sb-bg-grid opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="relative container mx-auto px-6">
          <div ref={foundationRef} className="sb-reveal text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-teal mb-4">
              Foundation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Learning & <span className="sb-gradient-text">Applying</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Three pillars that turn syllabus knowledge into work a recruiter can actually
              click on. Every linked resource is free.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {pillars.map((p, i) => (
              <PillarCard key={p.title} pillar={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Roadmap ──────────────────────────────────────────────────── */}
      <section id="roadmap" className="py-24 bg-gray-900/60 scroll-mt-16">
        <div className="container mx-auto px-6">
          <div ref={journeyRef} className="sb-reveal text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-teal mb-4">
              Roadmap
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Skill-Building Journey</h2>
            <p className="text-gray-400 text-lg">
              Five stages, in order. Don&apos;t skip ahead — each stage makes the next one shorter.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <Roadmap />
          </div>

          {/* Tools strip */}
          <div className="max-w-5xl mx-auto mt-20">
            <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-brand-teal mb-6">
              The Stack You Should Be Comfortable With
            </p>
            <ToolsStrip />
          </div>
        </div>
      </section>

      {/* ─── Daily habits ──────────────────────────────────────────────── */}
      <section id="habits" className="scroll-mt-16">
        <HabitsTicker />
      </section>

      {/* ─── Growth Topics ──────────────────────────────────────────────── */}
      <section id="growth" className="py-24 scroll-mt-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="sb-blob sb-float-slow bg-brand-teal" style={{ width: 320, height: 320, top: "10%", left: "-100px", opacity: 0.18 }} />
          <div className="sb-blob sb-float-medium bg-brand-green" style={{ width: 280, height: 280, bottom: "5%", right: "-80px", opacity: 0.18 }} />
        </div>

        <div className="relative container mx-auto px-6">
          <div ref={growthRef} className="sb-reveal text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-teal mb-4">
              Growth Topics
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Where to <span className="sb-gradient-text">Specialize</span> Next
            </h2>
            <p className="text-gray-400 text-lg">
              Once the foundation is solid, depth in one area beats shallow in many. Pick a track
              that matches the roles you&apos;re targeting and go deep before adding another.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {growthTopics.map((t, i) => (
              <GrowthCard key={t.title} topic={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Courses & Certifications ────────────────────────────────── */}
      <section id="courses" className="py-24 bg-gray-900/60 scroll-mt-16">
        <div className="container mx-auto px-6">
          <div ref={coursesRef} className="sb-reveal text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-green mb-4">
              Courses & Certifications
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted Platforms to <span className="sb-gradient-text">Learn From</span>
            </h2>
            <p className="text-gray-400 text-lg">
              University-grade lectures, hands-on bootcamps, vendor certifications — all in one
              place. Pick the format that matches how you actually learn.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((c, i) => (
              <CourseCard key={c.name} course={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────── */}
      <section id="action" className="py-24 scroll-mt-16">
        <div className="container mx-auto px-6">
          <div
            ref={ctaRef}
            className="sb-reveal relative overflow-hidden bg-hero-gradient rounded-3xl p-10 md:p-16 text-center shadow-2xl border border-brand-light-blue/20"
          >
            <div className="absolute inset-0 sb-bg-grid opacity-30 pointer-events-none" aria-hidden="true" />
            <div className="absolute -top-20 -left-20 sb-blob sb-float-slow bg-brand-teal" style={{ width: 260, height: 260 }} aria-hidden="true" />
            <div className="absolute -bottom-20 -right-20 sb-blob sb-float-medium bg-brand-green" style={{ width: 260, height: 260 }} aria-hidden="true" />

            <div className="relative">
              <FaTrophy className="text-brand-green text-5xl mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Pick <span className="sb-gradient-text">one skill</span> this week.
              </h2>
              <p className="mt-5 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Don&apos;t try to learn everything at once. Pick one topic from above, block 30 minutes
                today, push one commit, and repeat tomorrow. That&apos;s how this works.
              </p>
              <div className="mt-10 flex justify-center gap-4 flex-wrap">
                <Button href="/find-opportunities" variant="cta" showArrow>
                  Find Opportunities
                </Button>
                <Button href="/interview-prep" variant="secondary">
                  Interview Prep
                </Button>
              </div>

              <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
                {[
                  { icon: <FaBookOpen />,   title: "Learn",  desc: "DSA + 1 language deeply." },
                  { icon: <FaCodeBranch />, title: "Build",  desc: "Ship a small project this month." },
                  { icon: <FaChalkboardTeacher />, title: "Share", desc: "Push to GitHub, write a README." },
                ].map((s) => (
                  <div
                    key={s.title}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5"
                  >
                    <div className="text-brand-green text-2xl mb-3">{s.icon}</div>
                    <p className="font-bold text-white">{s.title}</p>
                    <p className="text-sm text-blue-100/80 mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer breadcrumb / final */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500">
            <FaGraduationCap className="text-brand-teal" />
            <span>Career Launchpad · Skill Building</span>
            <span className="opacity-50">·</span>
            <a href="#foundation" className="hover:text-brand-teal transition-colors">Back to top</a>
            <span className="opacity-50">·</span>
            <span><FaLaptopCode className="inline mr-1.5" />Built for learners</span>
          </div>
        </div>
      </section>
    </>
  );
}
