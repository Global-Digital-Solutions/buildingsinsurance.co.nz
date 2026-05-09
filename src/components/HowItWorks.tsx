'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Tell Us About Your Property',
    description:
      'Fill in a quick 2-minute form — property type, location, and the level of cover you need. That\'s it.',
    detail: 'Takes under 2 minutes',
    color: 'from-emerald-500 to-teal-400',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 9.75L12 3l9 6.75V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'We Do the Shopping for You',
    description:
      'Your hand-picked broker compares AMI, Tower, State, AA Insurance, Vero and NZI — finding the best cover at the sharpest price.',
    detail: 'Often saves up to 26%',
    color: 'from-sky-500 to-emerald-500',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Get the Right Cover — Done',
    description:
      'Choose the policy that suits you. Your broker handles the paperwork. No hard sell, no hidden fees, just great cover sorted.',
    detail: 'No obligation, ever',
    color: 'from-teal-400 to-emerald-600',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const headerObs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.2 }
    );
    if (headerRef.current) headerObs.observe(headerRef.current);

    const stepObs = stepRefs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setVisibleSteps((p) => new Set([...p, i])); },
        { threshold: 0.15 }
      );
      obs.observe(ref);
      return obs;
    });

    return () => {
      headerObs.disconnect();
      stepObs.forEach((o) => o?.disconnect());
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-28">

      {/* Background texture dots */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Glowing blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 lg:mb-20 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-4 py-1.5 text-sm font-semibold text-emerald-400 mb-4">
            Simple. Fast. No Fees.
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            From first click to full cover in three easy steps — your broker does the hard part.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative">

          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-emerald-500/40 via-sky-400/60 to-emerald-500/40 z-0" />

          {steps.map((step, i) => {
            const isVisible = visibleSteps.has(i);
            const slideDir = i === 0 ? '-translate-x-12' : i === 2 ? 'translate-x-12' : 'translate-y-8';

            return (
              <div
                key={step.number}
                ref={(el) => { stepRefs.current[i] = el; }}
                className={`relative z-10 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${slideDir}`
                }`}
                style={{ transitionDelay: isVisible ? `${i * 180}ms` : '0ms' }}
              >
                {/* Card */}
                <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-emerald-500/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-900/30">

                  {/* Big step number — background watermark */}
                  <div className={`absolute top-4 right-6 text-8xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-15 select-none leading-none`}>
                    {step.number}
                  </div>

                  {/* Icon circle */}
                  <div className={`relative mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg shadow-emerald-900/40 group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>

                  {/* Step pill */}
                  <div className={`mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${step.color} px-3 py-0.5`}>
                    <span className="text-xs font-bold text-white tracking-wider">STEP {step.number}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-5">
                    {step.description}
                  </p>

                  {/* Detail callout */}
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {step.detail}
                  </div>

                  {/* Mobile arrow */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden mt-6 flex justify-center">
                      <svg className="w-5 h-6 text-emerald-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-14 transition-all duration-700 delay-500 ${
            visibleSteps.size > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="#quote-form"
            className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-10 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-emerald-900/50 hover:shadow-emerald-900/70 text-lg"
          >
            Get My Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="mt-3 text-slate-500 text-sm">No obligation · No broker fees · Response within 24 hours</p>
        </div>

      </div>
    </section>
  );
}
