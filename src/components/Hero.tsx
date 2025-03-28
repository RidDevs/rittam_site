
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background/70 z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Hello, I'm 
            <span className="block text-primary mt-2">Rittam Dutta</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Software Developer & Tech Enthusiast
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            I build elegant, efficient solutions to complex problems. Passionate about creating technology that makes a difference.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
