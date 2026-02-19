import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Smartphone, Gift, BookOpen, DollarSign, Share2, FileText, Target } from "lucide-react";

const benefits = [
  "Mais de 10.000 receitas em PDF",
  "Acesso instantâneo pelo celular",
  "Download ilimitado",
  "Atualizações gratuitas para sempre",
  "Acesso vitalício",
  "Suporte via WhatsApp",
  "Garantia de 7 dias",
];

const bonuses = [
  { icon: BookOpen, title: "Curso Amigurumi do Zero" },
  { icon: DollarSign, title: "Aprenda a Precificar" },
  { icon: Share2, title: "Divulgação em Redes Sociais" },
  { icon: FileText, title: "Como Ler Receitas" },
  { icon: Target, title: "Evitar Abertura entre Pontos" },
];

const PricingSection = () => {
  return (
    <section className="py-12 bg-hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-4 w-20 h-20 rounded-full bg-coral-light opacity-30 blur-xl" />
      <div className="absolute bottom-20 left-4 w-24 h-24 rounded-full bg-pink-light opacity-30 blur-xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm">Oferta por tempo limitado</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Comece sua jornada hoje
          </h2>
        </div>

        <div className="max-w-md mx-auto">

          {/* Main unified card */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-cta-gradient rounded-3xl blur-xl opacity-20" />
            
            <div className="relative bg-card rounded-3xl shadow-card border-2 border-primary/20 overflow-hidden">
              {/* Price header */}
              <div className="bg-gradient-to-b from-primary/5 to-transparent pt-8 pb-6 px-6 text-center">
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-muted-foreground text-xl">R$</span>
                  <span className="text-5xl font-bold text-foreground">27</span>
                  <span className="text-muted-foreground">,00</span>
                </div>
                <p className="text-sm text-muted-foreground">Pagamento único • Acesso vitalício</p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* What you receive */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">O que você vai receber</h3>
                      <p className="text-xs text-muted-foreground">Receitas em PDF no seu celular</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-soft-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-soft-green" />
                        </div>
                        <span className="text-foreground text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-border" />

                {/* Bonuses */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Gift className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-foreground">+ Bônus Gratuitos</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2">
                    {bonuses.map((bonus, index) => (
                      <div key={index} className="flex items-center gap-3 bg-primary/5 rounded-xl p-2.5">
                        <div className="w-7 h-7 bg-cta-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                          <bonus.icon className="w-3.5 h-3.5 text-primary-foreground" />
                        </div>
                        <span className="text-foreground text-sm font-medium">{bonus.title}</span>
                        <span className="ml-auto bg-soft-green/20 text-soft-green text-xs font-bold px-2 py-0.5 rounded-full">
                          GRÁTIS
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a href="https://ggcheckout.com.br/checkout/v5/hjQenh2j0bEmO3wWSWQd" target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="cta" size="xl" className="w-full">
                    <Star className="w-5 h-5 fill-current" />
                    QUERO ACESSAR AGORA!
                  </Button>
                </a>

                {/* Immediate access */}
                <div className="bg-primary/10 rounded-xl p-3 text-center">
                  <span className="text-primary font-semibold text-sm">📧 Acesso imediato enviado por e-mail</span>
                </div>

                {/* Trust */}
                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span>🔒</span> Compra segura
                  </span>
                  <span className="flex items-center gap-1">
                    <span>✅</span> Garantia 7 dias
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-destructive/10 px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
            <span className="text-destructive font-semibold text-sm">
              Últimas vagas com desconto!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
