import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FaSearch, FaPaperPlane, FaTools, FaGithub } from "react-icons/fa";
import { isAuthenticated } from "@/lib/auth";

const opportunitySections = [
  {
    title: "Core Job and Internship Platforms",
    items: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com",
        image: "/images/platforms/linkedIn.jpeg",
        description:
          "LinkedIn is the world’s largest professional networking platform where students and professionals can discover jobs, internships, and networking opportunities. Build your profile, connect with recruiters, and showcase your projects.",
      },
      {
        name: "Wellfound",
        url: "https://wellfound.com",
        image: "/images/platforms/wellfound.jpeg",
        description:
          "Wellfound, formerly AngelList Talent, is ideal for startup jobs and internships. Apply directly to founders and product teams, especially for remote and early-stage roles.",
      },
      {
        name: "Cuvette",
        url: "https://www.cuvette.tech",
        image: "/images/platforms/cuvette.jpeg",
        description:
          "Cuvette helps Tier 2 and Tier 3 students land software engineering roles with tailored placement support, mock interviews, and job opportunities designed for beginners entering the tech industry.",
      },
      {
        name: "Internshala",
        url: "https://internshala.com",
        image: "/images/platforms/internshala.jpeg",
        description:
          "Internshala is a leading internship platform for students and freshers in India. It helps you find paid and unpaid internships, skill-building programs, and early-career opportunities across multiple domains.",
      },
      {
        name: "Instahyre",
        url: "https://www.instahyre.com",
        image: "/images/platforms/instahyre.jpeg",
        description:
          "Instahyre uses AI to connect candidates directly with recruiters and startups. It focuses on curated opportunities for software engineering and product roles, minimizing spam applications.",
      },
      {
        name: "Naukri Campus",
        url: "https://www.naukri.com/campus",
        image: "/images/platforms/naukri.jpeg",
        description:
          "Naukri Campus is designed for students and fresh graduates scanning entry-level roles and off-campus drives. It includes aptitude tests, hiring assessments, and direct applications to companies.",
      },
    ],
  },
  {
    title: "Competitive/Merit Based Platforms",
    items: [
      {
        name: "Unstop",
        url: "https://unstop.com",
        image: "/images/platforms/unstop.jpeg",
        description:
          "Unstop features hackathons, coding competitions, quizzes, and hiring challenges used by top companies for fresher recruitment. It is a strong venue for merit-based selection and campus-driven hiring events.",
      },
      {
        name: "Codeforces",
        url: "https://codeforces.com",
        image: "/images/platforms/codeforces.jpeg",
        description:
          "Codeforces hosts competitive programming contests and practice rounds that are respected by recruiters and technical teams. It helps sharpen algorithm skills and prepares you for merit-based hiring tests.",
      },
      {
        name: "LeetCode",
        url: "https://leetcode.com",
        image: "/images/platforms/leetcode.jpeg",
        description:
          "LeetCode offers coding challenges and contests that are widely used for preparation and merit-based hiring. Its competition tracks and interview practice problems help you sharpen algorithm skills.",
      },
      {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org",
        image: "/images/platforms/geeksforgeeks.jpeg",
        description:
          "GeeksforGeeks provides coding contests, practice problems, and campus hiring resources. It is a popular resource for merit-based placements and technical skill-building.",
      },
    ],
  },
  {
    title: "Open-Source & Inclusive Programs",
    items: [
      {
        name: "Google Summer of Code",
        url: "https://summerofcode.withgoogle.com",
        image: "/images/platforms/gsoc.jpeg",
        description:
          "Google Summer of Code is a global program where students contribute to open-source projects under mentor guidance. It offers stipends, hands-on experience, and a strong community signal.",
      },
      {
        name: "AICTE Internship Portal",
        url: "https://internship.aicte-india.org",
        image: "/images/platforms/aicte.jpeg",
        description:
          "The AICTE Internship Portal connects technical students with verified internships from startups, corporations, and government bodies. It is a trusted public portal for practical training opportunities.",
      },
      {
        name: "NCS Portal",
        url: "https://www.ncs.gov.in",
        image: "/images/platforms/ncs.jpeg",
        description:
          "The National Career Service Portal links job seekers with employers across India and offers career counseling, skill support, and government-backed employment listings.",
      },
      {
        name: "MLH Fellowship",
        url: "https://fellowship.mlh.io",
        image: "/images/platforms/mlhfellowship.jpeg",
        description:
          "The MLH Fellowship offers remote project-based experience, mentorship, and collaboration on real-world engineering work. It is a strong alternative to traditional internships.",
      },
      {
        name: "Amazon WOW",
        url: "https://amazon.jobs/content/en/career-programs/university/women-of-the-world",
        image: "/images/platforms/amazon.jpeg",
        description:
          "Amazon WOW is a mentoring and hiring initiative for women in technology that includes interview preparation, networking, and potential interview shortlists at Amazon.",
      },
      {
        name: "Generation India",
        url: "https://india.generation.org",
        image: "/images/platforms/generationindia.jpeg",
        description:
          "Generation India runs bootcamps and career support programs for underserved youth, helping learners gain industry-relevant skills and placement support through merit-based programs.",
      },
    ],
  },
];

export default async function FindOpportunitiesPage() {
  if (!(await isAuthenticated())) {
    redirect("/login?next=/find-opportunities");
  }

  return (
    <main className="min-h-screen bg-brand-blue text-white scroll-smooth">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-extrabold">
            Discover Opportunities with Peer Insights
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Explore internships, fellowships, hackathons, and career platforms recommended by students 
            who've successfully participated. Get insider tips on applications and what really works.
          </p>
        </div>
      </section>

      {/* Playbook Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-gray-900/70 border border-gray-700 rounded-3xl p-10 shadow-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-brand-green font-semibold uppercase tracking-[0.3em]">
                Playbook
              </p>
              <h2 className="text-4xl font-bold mt-4">
                A practical playbook for finding the right opportunities
              </h2>
              <p className="mt-4 text-gray-300 text-lg">
                Follow these steps to discover, evaluate, and apply to meaningful internships, fellowships, and programs with confidence.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-4">
                <a href="#core-platforms" className="group block bg-gray-800/70 p-6 rounded-3xl border border-gray-700 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4 text-brand-green">
                  <FaSearch size={28} />
                  <h3 className="text-2xl font-semibold">1. Search</h3>
                </div>
                <p className="text-gray-300 leading-7">
                  Search strategically using trusted platforms that match your goals and skill level. Start with professional networks like LinkedIn and Wellfound for internships and startup opportunities, then explore curated student-focused portals such as Internshala, Cuvette, Instahyre, and Naukri Campus. Focus on quality over quantity by shortlisting roles that align with your interests, projects, and career path.
                </p>
              </a>
              <a href="#core-platforms" className="group block bg-gray-800/70 p-6 rounded-3xl border border-gray-700 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4 text-brand-green">
                  <FaPaperPlane size={28} />
                  <h3 className="text-2xl font-semibold">2. Apply</h3>
                </div>
                <p className="text-gray-300 leading-7">
                  Apply with a focused and organized approach instead of mass applying everywhere. Use platforms like Unstop for hiring challenges and hackathons, and keep track of applications across LinkedIn, Internshala, and company career portals. Tailor your resume, portfolio, and cover letter for each opportunity to improve your chances of getting shortlisted.
                </p>
              </a>
              <a href="#competitive-platforms" className="group block bg-gray-800/70 p-6 rounded-3xl border border-gray-700 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4 text-brand-green">
                  <FaTools size={28} />
                  <h3 className="text-2xl font-semibold">3. Build</h3>
                </div>
                <p className="text-gray-300 leading-7">
                  Build real proof-of-work that strengthens your applications and helps you stand out. Practice coding and problem-solving on platforms like LeetCode, Codeforces, and GeeksforGeeks, while also contributing to projects through programs such as Google Summer of Code or the MLH Fellowship. Consistent hands-on learning demonstrates technical ability far better than certificates alone.
                </p>
              </a>
              <a href="#open-source-programs" className="group block bg-gray-800/70 p-6 rounded-3xl border border-gray-700 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4 text-brand-green">
                  <FaGithub size={28} />
                  <h3 className="text-2xl font-semibold">4. Showcase</h3>
                </div>
                <p className="text-gray-300 leading-7">
                  Showcase your skills, projects, achievements, and experiences in a professional way that recruiters can easily verify. Publish projects on GitHub, highlight hackathons and coding profiles, and use platforms like LinkedIn to share your work publicly. You can also leverage programs like AICTE Internship Portal, Generation India, or Amazon WoW to add credibility, mentorship, and industry-recognized experience to your profile.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Sections */}
      <section className="pb-20">
        <div className="container mx-auto px-6 space-y-16">
          {opportunitySections.map((section) => (
            <div
              key={section.title}
              id={
                section.title === "Core Job and Internship Platforms"
                  ? "core-platforms"
                  : section.title === "Competitive/Merit Based Platforms"
                  ? "competitive-platforms"
                  : "open-source-programs"
              }
              className="bg-gray-900/60 border border-gray-700 rounded-3xl p-8 shadow-2xl"
            >
              <h2 className="scroll-mt-28 text-3xl font-bold mb-10 text-brand-green">
                {section.title}
              </h2>

              <div className="grid lg:grid-cols-2 gap-8">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-gray-800 rounded-2xl overflow-hidden hover:scale-[1.02] transition duration-300 shadow-lg"
                  >
                    {/* Thumbnail */}
                    <div className="relative w-full h-32 md:h-36">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-4">
                        {item.name}
                      </h3>

                      <p className="text-gray-300 leading-7 mb-6">
                        {item.description}
                      </p>

                      <Link
                        href={item.url}
                        target="_blank"
                        className="inline-block bg-brand-green text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                      >
                        Visit Platform
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}