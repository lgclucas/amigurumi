import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-foreground text-background py-10">
      <div className="container mx-auto px-4">
        {/* Final CTA */}
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            Pronta para começar a criar amigurumis incríveis?
          </h3>
          <p className="text-background/70 mb-6">
            Junte-se a milhares de crocheteiras que já transformaram seu hobby
          </p>
          <a href="https://ggcheckout.com.br/checkout/v5/hjQenh2j0bEmO3wWSWQd" target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="lg" className="mb-4">
              <Star className="w-5 h-5 fill-current" />
              QUERO ACESSAR AGORA!
            </Button>
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-6">
          <div className="flex flex-col items-center gap-4">
            {/* Brand */}
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary fill-primary" />
              <span className="font-display text-lg text-primary">Amigurumi</span>
            </div>

            {/* Links */}
            <div className="flex gap-4 text-sm text-background/60">
              <a href="#" className="hover:text-background transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Contato
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-background/40 text-center max-w-2xl">
              Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Esta página não é patrocinada, endossada ou administrada pelo Facebook. "Facebook" é uma marca registrada da Meta Platforms, Inc. As informações, produtos e serviços apresentados são de responsabilidade exclusiva da equipe. Os resultados podem variar de pessoa para pessoa. Nenhuma promessa de ganhos é feita.
              <br /><br />
              © Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
