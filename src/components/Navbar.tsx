
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavbarProps {
  scrollY: number;
}

const Navbar = ({ scrollY }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrollY > 50 ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo / Name */}
        <a href="#" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
          Rittam Dutta
        </a>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com/in/ridt/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="mailto:your-email@example.com" aria-label="Email">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <Button variant="ghost" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div className={cn(
          "fixed inset-x-0 bg-background shadow-lg transition-all duration-300 ease-in-out",
          isMenuOpen ? "top-16 opacity-100" : "-top-full opacity-0"
        )}>
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-lg py-2 border-b border-border hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-lg py-2 border-b border-border hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-lg py-2 border-b border-border hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-lg py-2 border-b border-border hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex items-center space-x-6 py-2">
              <a href="https://www.linkedin.com/in/ridt/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 hover:text-primary transition-colors" />
              </a>
              <a href="mailto:your-email@example.com" aria-label="Email">
                <Mail className="h-5 w-5 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
