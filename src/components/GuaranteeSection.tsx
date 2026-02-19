import { Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-12 bg-soft-green/10 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          {/* Card */}
          <div className="bg-card rounded-3xl p-6 sm:p-8 shadow-card border border-soft-green/20">
            {/* Header with icon */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-soft-green/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-8 h-8 text-soft-green" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  Garantia de 7 Dias
                </h2>
                <p className="text-sm text-muted-foreground">
                  100% do seu dinheiro de volta
                </p>
              </div>
            </div>

            {/* Benefits list */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-soft-green flex-shrink-0" />
                <span className="text-foreground text-sm">Reembolso integral sem questionamentos</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-soft-green flex-shrink-0" />
                <span className="text-foreground text-sm">Processo rápido e sem burocracia</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-soft-green flex-shrink-0" />
                <span className="text-foreground text-sm">Compra 100% segura e protegida</span>
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href="https://ggcheckout.com.br/checkout/v5/hjQenh2j0bEmO3wWSWQd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="cta" size="lg" className="w-full">
                <Star className="w-5 h-5 fill-current" />
                QUERO ACESSAR AGORA!
              </Button>
            </a>

            {/* Trust message */}
            <p className="text-xs text-muted-foreground text-center mt-4">
              🔒 Pagamento seguro • Acesso imediato
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
