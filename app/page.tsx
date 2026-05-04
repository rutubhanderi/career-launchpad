// app/page.tsx
import Image from "next/image";
import Button from "@/components/ui/Button";
import { FaCheckCircle, FaUsers, FaChartLine, FaProjectDiagram, FaSearch, FaComments, FaAward } from "react-icons/fa";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-gradient pt-20 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Your Roadmap to a Fulfilling Career
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-200 max-w-3xl mx-auto">
            We provide in-demand skills, direct access to top job opportunities, and expert guidance to help students from all backgrounds launch successful careers. Your journey starts here.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="#" variant="cta" showArrow>Start Your Journey</Button>
            <Button href="/about" variant="secondary">Learn More</Button>
          </div>
          <div className="mt-16 bg-white/10 backdrop-blur-md rounded-xl p-8 max-w-4xl mx-auto">
             <Image 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop" 
                alt="Students collaborating" 
                width={800} 
                height={400} 
                className="rounded-lg shadow-2xl"
              />
          </div>
        </div>
      </section>

      {/* What is Career Launchpad? */}
      <section className="py-20 bg-brand-dark-blue">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">What is Career Launchpad?</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Career Launchpad is a comprehensive career development platform designed to guide you from learning to landing your dream job. We believe talent is everywhere, but opportunity is not. We're here to change that.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            {/* Card 1 */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <FaProjectDiagram className="text-brand-teal text-4xl mb-4" />
              <h3 className="font-bold text-xl mb-2">Structured Learning Path</h3>
              <p className="text-gray-400">An organized curriculum covering everything from foundational skills to advanced interview techniques.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <FaSearch className="text-brand-teal text-4xl mb-4" />
              <h3 className="font-bold text-xl mb-2">Real Opportunity Listings</h3>
              <p className="text-gray-400">Curated jobs from partner companies, filtered to match your profile and career aspirations.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <FaComments className="text-brand-teal text-4xl mb-4" />
              <h3 className="font-bold text-xl mb-2">Expert Interview Strategies</h3>
              <p className="text-gray-400">Actionable strategies and behavioral frameworks crafted by seasoned industry professionals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Everything You Need to Succeed */}
      <section className="py-20 bg-gray-900/50">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Everything You Need to Succeed</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
              Three powerful pillars designed to take your career to the next level.
            </p>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-lg text-left transform hover:-translate-y-2 transition-transform">
                <FaProjectDiagram size={40} className="text-brand-light-blue mb-4"/>
                <h3 className="text-2xl font-bold mb-2">Structured Learning</h3>
                <p className="text-gray-400 mb-4">A step-by-step curriculum designed by industry veterans to make you job-ready.</p>
                <a href="#" className="font-semibold text-brand-teal hover:underline">Explore &rarr;</a>
              </div>
              <div className="bg-brand-light-blue p-8 rounded-lg text-left transform hover:-translate-y-2 transition-transform">
                <FaSearch size={40} className="text-white mb-4"/>
                <h3 className="text-2xl font-bold mb-2 text-white">Real Opportunities</h3>
                <p className="text-blue-100 mb-4">Access exclusive job listings matched to your skill set. Skip the noise, find your fit.</p>
                <a href="#" className="font-semibold text-white hover:underline">Explore &rarr;</a>
              </div>
              <div className="bg-brand-green/20 p-8 rounded-lg text-left transform hover:-translate-y-2 transition-transform">
                <FaAward size={40} className="text-brand-green mb-4"/>
                <h3 className="text-2xl font-bold mb-2">Expert Interview Coaching</h3>
                <p className="text-gray-400 mb-4">Get insider tips, mock interviews, and personalized feedback to ace any interview.</p>
                <a href="#" className="font-semibold text-brand-green hover:underline">Explore &rarr;</a>
              </div>
            </div>
         </div>
      </section>
      
      
    </>
  );
}