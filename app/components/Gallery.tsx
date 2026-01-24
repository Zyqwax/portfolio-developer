"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";

const galleryImages = [
  {
    src: "/enes-samed-gozlu-1.png",
    alt: "Enes Samed Gözlü - Photo 1",
    name: "Enes Samed Gözlü",
    url: "https://sametgozlu.dev/enes-samed-gozlu-1.png",
  },
  {
    src: "/enes-samed-gozlu-2.png",
    alt: "Enes Samed Gözlü - Photo 2",
    name: "Enes Samed Gözlü",
    url: "https://sametgozlu.dev/enes-samed-gozlu-2.png",
  },
  {
    src: "/enes-samed-gozlu-3.png",
    alt: "Enes Samed Gözlü - Photo 3",
    name: "Enes Samed Gözlü",
    url: "https://sametgozlu.dev/enes-samed-gozlu-3.png",
  },
];

export default function Gallery() {
  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: galleryImages.map((image) => image.url),
    creator: {
      "@type": "Person",
      name: "Enes Samed Gözlü",
    },
    creditText: "Enes Samed Gözlü",
    copyrightNotice: "© 2024 Enes Samed Gözlü",
    license: "https://creativecommons.org/licenses/by/4.0/",
    acquireLicensePage: "https://sametgozlu.dev/#contact",
  };

  return (
    <section className="py-20 px-4">
      <Head>
        <script type="application/ld+json">{JSON.stringify(imageSchema)}</script>
      </Head>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Gallery
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800 cursor-pointer transition-transform duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
