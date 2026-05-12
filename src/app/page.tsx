import Image from "next/image";
import Button from "@/components/ui/Button";
import { isAuthenticated } from "@/lib/auth";
import Link from "next/link";
import {
  FaComments,
  FaAward,
  FaProjectDiagram,
  FaSearch,
} from "react-icons/fa";

export default async function HomePage() {
  const authed = await isAuthenticated();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-gradient pt-20 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Launch Your Career with Peer Guidance
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-200 max-w-3xl mx-auto">
            Connect with experienced students who&apos;ve successfully navigated internships and job searches.
            Get authentic advice, real insights, and practical strategies from those who&apos;ve been in your shoes.
          </p>
          {!authed && (
            <div className="mt-8 flex justify-center gap-4">
              <Button href="/signup" variant="cta" showArrow scroll={false}>
                Get Started
              </Button>
              <Button href="/login" variant="secondary" scroll={false}>
                Log in
              </Button>
            </div>
          )}
            <div className="mt-16 bg-white/10 backdrop-blur-md rounded-xl p-8 max-w-4xl mx-auto flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop"
              alt="Students mentoring and guiding each other"
              width={800}
              height={400}
              className="rounded-lg shadow-2xl mx-auto"
            />
            </div>
        </div>
      </section>

      {/* What is Career Launchpad? */}
      <section className="py-20 bg-brand-dark-blue">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            What is Career Launchpad?
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Career Launchpad is a peer-powered platform where experienced students guide beginners through their career journeys. 
            We connect you with mentors who&apos;ve recently secured internships and jobs, providing authentic insights that traditional
            career advice can&apos;t match. Our community believes the best guidance comes from those who&apos;ve faced the same challenges.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            {/* Card 1 */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <FaProjectDiagram className="text-brand-teal text-4xl mb-4" />
              <h3 className="font-bold text-xl mb-2">Peer Learning Paths</h3>
              <p className="text-gray-400">
                Structured guidance from students who&apos;ve successfully navigated internships and job searches, 
                sharing their real experiences and strategies.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <FaSearch className="text-brand-teal text-4xl mb-4" />
              <h3 className="font-bold text-xl mb-2">Curated Opportunities</h3>
              <p className="text-gray-400">
                Access to internships, jobs, and programs recommended by peers who&apos;ve participated, 
                with insights on application strategies and success tips.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <FaComments className="text-brand-teal text-4xl mb-4" />
              <h3 className="font-bold text-xl mb-2">Real Interview Experiences</h3>
              <p className="text-gray-400">
                Authentic interview preparation through shared experiences, mock interviews, 
                and tips from students who&apos;ve recently gone through the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Everything You Need to Succeed */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Three powerful pillars of peer-powered career guidance designed to accelerate your journey.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg text-left transform hover:-translate-y-2 transition-transform">
              <FaProjectDiagram size={40} className="text-brand-light-blue mb-4" />
              <h3 className="text-2xl font-bold mb-2">Peer Mentorship</h3>
              <p className="text-gray-400 mb-4">
                Connect with students who&apos;ve successfully navigated internships and jobs. 
                Get personalized guidance based on real experiences.
              </p>
              <Link
                href="/login"
                scroll={false}
                className="font-semibold text-brand-teal hover:underline"
              >
                Learn More &rarr;
              </Link>
            </div>
            <div className="bg-brand-light-blue p-8 rounded-lg text-left transform hover:-translate-y-2 transition-transform">
              <FaSearch size={40} className="text-white mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-white">Opportunity Discovery</h3>
              <p className="text-blue-100 mb-4">
                Explore internships, jobs, and programs through the lens of peer experiences. 
                Find opportunities that match your goals with insider insights.
              </p>
              <Link href="/login" scroll={false} className="font-semibold text-white hover:underline">
                Explore &rarr;
              </Link>
            </div>
            <div className="bg-brand-green/20 p-8 rounded-lg text-left transform hover:-translate-y-2 transition-transform">
              <FaAward size={40} className="text-brand-green mb-4" />
              <h3 className="text-2xl font-bold mb-2">Interview Preparation</h3>
              <p className="text-gray-400 mb-4">
                Practice with mock interviews and get feedback from peers who&apos;ve recently 
                aced their interviews. Learn from their successes and mistakes.
              </p>
              <Link href="/login" scroll={false} className="font-semibold text-brand-green hover:underline">
                Start Prep &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
