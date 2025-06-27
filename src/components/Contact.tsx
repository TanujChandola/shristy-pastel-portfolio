
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-gradient animate-fade-in">
            Let's Work Together
          </h2>
          
          <p className="text-gray-700 text-lg mb-12 animate-fade-in">
            Ready to elevate your content strategy? Let's discuss how I can help drive your marketing goals.
          </p>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg animate-fade-in-up border border-gray-200">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Mail className="h-10 w-10 text-white" />
              </div>
              
              <div className="text-center">
                <h3 className="font-playfair text-2xl font-semibold mb-4 text-gray-800">
                  Get In Touch
                </h3>
                <p className="text-gray-700 mb-6">
                  I'm always excited to discuss new opportunities and creative projects.
                </p>
              </div>
              
              <Button
                asChild
                className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-8 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-lg border-0"
              >
                <a href="mailto:im.shristysingh@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-gray-200">
        <div className="text-center">
          <p className="text-gray-600">
            © 2025 Tanuj Chandola. Crafted with passion for impactful storytelling.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
