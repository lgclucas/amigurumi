import divertidamente from "@/assets/divertidamente.png";
import recipe1 from "@/assets/recipe-1.png";
import recipe2 from "@/assets/recipe-2.png";
import recipe3 from "@/assets/recipe-3.png";
import recipe4 from "@/assets/recipe-4.png";
import recipe5 from "@/assets/recipe-5.png";
import recipe6 from "@/assets/recipe-6.png";
import recipe7 from "@/assets/recipe-7.png";
import recipe8 from "@/assets/recipe-8.png";
import recipe9 from "@/assets/recipe-9.png";
import recipe10 from "@/assets/recipe-10.png";
import recipe11 from "@/assets/recipe-11.png";
import recipe12 from "@/assets/recipe-12.png";
import imprimiveis from "@/assets/imprimiveis.png";

const recipes = [
  divertidamente,
  recipe10,
  recipe11,
  imprimiveis,
  recipe1,
  recipe2,
  recipe3,
  recipe4,
  recipe5,
  recipe6,
  recipe7,
  recipe8,
  recipe9,
  recipe12,
];

const RecipeGallery = () => {
  return (
    <section className="py-12 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Veja o que você vai encontrar
          </h2>
          <p className="text-muted-foreground">
            Receitas ilustradas e fáceis de seguir
          </p>
        </div>

        {/* Vertical image stack */}
        <div className="flex flex-col items-center gap-6">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="w-full max-w-sm"
            >
              <div className="bg-card rounded-3xl overflow-hidden shadow-card border border-border">
                <img
                  src={recipe}
                  alt={`Receita de amigurumi ${index + 1}`}
                  className="w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Recipe count badge */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft border border-border">
            <span className="text-2xl">📚</span>
            <span className="font-semibold text-foreground">
              +10.000 receitas disponíveis
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeGallery;
