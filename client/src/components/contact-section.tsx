import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornaremos em breve!",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    },
    onError: () => {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato diretamente.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, email e mensagem.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Entre em Contato
          </h2>
          <h3 className="text-4xl font-display font-bold text-foreground mb-6">
            Vamos <span className="gradient-text">Transformar</span> sua Marca Juntos
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Pronto para dar o próximo passo? Entre em contato e descubra como podemos 
            elevar sua presença digital ao próximo nível.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-display font-semibold text-foreground mb-6">
                Informações de Contato
              </h4>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4" data-testid="contact-address">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <MapPin className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Endereço</h5>
                    <p className="text-muted-foreground">
                      Rua das Flores, 123 - Centro<br />
                      São Paulo, SP - 01234-567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="contact-phone">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Phone className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Telefone</h5>
                    <p className="text-muted-foreground">(11) 9 9999-9999</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="contact-email">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Mail className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Email</h5>
                    <p className="text-muted-foreground">contato@consagradaagencia.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="contact-instagram">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Instagram className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Instagram</h5>
                    <p className="text-muted-foreground">@consagradaagencia</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h5 className="font-semibold text-foreground mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Horário de Atendimento
                </h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Segunda - Sexta</span>
                    <span className="text-foreground">9h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábado</span>
                    <span className="text-foreground">9h às 14h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Domingo</span>
                    <span className="text-foreground">Fechado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Nome Completo</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-input border-border text-foreground placeholder-muted-foreground"
                      data-testid="input-name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-input border-border text-foreground placeholder-muted-foreground"
                      data-testid="input-email"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">Telefone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 9 9999-9999"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-input border-border text-foreground placeholder-muted-foreground"
                      data-testid="input-phone"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-foreground">Serviço de Interesse</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="bg-input border-border text-foreground" data-testid="select-service">
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="social-media">Social Media</SelectItem>
                        <SelectItem value="branding">Branding & Design</SelectItem>
                        <SelectItem value="marketing-digital">Marketing Digital</SelectItem>
                        <SelectItem value="desenvolvimento-web">Desenvolvimento Web</SelectItem>
                        <SelectItem value="audiovisual">Produção Audiovisual</SelectItem>
                        <SelectItem value="consultoria">Analytics & Consultoria</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Mensagem</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Conte-nos sobre seu projeto ou dúvida..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-input border-border text-foreground placeholder-muted-foreground resize-none"
                    data-testid="textarea-message"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
                  data-testid="button-submit"
                >
                  {contactMutation.isPending ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
