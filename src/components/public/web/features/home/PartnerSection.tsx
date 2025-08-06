'use client';

import React from 'react';

const partners = [
  { name: 'Next.js', src: '/icons/next.js.svg' },
  { name: 'React', src: '/icons/react.svg' },
  { name: 'JavaScript', src: '/icons/javascript.svg' },
  { name: 'Tailwind CSS', src: '/icons/tailwind css.svg' },
  { name: 'HTML5', src: '/icons/html5.svg' },
  { name: 'CSS3', src: '/icons/css3.svg' },
  { name: 'Django', src: '/icons/django-svgrepo-com.svg' },
  { name: 'Spring Boot', src: '/icons/spring-icon-svgrepo-com.svg' },
  { name: 'Node.js', src: '/icons/node.js.svg' },
  { name: 'Microsoft Azure', src: '/icons/azure-icon-svgrepo-com.svg' },
  { name: 'Amazon Web Services', src: '/icons/aws-svgrepo-com.svg' },
  { name: 'GitHub', src: '/icons/github-svgrepo-com.svg' },
  { name: 'Docker', src: '/icons/docker.svg' },
];

export default function PartnerSection() {
  // Duplicate array for smooth looping
  const scrollingPartners = partners.concat(partners);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Partners</h2>

        {/* Container with overflow hidden */}
        <div className="overflow-hidden">
          {/* Inner flex container that scrolls */}
          <div className="flex w-max animate-scroll">
            {scrollingPartners.map((partner, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-24 h-24 flex items-center justify-center"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="max-h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
