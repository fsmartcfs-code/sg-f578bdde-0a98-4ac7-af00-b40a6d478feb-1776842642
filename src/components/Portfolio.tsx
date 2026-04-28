import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Briefcase, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Reforma integral cocina",
    category: "Reformas",
    image: "https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800&q=80",
  },
  {
    title: "Instalación eléctrica",
    category: "Electricidad",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
  },
  {
    title: "Jardín diseño moderno",
    category: "Jardinería",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  },
  {
    title: "Fontanería baño completo",
    category: "Fontanería",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
  },
  {
    title: "Pintura exterior vivienda",
    category: "Pintura",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
  },
  {
    title: "Carpintería a medida",
    category: "Carpintería",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
  },
];

export function Portfolio() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Portfolio de Proyectos Reales
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultados reales de autónomos que confiaron en nosotros
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-video bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Briefcase className="h-12 w-12 text-muted-foreground/40" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <TrendingUp className="h-4 w-4" />
                  <span className="font-semibold">{project.result}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/portfolio">
              Ver Más Proyectos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}