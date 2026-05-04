// app/about/page.tsx
import Image from "next/image";
import { FaUniversalAccess, FaBullseye, FaChartLine, FaUsers } from 'react-icons/fa';

const teamMembers = [
  { name: 'Priya Sharma', role: 'Founder & CEO', bio: 'Former Google exec with 12+ years of experience in tech hiring and talent development.', initials: 'PS' },
  { name: 'Marcus Chen', role: 'Head of Curriculum', bio: 'Ex-McKinsey consultant specializing in career coaching and organizational development.', initials: 'MC' },
  { name: 'Aisha Okonkwo', role: 'Lead Interview Coach', bio: 'Veteran recruiter from both Amazon and Meta, helping 500+ candidates land top roles.', initials: 'AO' },
];

export default function AboutPage() {
  return (
    <>
      {/* About Hero */}
      <section className="bg-brand-blue py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">About Us</h1>
          <p className="mt-4 text-lg md:text-xl text-blue-200 max-w-3xl mx-auto">
            We're on a mission to democratize career success — empowering every student to prepare, apply, and thrive.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image 
              src="https://images.unsplash.com/photo-1521737852577-684822b89691?q=80&w=2070&auto=format&fit=crop" 
              alt="Diverse team working together" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-brand-teal mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-6 text-lg">
              To provide every job seeker with a clear, structured, and actionable path to a great career, regardless of their background. We remove the guesswork from career growth.
            </p>
            <h2 className="text-3xl font-bold text-brand-teal mb-4">Our Vision</h2>
            <p className="text-gray-300 text-lg">
              A world where talent — not connections — determines career success. We envision a future where every aspiring professional has access to the tools, knowledge, and opportunities needed to reach their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">What We Stand For</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Our core values shape every decision we make and every feature we build.
          </p>
          <div className="mt-12 grid md:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaUniversalAccess size={40} className="mx-auto text-brand-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-gray-400">We believe world-class career guidance should be available to everyone.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaBullseye size={40} className="mx-auto text-brand-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Clarity</h3>
              <p className="text-gray-400">We cut the noise to provide precise and clear, actionable advice.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaChartLine size={40} className="mx-auto text-brand-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Growth</h3>
              <p className="text-gray-400">We are committed to your continuous growth — technically, professionally, and personally.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaUsers size={40} className="mx-auto text-brand-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-400">We foster a supportive community where learners uplift one another.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Meet the Team</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Passionate people dedicated to making your career success inevitable.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-brand-teal flex items-center justify-center text-brand-dark-blue text-2xl font-bold mr-4">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-brand-teal">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}