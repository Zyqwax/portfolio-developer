"use client";

import { contactConfig } from "@/config/contact";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-800 bg-black/50"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="font-mono">
              <p className="text-green-500 mb-2">$ contact --info</p>
              <h2 className="text-3xl font-bold mb-8 text-gray-200">
                Let&apos;s Connect
              </h2>
              <p className="text-green-500 mb-2">$ location --current</p>
              <div className="flex items-center gap-2 text-gray-300">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{contactConfig.location}</span>
              </div>
              <p className="text-green-500 mt-8 mb-2">$ contact --email</p>
              <motion.a
                href={`mailto:${contactConfig.email}`}
                whileHover={{ scale: 1.02 }}
                className="inline-block px-6 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors"
              >
                {contactConfig.email}
              </motion.a>
              <p className="text-green-500 mt-8 mb-2">$ cat resume.pdf</p>
              <motion.a
                href="/path-to-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                </svg>
                <span>Download Resume</span>
              </motion.a>
              <p className="text-green-500 mt-8 mb-4">$ ls ./social-links</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {contactConfig.socialLinks.map((social, id) => (
                  <motion.a
                    key={id}
                    href={social.url}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
                  >
                    <div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
                      <social.icon />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-200">
                        {social.label}
                      </p>
                      <p className="text-sm text-gray-400">{social.username}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
