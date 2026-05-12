import Image from "next/image";
import { redirect } from "next/navigation";
import { FaUsers, FaRocket, FaEye, FaHandshake } from "react-icons/fa";
import { isAuthenticated } from "@/lib/auth";

export default async function AboutPage() {
  if (!(await isAuthenticated())) {
    redirect("/login?next=/about");
  }

  return (
    <>
      {/* About Hero */}
      <section className="bg-brand-blue py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">About Career Launchpad</h1>
          <p className="mt-4 text-lg md:text-xl text-blue-200 max-w-3xl mx-auto">
            Empowering the next generation of professionals through peer guidance and real-world insights.
          </p>
        </div>
      </section>

      {/* Brief Description */}
      <section className="py-20 bg-brand-dark-blue">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">What is Career Launchpad?</h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-12">
            Career Launchpad is a community-driven platform designed to bridge the gap between aspiring students and experienced professionals. 
            We connect beginners and job-seeking students with guidance from peers who have successfully navigated the challenges of internships, 
            job searches, and career transitions. Our platform serves as a launchpad for career growth, offering practical advice, 
            real experiences, and mentorship from those who have been in your shoes.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <FaUsers className="text-brand-teal text-4xl mb-4 mx-auto" />
              <h3 className="font-bold text-xl mb-2">Peer-to-Peer Learning</h3>
              <p className="text-gray-400">
                Learn from students who have recently secured internships and jobs, gaining insights that traditional resources can't provide.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <FaRocket className="text-brand-teal text-4xl mb-4 mx-auto" />
              <h3 className="font-bold text-xl mb-2">Practical Guidance</h3>
              <p className="text-gray-400">
                Access real-world strategies, interview tips, and career advice from those currently in the industry.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <FaHandshake className="text-brand-teal text-4xl mb-4 mx-auto" />
              <h3 className="font-bold text-xl mb-2">Community Support</h3>
              <p className="text-gray-400">
                Join a supportive network where experienced students help guide the next generation of professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1521737852577-684822b89691?q=80&w=2070&auto=format&fit=crop"
              alt="Students collaborating and learning together"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-brand-teal mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-8 text-lg">
              To create a supportive ecosystem where experienced students guide beginners and job-seekers through their career journeys. 
              We believe that the best career advice comes from those who have recently faced the same challenges and overcome them, 
              providing authentic, relatable guidance that traditional career services cannot match.
            </p>
            <h2 className="text-3xl font-bold text-brand-teal mb-4">Our Vision</h2>
            <p className="text-gray-300 text-lg">
              A world where every student has access to personalized career guidance from peers who understand their unique challenges. 
              We envision a future where the career launchpad becomes the go-to resource for students worldwide, 
              breaking down barriers and democratizing access to meaningful career opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">What Drives Us</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            Our platform is built on the principle that everyone deserves a fair shot at career success, 
            regardless of their background or resources.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaUsers size={40} className="mx-auto text-brand-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Community First</h3>
              <p className="text-gray-400">
                We prioritize building genuine connections between mentors and mentees within our student community.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaRocket size={40} className="mx-auto text-brand-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Actionable Insights</h3>
              <p className="text-gray-400">
                Every piece of advice is backed by real experiences and proven results from our community members.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaEye size={40} className="mx-auto text-brand-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Transparency</h3>
              <p className="text-gray-400">
                We believe in open sharing of experiences, challenges, and strategies to help everyone succeed.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaHandshake size={40} className="mx-auto text-brand-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Mutual Growth</h3>
              <p className="text-gray-400">
                As mentors share their knowledge, they continue to grow and develop their leadership skills.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
