import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonial1 from "@/assets/testimonial-new-1.png";
import testimonial2 from "@/assets/testimonial-new-2.png";
import testimonial3 from "@/assets/testimonial-new-3.png";
import testimonial4 from "@/assets/testimonial-new-4.png";
import testimonial5 from "@/assets/testimonial-new-5.png";

// Order: last image sent first (img-0136-6), then the rest
const testimonials = [testimonial1, testimonial5, testimonial4, testimonial3, testimonial2];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [goToNext]);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    
    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrev();
    }
  };

  return (
    <section className="py-12 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            O que dizem nossas alunas
          </h2>
          <p className="text-muted-foreground">
            Milhares de pessoas já transformaram seu hobby
          </p>
        </div>

        {/* Carousel container */}
        <div className="max-w-md mx-auto relative">
          {/* Swipe hint */}
          <div className="flex items-center justify-center gap-2 mb-4 text-muted-foreground text-sm">
            <ChevronLeft className="w-4 h-4 animate-pulse" />
            <span>Deslize para ver mais depoimentos</span>
            <ChevronRight className="w-4 h-4 animate-pulse" />
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 bg-card/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-border hover:bg-card transition-colors"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 bg-card/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-border hover:bg-card transition-colors"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Carousel slides */}
          <div 
            className="overflow-hidden rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0"
                >
                  <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border">
                    <img
                      src={testimonial}
                      alt={`Depoimento ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary w-6" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-3 text-sm text-muted-foreground">
            {currentIndex + 1} de {testimonials.length} depoimentos
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
