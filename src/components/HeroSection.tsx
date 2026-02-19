import { Heart, Sparkles } from "lucide-react";
import heroImage from "@/assets/biblioteca-digital.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Decorative yarn elements */}
      <div className="absolute top-10 left-4 w-16 h-16 rounded-full bg-coral-light opacity-60 animate-float" />
      <div className="absolute top-32 right-6 w-12 h-12 rounded-full bg-pink-light opacity-50 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-8 w-10 h-10 rounded-full bg-yarn-green opacity-40 animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/2 right-4 w-8 h-8 rounded-full bg-yarn-blue opacity-40 animate-float" style={{ animationDelay: '1.5s' }} />
      
      {/* Stitch pattern overlay */}
      <div className="absolute inset-0 bg-stitch-pattern opacity-50" />
      
      <div className="relative z-10 container mx-auto px-4 pt-12 pb-8">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft border border-coral/20">
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <span className="font-display text-xl text-primary">Amigurumi</span>
          </div>
        </div>

        {/* Main headline */}
        <div className="text-center mb-6 animate-slide-up">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
            Crie Amigurumis{" "}
            <span className="text-gradient">incríveis</span>
            {" "}sem gastar horas buscando receitas
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto">
            Acesse hoje mesmo a maior biblioteca de receitas e aprenda crochê do zero
          </p>
        </div>

        {/* Value proposition badge */}
        <div className="flex justify-center mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-cta-gradient rounded-2xl blur-lg opacity-30 animate-pulse-soft" />
            <div className="relative bg-card border-2 border-primary/30 rounded-2xl px-5 py-4 shadow-card">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-cta-gradient rounded-xl flex items-center justify-center shadow-soft">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-foreground text-lg">
                    Pack de +10.000 receitas
                  </p>
                  <p className="text-primary font-semibold text-sm">
                    + Curso passo a passo para iniciantes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Trust badges */}
        <div className="flex justify-center gap-4 text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-1">
            <span className="text-lg">🔒</span>
            <span>Pagamento seguro</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-lg">⭐</span>
            <span>Garantia 7 dias</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <img 
            src={heroImage} 
            alt="Amigurumis lindos feitos com as receitas do pack" 
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-card"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
