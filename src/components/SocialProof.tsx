import { Card } from "@/components/ui/card";
import { Star, Award, TrendingUp } from "lucide-react";

export function SocialProof() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 text-center space-y-6 bg-gradient-to-br from-accent-light/20 to-accent/10 border-2 border-accent">
            <div className="inline-flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-accent text-accent" />
              ))}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-center gap-3">
                <Award className="h-6 w-6 text-accent" />
                <span className="text-5xl font-heading font-bold text-accent">5.0</span>
                <Award className="h-6 w-6 text-accent" />
              </div>
              <p className="text-xl font-semibold text-foreground">
                Valoración media en Google
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-lg text-foreground/90">
                <strong>Integración directa de tus reseñas de Google/Trustpilot</strong> para que confíen en ti desde el segundo 1.
              </p>
              <p className="text-muted-foreground">
                La prueba social es el activo más valioso para un autónomo: reduce la desconfianza, aumenta las conversiones y justifica tus precios sin tener que explicar nada.
              </p>
            </div>

            <div className="flex items-center justify-center gap-8 pt-4 text-sm font-medium text-muted-foreground">
              <span className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-accent" />
                +47% conversión
              </span>
              <span className="text-border">·</span>
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-accent" />
                Confianza inmediata
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}