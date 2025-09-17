import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react";

export default function Footer() {
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
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h1 className="text-2xl font-display font-bold gradient-text mb-4">
              Consagrada Agência
            </h1>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transformando marcas através de estratégias digitais inovadoras e criatividade sem limites.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/consagradaagencia" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                data-testid="footer-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                data-testid="footer-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                data-testid="footer-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                data-testid="footer-youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors text-left"
                  data-testid="footer-service-social"
                >
                  Social Media
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors text-left"
                  data-testid="footer-service-branding"
                >
                  Branding & Design
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors text-left"
                  data-testid="footer-service-marketing"
                >
                  Marketing Digital
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors text-left"
                  data-testid="footer-service-web"
                >
                  Desenvolvimento Web
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors text-left"
                  data-testid="footer-service-video"
                >
                  Produção Audiovisual
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li data-testid="footer-contact-email">contato@consagradaagencia.com</li>
              <li data-testid="footer-contact-phone">(11) 9 9999-9999</li>
              <li data-testid="footer-contact-location">São Paulo, SP</li>
              <li data-testid="footer-contact-instagram-handle">@consagradaagencia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Consagrada Agência. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
