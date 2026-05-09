'use client';

import { useEffect, useRef, useState } from 'react';
import { Shield, Building2, DollarSign, Clock, Landmark, TrendingUp } from 'lucide-react';

interface Stat {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
  icon: React.ElementType;
  isSpecial?: boolean;
}

export default function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState<Record<number, string>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    { value: '26', label: 'Avg. Premium Saving', suffix: '%', prefix: 'Up to ', icon: TrendingUp },
    { value: '6', label: 'Major NZ Insurers', suffix: '', prefix: '', icon: Building2 },
    { value: '0', label: 'Broker Fees', suffix: '', prefix: '$', icon: DollarSign },
    { value: '95', label: 'NZ Claims Paid', suffix: '%+', prefix: '', icon: Shield },
    { value: '300', label: 'EQC Residential Cap', suffix: 'K', prefix: '$', icon: Landmark },
    { value: '24', label: 'Hour Response', suffix: 'hr', prefix: '', icon: Clock },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateStats();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const animateStats = () => {
    stats.forEach((stat, index) => {
      if (stat.isSpecial) {
        // For non-numeric values like "24/7", just reveal after delay
        setTimeout(() => {
          setAnimatedStats((prev) => ({
            ...prev,
            [index]: stat.value,
          }));
        }, index * 150);
        return;
      }

      const target = parseInt(stat.value.replace(/[^0-9]/g, ''), 10);
      if (isNaN(target)) return;

      const delay = index * 150;

      setTimeout(() => {
        const startTime = Date.now();
        const duration = 1200;

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out expo for snappier feel
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const current = Math.floor(target * easeProgress);

          setAnimatedStats((prev) => ({
            ...prev,
            [index]: current.toLocaleString(),
          }));

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setAnimatedStats((prev) => ({
              ...prev,
              [index]: target.toLocaleString(),
            }));
          }
        };

        requestAnimationFrame(animate);
      }, delay);
    });
  };

  return (
    <div ref={containerRef} className="bg-gradient-to-br from-slate-50 via-emerald-50/50 to-sky-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`
                  relative group text-center p-6 rounded-2xl
                  bg-white border-2 border-emerald-100
                  shadow-sm hover:shadow-lg hover:border-emerald-300
                  transition-all duration-500 ease-out
                  ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                  }
                `}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                {/* Icon */}
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Value */}
                <div className="flex flex-col items-center mb-1">
                  {stat.prefix && stat.prefix.length > 2 && (
                    <span className="text-xs font-semibold text-emerald-500 uppercase tracking-wide mb-0.5">
                      {stat.prefix}
                    </span>
                  )}
                  <div className="flex items-baseline justify-center gap-0.5">
                    {stat.prefix && stat.prefix.length <= 2 && (
                      <span className="text-2xl lg:text-3xl font-bold text-emerald-600">
                        {stat.prefix}
                      </span>
                    )}
                    <span className="text-3xl lg:text-4xl font-extrabold text-emerald-600 tabular-nums tracking-tight">
                      {animatedStats[index] ?? (stat.isSpecial ? '' : '0')}
                    </span>
                    {stat.suffix && (
                      <span className="text-xl lg:text-2xl font-bold text-emerald-500">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                </div>

                {/* Label */}
                <p className="text-slate-600 text-sm font-medium mt-1">{stat.label}</p>

                {/* Bottom accent bar */}
                <div
                  className={`
                    absolute bottom-0 left-1/2 -translate-x-1/2 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400
                    transition-all duration-700 ease-out
                    ${isVisible ? 'w-12' : 'w-0'}
                  `}
                  style={{
                    transitionDelay: isVisible ? `${index * 100 + 400}ms` : '0ms',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
