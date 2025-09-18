import ekobrazilLogo from "@assets/image_1758216456601.png";
import sindilojasLogo from "@assets/image_1758216462469.png";
import rahdeLogo from "@assets/image_1758216471166.png";
import garciaDieselLogo from "@assets/image_1758216478620.png";
import food2fitLogo from "@assets/image_1758216490275.png";
import sumanLogo from "@assets/image_1758216500192.png";
import tuttapastaLogo from "@assets/image_1758216507547.png";
import cavernLogo from "@assets/image_1758216515051.png";
import upperLogo from "@assets/image_1758216521561.png";

interface Company {
  name: string;
  logo: string;
  sector: string;
  url: string;
}

const companies: readonly Company[] = [
  { name: "Ekobrazil", logo: ekobrazilLogo, sector: "Inteligência Ecológica", url: "https://www.ekobrazil.com.br" },
  { name: "Sindilojas RS", logo: sindilojasLogo, sector: "Sindicato", url: "https://www.sindilojas-poa.com.br" },
  { name: "RAHDE", logo: rahdeLogo, sector: "Consultoria e Auditoria", url: "https://www.rahde.com.br" },
  { name: "Garcia Diesel", logo: garciaDieselLogo, sector: "Automotivo", url: "https://www.garciadiesel.com.br" },
  { name: "Food2FIT", logo: food2fitLogo, sector: "Alimentação Saudável", url: "https://www.food2fit.com.br" },
  { name: "SUMAN", logo: sumanLogo, sector: "Produção Audiovisual", url: "https://www.suman.com.br" },
  { name: "TUTTAPASTA", logo: tuttapastaLogo, sector: "Gastronomia Italiana", url: "https://www.tuttapasta.com.br" },
  { name: "Cavern Pub", logo: cavernLogo, sector: "Entretenimento", url: "https://www.cavernpub.com.br" },
  { name: "Upper", logo: upperLogo, sector: "Soluções Digitais", url: "https://www.upper.com.br" }
] as const;

export default function EmpresasConsagradasSection() {
  return (
    <section className="py-24 bg-background" data-testid="section-empresas-consagradas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4" data-testid="empresas-subtitle">
            Empresas Consagradas
          </h2>
          <h3 className="text-4xl font-display font-bold text-foreground mb-6" data-testid="empresas-title">
            Conecte-se com <span className="gradient-text">Empresas Parceiras</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="empresas-description">
            Trabalhamos com empresas líderes de diversos segmentos do mercado brasileiro, 
            oferecendo soluções personalizadas de marketing digital que impulsionam o crescimento e o sucesso.
          </p>
        </div>

        {/* Marquee Viewport - First Row (Left to Right) */}
        <div 
          className="relative overflow-hidden py-6 marquee-container"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
          }}
        >
          <div className="marquee-track inline-flex gap-6 will-change-transform">
            {/* First set of companies */}
            {companies.slice(0, 5).map((company) => {
              return (
                <a
                  key={`row1-first-${company.name}`}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-shrink-0 bg-white dark:bg-card rounded-xl px-6 py-4 flex items-center justify-center hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-w-[160px] h-16"
                  aria-label={`Visitar site da ${company.name} - ${company.sector}`}
                  data-testid={`company-link-row1-${company.name.toLowerCase().replace(/\s+/g, '-').replace('.com', '')}`}
                >
                  <img 
                    src={company.logo} 
                    alt={`Logo da ${company.name}`}
                    className="max-h-8 max-w-[120px] object-contain"
                  />
                </a>
              );
            })}
            {/* Duplicate set for seamless loop */}
            {companies.slice(0, 5).map((company) => {
              return (
                <a
                  key={`row1-second-${company.name}`}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-shrink-0 bg-white dark:bg-card rounded-xl px-6 py-4 flex items-center justify-center hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-w-[160px] h-16"
                  aria-label={`Visitar site da ${company.name} - ${company.sector}`}
                  data-testid={`company-link-row1-duplicate-${company.name.toLowerCase().replace(/\s+/g, '-').replace('.com', '')}`}
                >
                  <img 
                    src={company.logo} 
                    alt={`Logo da ${company.name}`}
                    className="max-h-8 max-w-[120px] object-contain"
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* Marquee Viewport - Second Row (Right to Left) */}
        <div 
          className="relative overflow-hidden py-6 marquee-container"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
          }}
        >
          <div className="marquee-track-reverse inline-flex gap-6 will-change-transform">
            {/* First set of companies */}
            {companies.slice(4).map((company) => {
              return (
                <a
                  key={`row2-first-${company.name}`}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-shrink-0 bg-white dark:bg-card rounded-xl px-6 py-4 flex items-center justify-center hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-w-[160px] h-16"
                  aria-label={`Visitar site da ${company.name} - ${company.sector}`}
                  data-testid={`company-link-row2-${company.name.toLowerCase().replace(/\s+/g, '-').replace('.com', '')}`}
                >
                  <img 
                    src={company.logo} 
                    alt={`Logo da ${company.name}`}
                    className="max-h-8 max-w-[120px] object-contain"
                  />
                </a>
              );
            })}
            {/* Duplicate set for seamless loop */}
            {companies.slice(4).map((company) => {
              return (
                <a
                  key={`row2-second-${company.name}`}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-shrink-0 bg-white dark:bg-card rounded-xl px-6 py-4 flex items-center justify-center hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-w-[160px] h-16"
                  aria-label={`Visitar site da ${company.name} - ${company.sector}`}
                  data-testid={`company-link-row2-duplicate-${company.name.toLowerCase().replace(/\s+/g, '-').replace('.com', '')}`}
                >
                  <img 
                    src={company.logo} 
                    alt={`Logo da ${company.name}`}
                    className="max-h-8 max-w-[120px] object-contain"
                  />
                </a>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <div 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full"
            data-testid="empresas-success-badge"
          >
            <span className="text-primary font-semibold text-lg">
              +100 empresas brasileiras atendidas com sucesso
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}