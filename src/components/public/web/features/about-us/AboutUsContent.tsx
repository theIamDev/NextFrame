"use client";

import { useEffect } from "react";
// import Container from "@/components/public/web/ui/Container";

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
      className="max-w-[1100px] mx-auto px-5 py-12 bg-[radial-gradient(1200px_600px_at_-10%_-20%,#e0e7ff_0%,transparent_40%),radial-gradient(900px_400px_at_120%_10%,#d1fae5_0%,transparent_45%),#f7f8fc]"
      aria-labelledby="about-title"
    >
      <div
        className="grid lg:grid-cols-[1.05fr,.95fr] gap-10 bg-white rounded-[18px] shadow-[0_10px_30px_rgba(2,8,23,0.06),0_3px_8px_rgba(2,8,23,0.05)] p-7 relative overflow-hidden"
        data-animate
      >
        {/* Decorative corner */}
        <div className="absolute right-[-60px] top-[-60px] w-[200px] h-[200px] rotate-[25deg] bg-[radial-gradient(closest-side,rgba(37,99,235,0.08),transparent_70%)]"></div>

        {/* Left: Image */}
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-[16px] overflow-hidden shadow-[0_10px_30px_rgba(2,8,23,0.06),0_3px_8px_rgba(2,8,23,0.05)] bg-[#eef2ff]">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop"
              alt="Our team collaborating at the studio"
              loading="lazy"
              width="800"
              height="600"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating chip */}
          <div className="absolute left-[14px] bottom-[14px] bg-white/90 backdrop-saturate-[1.4] backdrop-blur-[6px] rounded-full px-3 py-2 flex items-center gap-2 text-sm text-[#475569] shadow-[0_6px_20px_rgba(15,23,42,0.12)]">
            <span className="w-[18px] h-[18px] inline-block">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-full h-full"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="1.6" />
                <path
                  d="M9 12.5l2 2 4-4"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Trusted by <strong>&nbsp;1,200+ clients</strong>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h1
            id="about-title"
            className="mt-[6px] mb-[10px] text-[clamp(24px,3vw,34px)] tracking-[0.2px] font-bold"
          >
            About Us
          </h1>
          <p className="text-[#475569] text-[1.05rem] mb-[18px]">
            We blend design, engineering, and empathy to ship products people
            love. From first sketch to final launch, our team focuses on
            clarity, speed, and measurable impact.
          </p>

          {/* Points */}
          <div className="grid gap-[10px] my-[14px] mb-[22px]">
            {[
              "Outcome-driven processes with transparent roadmaps.",
              "Human-centered design and accessibility by default.",
              "Full-stack delivery: strategy → UX → development → support.",
            ].map((point, i) => (
              <div
                key={i}
                className="flex gap-[10px] items-start text-[#0b1220] opacity-0 translate-y-[14px] transition-all duration-500"
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
                  className="flex-shrink-0 w-5 h-5 mt-[2px]"
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
          <div className="flex flex-wrap gap-3 mt-[6px]">
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
          <div className="flex flex-wrap gap-[22px] mt-[18px] text-[#475569]">
            {[
              ["10+ yrs", "experience"],
              ["1k+", "projects shipped"],
              ["98%", "satisfaction rate"],
            ].map(([num, label], i) => (
              <div key={i} className="min-w-[110px]">
                <span className="block text-[1.25rem] font-bold text-[#0f172a]">
                  {num}
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-[14px] mt-[26px]">
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
            className="bg-[#f8fafc] border border-[#eef2f7] rounded-[14px] px-3 py-[10px] flex items-center gap-[10px] justify-center transition-all hover:-translate-y-[2px] hover:shadow-[0_6px_18px_rgba(2,8,23,0.06)] opacity-0 translate-y-[14px] duration-500"
            style={{ transitionDelay: `${i * 0.06}s` }}
            data-animate
          >
            <span className="w-5 h-5 inline-block text-[#0f172a]">
              {/* Replace with actual SVG for each badge */}
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
      <div className="flex flex-wrap gap-[26px] justify-center mt-[34px]">
        {["TechDaily", "ProductHub", "CodeTalk", "DesignWire"].map(
          (logo, i) => (
            <span
              key={i}
              className="px-3 py-2 rounded-[10px] border border-dashed border-[#e5e7eb] text-[#64748b] bg-white font-semibold tracking-[0.5px] opacity-90"
            >
              {logo}
            </span>
          )
        )}
      </div>
    </section>
  );
}
