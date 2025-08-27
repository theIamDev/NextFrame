"use client";

import { useEffect } from "react";

export default function AboutUsContent() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-animate]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
  }, []);

  return (
    <section
      className="flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-10 py-12 bg-[radial-gradient(1200px_600px_at_-10%_-20%,#e0e7ff_0%,transparent_40%),radial-gradient(900px_400px_at_120%_10%,#d1fae5_0%,transparent_45%),#f7f8fc]"
      aria-labelledby="about-title"
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-[1.05fr,.95fr] gap-10 bg-white rounded-[18px] shadow-[0_10px_30px_rgba(2,8,23,0.06),0_3px_8px_rgba(2,8,23,0.05)] p-6 sm:p-8 relative overflow-hidden max-w-[1100px] w-full"
        data-animate
      >
        {/* Decorative corner */}
        <div className="absolute right-[-60px] top-[-60px] w-[200px] h-[200px] rotate-[25deg] bg-[radial-gradient(closest-side,rgba(37,99,235,0.08),transparent_70%)] pointer-events-none"></div>

        {/* Trusted badge - top-right */}
        <img
          src="/icons/trusted2.png"
          alt="Trusted by clients"
          className="absolute top-4 right-4 h-[45px] sm:h-[50px] lg:h-[55px] w-auto z-20"
        />

        {/* Left Column: House image */}
        <div className="flex items-center justify-center">
          <img
            src="/icons/house.png"
            alt="House Icon"
            className="w-full max-w-[300px] sm:max-w-[320px] md:max-w-[350px] h-auto object-contain"
          />
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1
            id="about-title"
            className="mt-1 mb-3 text-[clamp(22px,5vw,34px)] tracking-[0.2px] font-bold"
          >
            About Us
          </h1>
          <p className="text-[#475569] text-[1rem] sm:text-[1.05rem] mb-5">
            <strong>Born from a Vision, Built on Trust</strong>
            <br />
            In today's world, locating a home is not solely about surveying
            listings — it is about finding a home where your life begins.
            Whether you are looking for your first apartment, family home, or
            investment property, your journey deserves transparency, clarity and
            confidence.
            <br />
            In 2022, seasoned real estate expert Ujjawal Sharma began rethinking
            how people perceive property buying and renting in India. What
            started as a recruitment firm has become something far greater — a
            movement. A real estate company based in Kolkata that understands
            and believes that home is not a place, but a feeling.
          </p>

          {/* Points */}
          <div className="grid gap-3 my-4 mb-6">
            {[
              "Outcome-driven processes with transparent roadmaps.",
              "Human-centered design and accessibility by default.",
              "Full-stack delivery: strategy → UX → development → support.",
            ].map((point, i) => (
              <div
                key={i}
                className="flex gap-3 items-start text-[#0b1220] opacity-0 translate-y-[14px] transition-all duration-500"
                style={{ transitionDelay: `${i * 0.06}s` }}
                data-animate
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 mt-[2px] flex-shrink-0"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <div>
                  <strong>{point.split(" ")[0]}</strong>{" "}
                  {point.replace(point.split(" ")[0], "")}
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mt-2 justify-center lg:justify-start">
            <a
              href="#contact"
              className="px-4 py-3 rounded-xl font-semibold bg-[#2563eb] text-white shadow-[0_8px_20px_rgba(37,99,235,0.15)] hover:bg-[#1d4ed8] hover:-translate-y-[1px] transition"
            >
              Get in Touch
            </a>
            <a
              href="#work"
              className="px-4 py-3 rounded-xl font-semibold bg-[#f1f5f9] text-[#0b1220] hover:bg-[#e2e8f0] transition"
            >
              See Our Work
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-5 mt-5 text-[#475569] justify-center lg:justify-start">
            {[
              ["10+ yrs", "experience"],
              ["1k+", "projects shipped"],
              ["98%", "satisfaction rate"],
            ].map(([num, label], i) => (
              <div key={i} className="min-w-[100px]">
                <span className="block text-lg sm:text-xl font-bold text-[#0f172a]">
                  {num}
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 max-w-[1100px] w-full">
        {[
          {
            icon: (
              <>
                <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
                <path
                  d="M9 12l2 2 4-4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            ),
            label: "ISO 9001 Certified",
          },
          { label: "SSL Secured" },
          { label: "4.9/5 Reviews" },
          { label: "Award-Winning Team" },
        ].map((badge, i) => (
          <div
            key={i}
            className="bg-[#f8fafc] border border-[#eef2f7] rounded-[14px] px-4 py-3 flex items-center gap-3 justify-center transition-all hover:-translate-y-[2px] hover:shadow-[0_6px_18px_rgba(2,8,23,0.06)] opacity-0 translate-y-[14px] duration-500"
            style={{ transitionDelay: `${i * 0.06}s` }}
            data-animate
          >
            <span className="w-5 h-5 inline-block text-[#0f172a]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="w-full h-full"
              >
                {badge.icon || <circle cx="12" cy="12" r="10" />}
              </svg>
            </span>
            <span className="font-semibold text-[0.95rem] text-[#0f172a]">
              {badge.label}
            </span>
          </div>
        ))}
      </div>

      {/* Logos */}
      <div className="flex flex-wrap gap-6 justify-center mt-10 max-w-[1100px] w-full">
        {["TechDaily", "ProductHub", "CodeTalk", "DesignWire"].map(
          (logo, i) => (
            <span
              key={i}
              className="px-3 py-2 rounded-[10px] border border-dashed border-[#e5e7eb] text-[#64748b] bg-white font-semibold tracking-[0.5px] opacity-90 text-sm sm:text-base"
            >
              {logo}
            </span>
          )
        )}
      </div>
    </section>
  );
}
