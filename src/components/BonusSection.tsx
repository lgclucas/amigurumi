import { Gift, BookOpen, DollarSign, Share2, FileText, Target } from "lucide-react";

const bonuses = [
  {
    icon: BookOpen,
    title: "Curso Amigurumi do Zero",
    description: "Aprenda desde o básico até técnicas avançadas",
  },
  {
    icon: DollarSign,
    title: "Aprenda a Precificar seus Amigurumis",
    description: "Calcule o valor justo do seu trabalho",
  },
  {
    icon: Share2,
    title: "Como Divulgar em Redes Sociais",
    description: "Estratégias para vender mais",
  },
  {
    icon: FileText,
    title: "Como Ler Receitas",
    description: "Entenda qualquer padrão facilmente",
  },
  {
    icon: Target,
    title: "Como Evitar Abertura entre Pontos",
    description: "Técnicas para um acabamento perfeito",
  },
];

const BonusSection = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className="py-12 bg-background bg-stitch-pattern">
      <div className="container mx-auto px-4">
        {/* Date banner */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Gift className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold text-sm">Oferta Especial</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Comprando hoje, <span className="text-gradient">{formattedDate}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Você ganha todos estes bônus exclusivos! 🎁
          </p>
        </div>

        {/* Bonus cards */}
        <div className="space-y-4 max-w-md mx-auto">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-4 shadow-card border border-border hover:shadow-soft hover:border-primary/30 transition-all duration-300 animate-slide-up flex items-start gap-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-cta-gradient rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                <bonus.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-base mb-1">
                  {bonus.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-snug">
                  {bonus.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency text */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            ⚠️ Bônus disponíveis apenas para compras realizadas hoje
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
