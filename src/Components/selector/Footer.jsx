import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
function Footer() {
  return (
    <footer className="bg-[#1c1c24] text-gray-400   px-8 py-8 mt-10">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="font-orbitron text-3xl text-red-600 italic">
            TelemetriX
          </h1>

          <p className="text-gray-400 mt-2 text-lg max-w-sm">
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

      <div className="mt-20">
        <h1 className="text-5xl font-extrabold ">The Official F1</h1>
        <div className="text-4xl mt-5">
          <a
            href="https://www.youtube.com/F1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>

          <a
            href="https://www.instagram.com/f1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a href="https://x.com/f1" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
      <div className="m-10 mb-5 flex justify-evenly align-middle ">
        <Link
          to="https://www.formula1.com/"
          className="bg-[#c2c4f5] text-black rounded-2xl px-6 py-5 flex justify-between items-center w-50 hover:scale-105 transition"
        >
          <h2 className="font-medium text-sm uppercase">F1.com</h2>

          <ExternalLink size={20} />
        </Link>

        <Link
          to="https://www.fiaformula2.com/"
          className="bg-[#c2c4f5] text-black rounded-2xl px-6 py-5 flex justify-between items-center min-w-50 hover:scale-105 transition"
        >
          <h2 className="font-medium text-sm uppercase">FIA F2.com</h2>

          <ExternalLink size={20} />
        </Link>

        <Link
          to="https://www.fiaformula3.com/"
          className="bg-[#c2c4f5] text-black rounded-2xl px-6 py-5 flex justify-between items-center min-w-50 hover:scale-105 transition"
        >
          <h2 className="font-medium text-sm uppercase">FIA F3.com</h2>

          <ExternalLink size={20} />
        </Link>

        <Link
          to="https://www.f1academy.com/"
          className="bg-[#c2c4f5] text-black rounded-2xl px-6 py-5 flex justify-between items-center min-w-50 hover:scale-105 transition"
        >
          <h2 className="font-medium text-sm uppercase">F1 Academy</h2>

          <ExternalLink size={20} />
        </Link>

        <Link
          to="https://www.formula1.com/en/page/2026-f1-regulations"
          className="bg-[#c2c4f5] text-black rounded-2xl px-6 py-5 flex justify-between items-center min-w-60 hover:scale-105 transition"
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
