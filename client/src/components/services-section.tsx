import { Instagram, Palette, Megaphone, Code, Video, BarChart3, Check } from "lucide-react";

const services = [
  {
    icon: Instagram,
    title: "Gestão de Redes Sociais",
    description: "Gestão completa de redes sociais com estratégias personalizadas para engajamento e crescimento da sua marca.",
    features: ["Planejamento de conteúdo", "Criação visual", "Gestão de comunidade", "Análise de performance"]
  },
  {
    icon: Megaphone,
    title: "Campanhas de Tráfego Pago",
    description: "Campanhas otimizadas de tráfego pago para maximizar conversões e ROI do seu investimento.",
    features: ["Google Ads", "Facebook & Instagram Ads", "Otimização de campanhas", "Relatórios detalhados"]
  },
  {
    icon: Palette,
    title: "Criação de Conteúdo Personalizado",
    description: "Conteúdo criativo e estratégico desenvolvido especialmente para o seu negócio e público-alvo.",
    features: ["Design gráfico", "Copywriting estratégico", "Produção audiovisual", "Material publicitário"]
  },
  {
    icon: BarChart3,
    title: "Consultoria Estratégica",
    description: "Consultoria especializada para desenvolver estratégias de marketing digital que geram resultados reais.",
    features: ["Análise de mercado", "Planejamento estratégico", "Otimização de processos", "Mentoria digital"]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Nossos Serviços
          </h2>
          <h3 className="text-4xl font-display font-bold text-foreground mb-6">
            Soluções <span className="gradient-text">Completas</span> para sua Marca
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços digitais para impulsionar 
            sua presença online e alcançar seus objetivos de negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
                data-testid={`service-card-${index}`}
              >
                <div className="bg-primary/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <IconComponent className="text-2xl text-primary w-8 h-8" />
                </div>
                <h4 className="text-xl font-display font-semibold text-foreground mb-4">
                  {service.title}
                </h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-primary mr-2 w-4 h-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
