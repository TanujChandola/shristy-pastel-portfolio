
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'B2B Booking Email Sample – Chetan Bhagat x Penguin Random House India',
      description: 'Targeted pitch email positioning Chetan Bhagat for PRH events',
      link: 'https://drive.google.com/file/d/1RZhByjMNIjd88BoHrTBLF668h0eFOmkH/view?usp=sharing'
    },
    {
      title: 'Email Campaign: Rebel Roast Night ft. Apoorva Makhija',
      description: 'Gen Z comedy event promotion – 180+ tickets sold',
      link: 'https://drive.google.com/file/d/1kJYQGc2VkkkBznYfAGFX0cDSr9QyK9Fn/view?usp=sharing'
    },
    {
      title: 'Blog Writing Sample – Kamiya Jani & Curly Tales',
      description: 'Feature‑style SEO blog on India\'s top travel influencer',
      link: 'https://drive.google.com/file/d/1kxXEfWUCgwN9wakb2vM4CBfhyb6gPrV9/view?usp=sharing'
    },
    {
      title: 'B2B Pitch Email – Collaborate with boAt Lifestyle',
      description: 'Formal pitch to boAt CMO for celebrity partnerships',
      link: 'https://drive.google.com/file/d/1F5_yVgLYLOel8BrJQWDGLLGxuvd7Ixsa/view?usp=sharing'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-gradient animate-fade-in">
            My Work
          </h2>
          <p className="text-rose-500 text-lg animate-fade-in">
            Real projects, real results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} PDF`}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-103 animate-fade-in-up group border border-gray-200 block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full flex flex-col">
                <h3 className="font-playfair text-xl font-semibold mb-3 text-gray-800 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <span className="inline-flex items-center text-rose-600 hover:text-rose-700 font-medium transition-colors group-hover:translate-x-1 transform duration-300">
                    View PDF
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
