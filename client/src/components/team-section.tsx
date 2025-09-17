import { Linkedin, Instagram, Github } from "lucide-react";

const teamMembers = [
  {
    name: "André Silva",
    role: "Diretor Criativo",
    description: "Especialista em branding e estratégias visuais com mais de 8 anos de experiência.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    social: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    name: "Mariana Costa",
    role: "Estrategista de Marketing",
    description: "Expert em campanhas digitais e análise de performance com resultados comprovados.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    social: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    name: "Rafael Santos",
    role: "Desenvolvedor Full Stack",
    description: "Especialista em tecnologias modernas e arquitetura de sistemas escaláveis.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Beatriz Oliveira",
    role: "Social Media Manager",
    description: "Criativa apaixonada por tendências digitais e engajamento autêntico.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    social: {
      linkedin: "#",
      instagram: "#"
    }
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Nossa Equipe
          </h2>
          <h3 className="text-4xl font-display font-bold text-foreground mb-6">
            Mentes <span className="gradient-text">Criativas</span> por trás dos Resultados
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça os profissionais talentosos que tornam cada projeto uma obra de arte digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group text-center" data-testid={`team-member-${index}`}>
              <div className="relative mb-6">
                <img 
                  src={member.image}
                  alt={`Professional headshot of ${member.name}`}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
                  data-testid={`member-image-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              </div>
              <h4 className="text-xl font-display font-semibold text-foreground mb-2" data-testid={`member-name-${index}`}>
                {member.name}
              </h4>
              <p className="text-primary font-medium mb-3" data-testid={`member-role-${index}`}>
                {member.role}
              </p>
              <p className="text-sm text-muted-foreground mb-4" data-testid={`member-description-${index}`}>
                {member.description}
              </p>
              <div className="flex justify-center space-x-3">
                {member.social.linkedin && (
                  <a 
                    href={member.social.linkedin} 
                    className="w-8 h-8 bg-secondary hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                    data-testid={`member-linkedin-${index}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.social.instagram && (
                  <a 
                    href={member.social.instagram} 
                    className="w-8 h-8 bg-secondary hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                    data-testid={`member-instagram-${index}`}
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
                {member.social.github && (
                  <a 
                    href={member.social.github} 
                    className="w-8 h-8 bg-secondary hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                    data-testid={`member-github-${index}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
