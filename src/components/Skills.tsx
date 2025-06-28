
import { Mail, Pen } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: Mail,
      title: '📧 Email Marketing',
      description: 'Strategic email campaigns that drive engagement and conversions with high open rates and low unsubscribe rates.'
    },
    {
      icon: Pen,
      title: '📝 PR Writing',
      description: 'Compelling PR articles and press releases for high-profile personalities and brands that capture attention.'
    },
    {
      icon: Mail,
      title: '✨ Content Creation',
      description: 'Creative and engaging content across multiple platforms that resonates with target audiences.'
    },
    {
      icon: Pen,
      title: '💬 Copywriting',
      description: 'Persuasive copy that converts readers into customers through strategic messaging and compelling CTAs.'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-gradient animate-fade-in">
            What I Do
          </h2>
          <p className="text-rose-500 text-lg animate-fade-in">
            Expertise that drives results across multiple channels
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-blush rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="font-playfair text-xl font-semibold mb-3 text-gray-800">
                  {skill.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
