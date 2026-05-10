import Link from "next/link";
import Image from "next/image";

const opportunitySections = [
  {
    title: "Top Platforms for Freshers",
    items: [
      {
        name: "Unstop",
        url: "https://unstop.com",
        image: "/images/platforms/unstop.jpeg",
        description:
          "Unstop is one of the most popular platforms for students looking to participate in hackathons, coding competitions, quizzes, and hiring challenges. Many top companies use Unstop to recruit freshers through skill-based contests. It is especially useful for building your resume, networking with peers, and discovering internship opportunities.",
      },
      {
        name: "Cuvette",
        url: "https://www.cuvette.tech",
        image: "/images/platforms/cuvette.jpeg",
        description:
          "Cuvette focuses on helping Tier 2 and Tier 3 college students land software engineering roles. The platform provides placement preparation resources, mock interviews, and job opportunities specifically designed for beginners entering the tech industry. It is beginner-friendly and highly focused on practical hiring outcomes.",
      },
      {
        name: "Instahyre",
        url: "https://www.instahyre.com",
        image: "/images/platforms/instahyre.jpeg",
        description:
          "Instahyre is an AI-powered hiring platform that connects candidates directly with recruiters and startups. Unlike traditional job portals, it minimizes spam applications and provides curated opportunities based on your skills and experience. It is especially useful for software engineers and product roles.",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com",
        image: "/images/platforms/linkedin.jpeg",
        description:
          "LinkedIn is the world’s largest professional networking platform where students and professionals can discover jobs, internships, and networking opportunities. You can build your profile, connect with recruiters, follow companies, and showcase certifications and projects. Consistent networking on LinkedIn significantly improves visibility to employers.",
      },
      {
        name: "Naukri Campus",
        url: "https://www.naukri.com/campus",
        image: "/images/platforms/naukri.jpeg",
        description:
          "Naukri Campus is designed specifically for students and fresh graduates looking for entry-level jobs and off-campus drives. It provides aptitude tests, hiring assessments, and direct applications to fresher opportunities. The portal is widely used by Indian companies for mass recruitment.",
      },
      {
        name: "Wellfound",
        url: "https://wellfound.com",
        image: "/images/platforms/wellfound.jpeg",
        description:
          "Wellfound, formerly AngelList Talent, is one of the best platforms for startup jobs and internships. It allows students and professionals to apply directly to startups without unnecessary intermediaries. The platform is excellent for discovering remote roles, startup culture, and high-growth opportunities.",
      },
    ],
  },

  {
    title: "Inclusive & Diversity Programs",
    items: [
      {
        name: "Amazon WOW",
        url: "https://www.amazon.jobs/content/en/teams/university/wow",
        image: "/images/platforms/amazon.jpeg",
        description:
          "Amazon WOW is a mentorship and hiring initiative focused on empowering women in technology. Participants receive mentorship sessions, interview preparation guidance, networking opportunities, and potential interview shortlists at Amazon. It is one of the most respected diversity hiring programs in tech.",
      },
      {
        name: "Generation India",
        url: "https://india.generation.org",
        image: "/images/platforms/generationindia.jpeg",
        description:
          "Generation India offers free bootcamps and career support programs aimed at helping underserved and underprivileged youth build employable skills. The platform provides industry-relevant training, interview readiness, and placement support. It is highly impactful for students looking to enter the workforce with practical skills.",
      },
    ],
  },

  {
    title: "Proof-of-Work & Fellowships",
    items: [
      {
        name: "MLH Fellowship",
        url: "https://fellowship.mlh.io",
        image: "/images/platforms/mlhfellowship.jpeg",
        description:
          "The MLH Fellowship is a prestigious remote fellowship where developers collaborate on real-world open-source projects. Fellows gain hands-on engineering experience, mentorship from industry professionals, and exposure to global developer communities. It is considered a strong alternative to traditional internships.",
      },
      {
        name: "GSoC",
        url: "https://summerofcode.withgoogle.com",
        image: "/images/platforms/gsoc.jpeg",
        description:
          "Google Summer of Code (GSoC) is a globally recognized open-source program where students contribute to real software projects under experienced mentors. Selected students receive stipends while gaining valuable development experience and international exposure. It is highly respected in the software industry.",
      },
    ],
  },

  {
    title: "Government & Public Portals",
    items: [
      {
        name: "AICTE Internship Portal",
        url: "https://internship.aicte-india.org",
        image: "/images/platforms/aicte.jpeg",
        description:
          "The AICTE Internship Portal is the official internship platform supported by the Government of India for technical students. It provides internship opportunities from startups, corporations, and government organizations. Students can discover verified opportunities relevant to their academic background and skillset.",
      },
      {
        name: "NCS Portal",
        url: "https://www.ncs.gov.in",
        image: "/images/platforms/ncs.jpeg",
        description:
          "The National Career Service (NCS) Portal is a government-backed employment platform that connects job seekers with employers across India. It includes job listings, career counseling services, skill development resources, and employment support for multiple industries. It is especially useful for exploring public and private sector opportunities.",
      },
    ],
  },
];

export default function FindOpportunitiesPage() {
  return (
    <main className="min-h-screen bg-brand-blue text-white">
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

      {/* Opportunity Sections */}
      <section className="pb-20">
        <div className="container mx-auto px-6 space-y-16">
          {opportunitySections.map((section) => (
            <div
              key={section.title}
              className="bg-gray-900/60 border border-gray-700 rounded-3xl p-8 shadow-2xl"
            >
              <h2 className="text-3xl font-bold mb-10 text-brand-green">
                {section.title}
              </h2>

              <div className="grid lg:grid-cols-2 gap-8">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-gray-800 rounded-2xl overflow-hidden hover:scale-[1.02] transition duration-300 shadow-lg"
                  >
                    {/* Thumbnail */}
                    <div className="relative w-full h-64">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-top"
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