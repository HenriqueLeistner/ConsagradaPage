import { Lightbulb, Users, TrendingUp } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern creative office space with collaborative work environment" 
              className="rounded-2xl shadow-xl w-full h-auto"
              data-testid="about-image"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Sobre a Consagrada
              </h2>
              <h3 className="text-4xl font-display font-bold text-foreground mb-6">
                Criatividade que <span className="gradient-text">Transforma</span>
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Aqui, unimos experiência, inovação e estratégia para entregar resultados que fazem a diferença no mercado. 
              Desde social media, marketing digital, até tráfego pago, nosso time está pronto para te ajudar a alcançar o sucesso!
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4" data-testid="feature-innovation">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <Lightbulb className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Credibilidade Comprovada</h4>
                  <p className="text-muted-foreground">Credibilidade construída com resultados comprovados</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4" data-testid="feature-client-focus">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <Users className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Estratégias Personalizadas</h4>
                  <p className="text-muted-foreground">Estratégias personalizadas para o seu tipo de negócio</p>
                </div>
              </div>

              <div className="flex items-start space-x-4" data-testid="feature-results">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <TrendingUp className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Equipe Qualificada</h4>
                  <p className="text-muted-foreground">Equipe qualificada com expertise em diversas áreas do marketing digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
