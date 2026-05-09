'use client';

import { useEffect, useRef, useState } from 'react';
import { Shield, Building2, DollarSign, Clock, Landmark, TrendingUp } from 'lucide-react';

interface Stat {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  isSpecial?: boolean;
}

export default function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState<Record<number, string>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    {
      value: '26',
      label: 'Avg. Premium Saving',
      suffix: '%',
      prefix: 'Up to ',
      icon: TrendingUp,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/20',
    },
    {
      value: '6',
      label: 'Major NZ Insurers',
      suffix: '',
      prefix: '',
      icon: Building2,
      color: 'text-sky-400',
      bgColor: 'bg-sky-500/20',
    },
    {
      value: '0',
      label: 'Broker Fees',
      suffix: '',
      prefix: '$',
      icon: DollarSign,
      color: 'text-violet-400',
      bgColor: 'bg-violet-500/20',
    },
    {
      value: '95',
      label: 'NZ Claims Paid',
      suffix: '%+',
      prefix: '',
      icon: Shield,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/20',
    },
    {
      value: '300',
      label: 'EQC Residential Cap',
      suffix: 'K',
      prefix: '$',
      icon: Landmark,
      color: 'text-rose-400',
      bgColor: 'bg-rose-500/20',
    },
    {
      value: '24',
      label: 'Hour Response',
      suffix: 'hr',
      prefix: '',
      icon: Clock,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
    },
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
        setTimeout(() => {
          setAnimatedStats((prev) => ({ ...prev, [index]: stat.value }));
        }, index * 150);
        return;
      }

      const target = parseInt(stat.value.replace(/[^0-9]/g, ''), 10);
      if (isNaN(target)) return;

      setTimeout(() => {
        const startTime = Date.now();
        const duration = 1200;

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const current = Math.floor(target * easeProgress);

          setAnimatedStats((prev) => ({ ...prev, [index]: current.toLocaleString() }));

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setAnimatedStats((prev) => ({ ...prev, [index]: target.toLocaleString() }));
          }
        };

        requestAnimationFrame(animate);
      }, index * 150);
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}
    >
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-widest mb-3">
            By the Numbers
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Why NZ Homeowners Compare Before They Buy
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`
                  relative group text-center p-6 rounded-2xl
                  bg-white/5 border border-white/10
                  hover:bg-white/10 hover:border-white/20
                  transition-all duration-500 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                {/* Icon */}
                <div
                  className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${stat.bgColor} ${stat.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.8} />
                </div>

                {/* Value */}
                <div className="flex flex-col items-center mb-2">
                  {stat.prefix && stat.prefix.length > 2 && (
                    <span className={`text-xs font-bold uppercase tracking-widest mb-1 ${stat.color}`}>
                      {stat.prefix}
                    </span>
                  )}
                  <div className="flex items-baseline justify-center gap-0.5">
                    {stat.prefix && stat.prefix.length <= 2 && (
                      <span className={`text-3xl lg:text-4xl font-extrabold ${stat.color}`}>
                        {stat.prefix}
                      </span>
                    )}
                    <span className={`text-4xl lg:text-5xl font-extrabold tabular-nums tracking-tight ${stat.color}`}>
                      {animatedStats[index] ?? (stat.isSpecial ? '' : '0')}
                    </span>
                    {stat.suffix && (
                      <span className={`text-2xl lg:text-3xl font-bold ${stat.color}`}>
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                </div>

                {/* Label */}
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wide leading-tight">
                  {stat.label}
                </p>

                {/* Bottom accent */}
                <div
                  className={`
                    absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] rounded-full
                    transition-all duration-700 ease-out
                    ${isVisible ? 'w-10' : 'w-0'}
                  `}
                  style={{
                    background: `var(--accent-${index})`,
                    transitionDelay: isVisible ? `${index * 100 + 500}ms` : '0ms',
                    background: index === 0 ? '#34d399' : index === 1 ? '#38bdf8' : index === 2 ? '#a78bfa' : index === 3 ? '#fbbf24' : index === 4 ? '#fb7185' : '#22d3ee',
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
