import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const ValueComparisonSection = () => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = sessionStorage.getItem('promo-timer');
    if (saved) {
      const remaining = parseInt(saved, 10) - Date.now();
      return remaining > 0 ? Math.floor(remaining / 1000) : 15 * 60;
    }
    sessionStorage.setItem('promo-timer', String(Date.now() + 15 * 60 * 1000));
    return 15 * 60;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="py-8 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center bg-card rounded-2xl p-6 shadow-card border border-border">
          <p className="text-muted-foreground mb-2">
            Essas receitas custariam facilmente <span className="line-through font-semibold text-foreground">R$297</span> se vendidas separadamente.
          </p>
          <p className="text-foreground font-bold text-lg mb-4">
            Hoje você acessa tudo por apenas <span className="text-primary text-2xl">R$27</span>
          </p>
          
          {/* Urgency Timer */}
          <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 text-center">
            <p className="text-foreground font-semibold mb-1">
              ⚡ Mas você precisa agir rápido!
            </p>
            <p className="text-muted-foreground text-sm mb-3">
              Essa promoção acaba em:
            </p>
            <div className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-6 py-3 rounded-xl">
              <Clock className="w-5 h-5" />
              <span className="font-bold text-2xl font-mono tracking-wider">
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueComparisonSection;
