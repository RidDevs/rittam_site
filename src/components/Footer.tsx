
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Rittam Dutta. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-muted-foreground text-sm flex items-center">
              Built with <Heart className="h-3 w-3 mx-1 text-red-500" /> using React & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
