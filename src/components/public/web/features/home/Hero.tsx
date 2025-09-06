"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image with infinite zoom effect */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute inset-0 z-0"
        aria-hidden
      >
        <Image
          src="/hero/hero.jpg" // Make sure this image exists in public/hero/
          alt="Hero Background"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>
    </section>
  );
}
