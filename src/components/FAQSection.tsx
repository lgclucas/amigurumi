import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso ter experiência com crochê?",
    answer:
      "Não! O curso inclui aulas para iniciantes completos. Você vai aprender desde os pontos básicos até técnicas avançadas.",
  },
  {
    question: "Como vou receber o material?",
    answer:
      "Após a confirmação do pagamento, você receberá o acesso imediato por e-mail. Todo o material é digital e pode ser acessado pelo celular ou computador.",
  },
  {
    question: "O acesso é vitalício?",
    answer:
      "Sim! Você paga uma única vez e tem acesso para sempre, incluindo todas as atualizações futuras.",
  },
  {
    question: "Posso imprimir as receitas?",
    answer:
      "Sim! Todas as receitas podem ser baixadas e impressas para você usar enquanto trabalha nos seus amigurumis.",
  },
  {
    question: "E se eu não gostar?",
    answer:
      "Você tem 7 dias de garantia incondicional. Se não ficar satisfeita, devolvemos 100% do seu dinheiro, sem perguntas.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground">
            Tire suas dúvidas sobre o material
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border px-4 shadow-sm data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
