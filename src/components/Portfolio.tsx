import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

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
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            No solo digas que eres bueno, MUÉSTRALO
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sección de trabajos realizados incluida. Tu portfolio es tu mejor vendedor.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Card key={i} className="group overflow-hidden border-2 hover:border-primary transition-colors cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="inline-block px-2 py-1 bg-primary rounded text-xs font-semibold mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada trabajo visible genera confianza. Cada foto es una respuesta a "¿por qué debería elegirte a ti?".
          </p>
        </div>
      </div>
    </section>
  );
}