import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer className="bg-[#1c1c24] text-gray-400 px-5 md:px-8 py-8 mt-10">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div>
          <h1 className="hidden lg:block font-orbitron text-3xl text-red-600 italic">
            TelemetriX
          </h1>

          <p className="hidden lg:block font-orbitron text-3xl text-red-600 italic">
            Formula 1 race intelligence platform with live standings, schedules,
            analytics and race insights.
          </p>
        </div>

        <div>
          <h2 className="font-semibold mb-3">Quick Links</h2>

          <ul className="space-y-2 text-gray-400 flex gap-3">
            <li>
              <Link to="/schedule" className="hover:text-red-500">
                Schedule
              </Link>
            </li>

            <li>
              <Link to="/standings" className="hover:text-red-500">
                Standings
              </Link>
            </li>

            <li>
              <Link to="/results" className="hover:text-red-500">
                Results
              </Link>
            </li>

            <li>
              <Link to="/profiles" className="hover:text-red-500">
                Profiles
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-4xl font-extrabold ">The Official F1</h1>
        <div className="flex gap-6 text-3xl md:text-4xl mt-5">
          <a
            href="https://www.youtube.com/F1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>

          <a
            href="https://www.instagram.com/f1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a href="https://x.com/f1" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-4 ">
        <Link
          to="https://www.formula1.com/"
          className="bg-[#c2c4f5] text-black rounded-2xl px-6 py-5 flex justify-between items-center w-full sm:w-56 hover:scale-105 transition"
        >
          <h2 className="font-medium text-sm uppercase">F1.com</h2>

          <ExternalLink size={20} />
        </Link>

        <Link
          to="https://www.fiaformula2.com/"
          className="bg-[#c2c4f5] text-black rounded-2xl px-6 py-5 flex justify-between items-center w-full sm:w-56 hover:scale-105 transition"
        >
          <h2 className="font-medium text-sm uppercase">FIA F2.com</h2>

          <ExternalLink size={20} />
        </Link>

        <Link
          to="https://www.fiaformula3.com/"
          className="bg-[#c2c4f5] text-black rounded-2xl px-6 py-5 flex justify-between items-center w-full sm:w-56 hover:scale-105 transition"
        >
          <h2 className="font-medium text-sm uppercase">FIA F3.com</h2>

          <ExternalLink size={20} />
        </Link>

        <Link
          to="https://www.f1academy.com/"
          className="bg-[#c2c4f5] text-black rounded-2xl px-6 py-5 flex justify-between items-center w-full sm:w-56 hover:scale-105 transition"
        >
          <h2 className="font-medium text-sm uppercase">F1 Academy</h2>

          <ExternalLink size={20} />
        </Link>

        <Link
          to="https://www.formula1.com/en/page/2026-f1-regulations"
          className="bg-[#c2c4f5] text-black rounded-2xl px-6 py-5 flex justify-between items-center w-full sm:w-64 hover:scale-105 transition"
        >
          <h2 className="font-medium text-sm uppercase">2026 Regulations</h2>

          <ExternalLink size={20} />
        </Link>
      </div>
      <div className="border-t border-zinc-800 mt-6 pt-4 text-center text-gray-500 text-sm">
        © 2026 TelemetriX | Srikar Chaganti - all rights reserved
      </div>
    </footer>
  );
}

export default Footer;
