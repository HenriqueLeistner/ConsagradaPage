import { Button } from "@/components/ui/button";
import consagradaLogo from "@assets/ChatGPT Image 17 de set. de 2025, 14_21_53_1758132994673.png";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const navHeight = 80;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
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
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              <span className="gradient-text">Consagrada</span><br />
              <span className="text-foreground">Agência</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Somos uma agência de marketing digital especializada em transformar estratégias em resultados reais. 
              Nossa missão é impulsionar o seu negócio com soluções criativas, eficientes e focadas no que realmente importa: conversão e crescimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
                data-testid="button-contact"
              >
                Vamos Conversar
              </Button>
              <Button 
                variant="outline"
                onClick={scrollToServices}
                className="border-border hover:bg-secondary text-foreground px-8 py-4 rounded-lg font-semibold transition-all"
                data-testid="button-portfolio"
              >
                Ver Portfolio
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="box w-full max-w-md mx-auto" data-testid="hero-logo-container">
              <img 
                src={consagradaLogo} 
                alt="Sua empresa merece ser consagrada no mercado - Consagrada Agência" 
                className="w-full h-auto brightness-110 contrast-125"
                data-testid="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
