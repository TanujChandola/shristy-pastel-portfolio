
import { useEffect, useState, useRef } from 'react';

const Impact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      value: 38,
      suffix: '%',
      label: 'Open Rate',
      description: '38% open rate, well above industry benchmarks.',
      benchmark: 'Industry Avg: ~25%'
    },
    {
      value: 16,
      suffix: '%',
      label: 'Click-Through Rate',
      description: 'Strong engagement with a 16% CTR.',
      benchmark: 'Industry Avg: 2–5%'
    },
    {
      value: 10.5,
      suffix: '%',
      label: 'Conversion Rate',
      description: '10.5% conversion driving real sales.',
      benchmark: '10.5% of recipients purchased tickets'
    },
    {
      value: 180,
      suffix: '+',
      label: 'Total Sales',
      description: 'Sold 180+ tickets in just 72 hours.',
      benchmark: 'Event Promotion Success'
    },
    {
      value: 0.4,
      suffix: '%',
      label: 'Unsubscribe Rate',
      description: 'Only 0.4% unsubscribes—highly relevant content.',
      benchmark: 'Low Churn'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" className="py-20 px-4" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-gradient animate-fade-in">
            My Impact in Numbers
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in">
            Proven results that speak for themselves
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              isVisible={isVisible}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: {
    value: number;
    suffix: string;
    label: string;
    description: string;
    benchmark: string;
  };
  isVisible: boolean;
  delay: number;
}

const StatCard = ({ stat, isVisible, delay }: StatCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const increment = stat.value / 50;
        let current = 0;
        
        const counter = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            setCount(stat.value);
            clearInterval(counter);
          } else {
            setCount(current);
          }
        }, 30);

        return () => clearInterval(counter);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, stat.value, delay]);

  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-count-up text-center border border-blush-100"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-4">
        <div className="text-3xl md:text-4xl font-bold text-gradient font-playfair">
          {count.toFixed(stat.value % 1 !== 0 ? 1 : 0)}{stat.suffix}
        </div>
        <div className="text-sm text-muted-foreground font-medium mt-1">
          {stat.benchmark}
        </div>
      </div>
      
      <h3 className="font-semibold text-foreground mb-2">
        {stat.label}
      </h3>
      
      <p className="text-sm text-muted-foreground leading-relaxed">
        {stat.description}
      </p>
    </div>
  );
};

export default Impact;
