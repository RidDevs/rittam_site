
import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Code, Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="h-1 w-20 bg-primary mb-8"></div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-6">
                <Laptop className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Frontend Development</h3>
                <p className="text-muted-foreground">Creating responsive, intuitive interfaces with modern frameworks.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-6">
                <Code className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Clean Code</h3>
                <p className="text-muted-foreground">Writing maintainable, efficient code following best practices.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-6">
                <Server className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Backend Systems</h3>
                <p className="text-muted-foreground">Building robust, scalable server-side applications and APIs.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-4 text-lg">
            <p>
              I'm a dedicated software developer with a passion for creating elegant, efficient solutions. With a background in [Your Background], I bring a unique perspective to every project I tackle.
            </p>
            <p>
              My journey in tech began [brief origin story]. Since then, I've been continuously learning and improving my skills across various technologies and domains.
            </p>
            <p>
              When I'm not coding, you can find me [your hobbies/interests]. I believe that these diverse interests help me approach problems with a creative mindset.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
