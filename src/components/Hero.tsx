
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">Shristy Singh</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              Email Marketer • PR Writer • Content Creator • Copywriter
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection('portfolio')}
                className="bg-gradient-blush hover:opacity-90 text-white px-8 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                See My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-2 border-rose-400 text-rose-500 hover:bg-rose-500 hover:text-white px-8 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </Button>
            </div>
          </div>
          
          {/* Professional Headshot */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Shristy Singh - Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-blush rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
