import { Linkedin, Instagram, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const teamMembers = [
  {
    name: "André Silva",
    role: "Diretor Criativo",
    experience: "8 anos de experiência",
    description: "Especialista em branding e estratégias visuais que transforma ideias em realidade. Lidera projetos criativos e desenvolve conceitos inovadores para marcas que querem se destacar no mercado.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    specialty: "Branding e Identidade Visual",
    bio: "André é o visionário criativo da nossa equipe. Com mais de 8 anos de experiência em design e branding, ele tem o dom de transformar conceitos abstratos em identidades visuais marcantes que conectam marcas aos seus públicos.",
    social: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    name: "Mariana Costa",
    role: "Estrategista de Marketing",
    experience: "6 anos de experiência",
    description: "Expert em campanhas digitais que geram resultados mensuráveis e impactantes. Especializada em análise de dados e otimização de campanhas para máximo ROI.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    specialty: "Marketing Digital e Analytics",
    bio: "Mariana é nossa estrategista de marketing digital. Com sólida formação em análise de dados e growth marketing, ela desenvolve campanhas que não apenas geram resultados, mas também constroem relacionamentos duradouros com os clientes.",
    social: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    name: "Rafael Santos",
    role: "Desenvolvedor Full Stack",
    experience: "7 anos de experiência",
    description: "Arquiteto de soluções que constrói experiências digitais incríveis e escaláveis. Especialista em tecnologias modernas e desenvolvimento de aplicações web e mobile.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    specialty: "Desenvolvimento Web e Mobile",
    bio: "Rafael é nosso expert em tecnologia. Domina tanto frontend quanto backend, criando soluções digitais robustas e escaláveis. Sua paixão por código limpo e performance garantem que cada projeto seja uma obra-prima técnica.",
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Beatriz Oliveira",
    role: "Social Media Manager",
    experience: "5 anos de experiência",
    description: "Criadora de conteúdo que conecta marcas com pessoas de forma autêntica. Especialista em tendências digitais e engajamento em redes sociais.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    specialty: "Redes Sociais e Conteúdo",
    bio: "Beatriz é nossa especialista em redes sociais. Com um olhar aguçado para tendências e uma habilidade natural para storytelling, ela cria conteúdos que engajam, inspiram e convertem seguidores em clientes fiéis.",
    social: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    name: "Carlos Mendes",
    role: "Consultor de Negócios",
    experience: "10 anos de experiência",
    description: "Especialista em estratégias de negócios e crescimento empresarial. Ajuda empresas a identificar oportunidades e desenvolver planos de crescimento sustentável.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    specialty: "Estratégia de Negócios",
    bio: "Carlos é nosso consultor estratégico. Com uma década de experiência em consultoria empresarial, ele ajuda nossos clientes a identificar oportunidades de crescimento e desenvolver estratégias sólidas para o sucesso a longo prazo.",
    social: {
      linkedin: "#",
      instagram: "#"
    }
  }
];

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return (
    <section id="team" className="py-24 bg-card relative overflow-hidden">
      {/* Gaming background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(46,100%,52%,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 font-mono">
            SELECT_PLAYER
          </h2>
          <h3 className="text-4xl font-display font-bold text-foreground mb-6">
            Nossa <span className="gradient-text">Equipe</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Clique em cada membro para conhecer suas habilidades e especialidades
          </p>
        </div>

        {/* Character Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              onClick={() => setSelectedMember(selectedMember === index ? null : index)}
              className={`relative group cursor-pointer transition-all duration-300 ${
                selectedMember === index 
                  ? 'scale-105 ring-4 ring-primary/50' 
                  : 'hover:scale-105'
              }`}
              data-testid={`team-member-card-${index}`}
            >
              {/* Character Box */}
              <div className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                selectedMember === index 
                  ? 'border-primary bg-gradient-to-br from-primary/20 to-accent/20' 
                  : 'border-border bg-gradient-to-br from-secondary to-muted hover:border-primary/50'
              }`}>
                
                {/* Image */}
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    data-testid={`member-image-${index}`}
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    selectedMember === index 
                      ? 'bg-primary/20' 
                      : 'bg-black/40 group-hover:bg-primary/10'
                  }`}></div>
                  
                  
                  {/* Selection Indicator */}
                  {selectedMember === index && (
                    <div className="absolute inset-0 border-4 border-primary/60 rounded-xl animate-pulse"></div>
                  )}
                </div>

                {/* Character Info */}
                <div className="p-4">
                  <h4 className="text-lg font-bold text-foreground mb-1" data-testid={`member-name-${index}`}>
                    {member.name}
                  </h4>
                  <p className="text-primary text-sm font-medium" data-testid={`member-role-${index}`}>
                    {member.role}
                  </p>
                  
                  {/* Click hint */}
                  <div className={`mt-2 text-xs transition-opacity duration-300 ${
                    selectedMember === index ? 'text-primary' : 'text-muted-foreground opacity-0 group-hover:opacity-100'
                  }`}>
                    {selectedMember === index ? 'SELECIONADO' : 'CLIQUE PARA VER DETALHES'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Character Details Panel */}
        {selectedMember !== null && (
          <div className="bg-gradient-to-br from-secondary to-background border-2 border-primary/30 rounded-2xl p-8 shadow-2xl shadow-primary/10 animate-slide-up">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Info */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    {teamMembers[selectedMember].name}
                  </h3>
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {teamMembers[selectedMember].role}
                  </span>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <span className="text-accent font-mono text-sm">Experiência:</span>
                    <p className="text-base">{teamMembers[selectedMember].experience}</p>
                  </div>
                  <div>
                    <span className="text-accent font-mono text-sm">Especialidade:</span>
                    <p className="text-base">{teamMembers[selectedMember].specialty}</p>
                  </div>
                  <div>
                    <span className="text-accent font-mono text-sm">Sobre:</span>
                    <p className="text-base">{teamMembers[selectedMember].bio}</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 mt-6">
                  {teamMembers[selectedMember].social.linkedin && (
                    <a 
                      href={teamMembers[selectedMember].social.linkedin} 
                      className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                      data-testid={`member-linkedin-${selectedMember}`}
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {teamMembers[selectedMember].social.instagram && (
                    <a 
                      href={teamMembers[selectedMember].social.instagram} 
                      className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-500 hover:from-pink-500 hover:to-purple-400 rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                      data-testid={`member-instagram-${selectedMember}`}
                    >
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {teamMembers[selectedMember].social.github && (
                    <a 
                      href={teamMembers[selectedMember].social.github} 
                      className="w-10 h-10 bg-gradient-to-r from-secondary to-muted hover:from-muted hover:to-border rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                      data-testid={`member-github-${selectedMember}`}
                    >
                      <Github className="w-5 h-5 text-foreground" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column - Description */}
              <div>
                <h4 className="text-xl font-bold text-primary mb-6 font-mono">
                  DESCRIÇÃO
                </h4>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {teamMembers[selectedMember].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setSelectedMember(null)}
                className="bg-secondary hover:bg-muted text-foreground px-6 py-2 rounded-lg transition-colors font-mono text-sm"
                data-testid="close-details"
              >
                FECHAR DETALHES
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
