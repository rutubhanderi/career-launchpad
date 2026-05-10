"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import {
  FaLaptopCode,
  FaRegComments,
  FaRegFileAlt,
  FaUsersCog,
  FaChevronDown,
  FaChevronUp,
  FaCheckSquare,
} from "react-icons/fa";

const faqItems = [
  {
    q: "Tell me about yourself and why you are applying for this role.",
    a: "Start with a brief professional summary (2-3 sentences), then highlight your most relevant experience, and close with why this specific role interests you. Keep it under 2 minutes and practice out loud.",
  },
  {
    q: "Describe a time you faced a significant challenge at work. How did you handle it?",
    a: "Use the STAR method: Situation (context), Task (your responsibility), Action (what you did), and Result (the positive outcome). Focus on your specific actions and the measurable impact.",
  },
  {
    q: "What is your greatest strength and how does it help you in your work?",
    a: "Choose a real strength relevant to the job. Provide a specific example of how you've used that strength to achieve a positive result in a previous role.",
  },
  {
    q: "Where do you see yourself in 5 years?",
    a: "Show ambition and a desire for growth that aligns with the company's trajectory. Mention skills you want to develop and how this role is a crucial step in that journey.",
  },
];

const AccordionItem = ({ q, a }: { q: string; a: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4 px-2"
      >
        <span className="text-lg font-medium">{q}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-800/50 rounded-b-lg">
          <p className="text-gray-300">{a}</p>
        </div>
      )}
    </div>
  );
};

export default function InterviewPrepPage() {
  return (
    <>
      {/* Prep Hero */}
      <section className="bg-brand-blue py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">Ace Your Interview with Peer Insights</h1>
          <p className="mt-4 text-lg md:text-xl text-blue-200 max-w-3xl mx-auto">
            Learn from students who've recently nailed their interviews. Get authentic tips, 
            real experiences, and practice sessions guided by those who've been through it all.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="#" variant="cta">
              Start Practice
            </Button>
            <Button href="#" variant="secondary">
              View Experiences
            </Button>
          </div>
        </div>
      </section>

      {/* Prep Tracks */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-2">Choose Your Prep Track</h2>
          <p className="text-gray-400 mb-12">
            Learn from peer experiences and practice with fellow students who've recently succeeded.
          </p>
          <div className="grid md:grid-cols-4 gap-8 text-left">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-brand-teal transition">
              <FaLaptopCode size={30} className="mb-4 text-brand-teal" />
              <h3 className="text-xl font-bold mb-2">Technical Interviews</h3>
              <p className="text-gray-400 mb-4">
                Master coding challenges with insights from peers who've cracked technical rounds at top companies.
              </p>
              <a href="#" className="font-semibold text-brand-teal">
                Start Prep &rarr;
              </a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-brand-teal transition">
              <FaRegComments size={30} className="mb-4 text-brand-teal" />
              <h3 className="text-xl font-bold mb-2">Behavioral Interviews</h3>
              <p className="text-gray-400 mb-4">
                Learn storytelling techniques from students who've shared their successful STAR method experiences.
              </p>
              <a href="#" className="font-semibold text-brand-teal">
                Start Prep &rarr;
              </a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-brand-teal transition">
              <FaRegFileAlt size={30} className="mb-4 text-brand-teal" />
              <h3 className="text-xl font-bold mb-2">Peer Mock Interviews</h3>
              <p className="text-gray-400 mb-4">
                Practice with students who've recently interviewed at your target companies and received offers.
              </p>
              <a href="#" className="font-semibold text-brand-teal">
                Find Partner &rarr;
              </a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-brand-teal transition">
              <FaUsersCog size={30} className="mb-4 text-brand-teal" />
              <h3 className="text-xl font-bold mb-2">HR & Negotiation</h3>
              <p className="text-gray-400 mb-4">
                Get salary negotiation tips and culture-fit advice from peers who've successfully navigated HR rounds.
              </p>
              <a href="#" className="font-semibold text-brand-teal">
                Start Prep &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Questions */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Sample Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Interview Day Checklist</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaCheckSquare className="text-brand-green mt-1 mr-3 flex-shrink-0" />
                Research the company and your interviewers.
              </li>
              <li className="flex items-start">
                <FaCheckSquare className="text-brand-green mt-1 mr-3 flex-shrink-0" />
                Prepare 3-5 strong stories using the STAR method.
              </li>
              <li className="flex items-start">
                <FaCheckSquare className="text-brand-green mt-1 mr-3 flex-shrink-0" />
                Prepare 3 insightful questions to ask the interviewer.
              </li>
              <li className="flex items-start">
                <FaCheckSquare className="text-brand-green mt-1 mr-3 flex-shrink-0" />
                Arrive 10 minutes early or join the call 2 minutes before.
              </li>
            </ul>
          </div>
          <div className="bg-brand-green/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-brand-green">Top Interview Tips</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Listen actively and pause before answering.</li>
              <li>
                Keep answers concise — aim for 1-2 minutes per response unless asked for more detail.
              </li>
              <li>
                Ask thoughtful questions at the end. It demonstrates genuine interest.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
