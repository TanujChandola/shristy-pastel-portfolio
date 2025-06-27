
const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-gradient animate-fade-in">
            About Me
          </h2>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg animate-fade-in-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-6">
                I'm a passionate content writer and email marketer with a flair for storytelling and a results‑driven mindset. 
                I completed my <strong>B.A. in English Honours from Graphic Era Hill University (2022–2025)</strong> and am pursuing 
                my <strong>Master's in English from Uttarakhand Open University</strong>.
              </p>
              
              <p className="text-foreground leading-relaxed">
                At <strong>Elleven Media</strong>—a pan‑India celebrity & artist management platform—I crafted PR articles, 
                blog posts, and email campaigns for high‑profile personalities. My work blends creativity with marketing 
                strategy to drive clicks, conversions, and engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
