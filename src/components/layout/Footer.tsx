import Link from "next/link";
import { FaRocket, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 text-2xl font-bold">
              <FaRocket className="text-brand-teal" />
              <span>Career Launchpad</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Your complete career development platform, built to level the
              playing field and unlock opportunities for every student.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Skill Building
                </Link>
              </li>
              <li>
                <Link href="/find-opportunities" className="text-gray-400 hover:text-white">
                  Find Opportunities
                </Link>
              </li>
              <li>
                <Link href="/interview-prep" className="text-gray-400 hover:text-white">
                  Interview Prep
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Follow Us</h3>
            <p className="text-gray-400 mb-4">
              Stay connected for the latest career tips and job opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
