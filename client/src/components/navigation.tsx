import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 
              className="text-2xl font-display font-bold gradient-text cursor-pointer"
              onClick={() => scrollToSection('home')}
              data-testid="logo"
            >
              Consagrada
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-home"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-about"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-services"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-team"
            >
              Equipe
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-contact"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-effect border-t border-border">
            <div className="flex flex-col space-y-2 px-4 py-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-home"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-about"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-services"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-team"
              >
                Equipe
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-contact"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
