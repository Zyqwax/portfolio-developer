"use client";

import { motion } from "framer-motion";
import { technicalMetrics } from "@/config/metrics";

export default function TechnicalMetrics() {
  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Impact & Achievements
        </motion.h2>

        <div className="grid grid-cols-1 gap-12">
          {technicalMetrics.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-xl font-semibold mb-6 text-green-400">
                {section.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
                  >
                    <h4 className="text-lg font-semibold text-gray-300">
                      {item.title}
                    </h4>
                    <ul className="mt-2 space-y-2 text-gray-400">
                      {item.points.map((point, pointIndex) => (
                        <li key={pointIndex}>• {point}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
