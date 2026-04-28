import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Briefcase, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Fontanería Express",
    category: "Fontanería",
    image: "/public/fontanero.png",
    description: "Sitio web profesional con sistema de reservas 24/7",
    result: "+150% leads en 3 meses"
  },
  {
    title: "Electricista Pro",
    category: "Electricidad",
    image: "/placeholder-electrician.jpg",
    description: "Web completa con CRM y presupuestos automáticos",
    result: "+200% conversión"
  },
  {
    title: "Carpintería Artesanal",
    category: "Carpintería",
    image: "/placeholder-carpenter.jpg",
    description: "Portfolio visual con galería de trabajos",
    result: "+120% solicitudes"
  },
  {
    title: "Reformas Integrales",
    category: "Reformas",
    image: "/placeholder-reforms.jpg",
    description: "Solución completa con IA y automatización",
    result: "+300% leads cualificados"
  },
  {
    title: "Limpieza Profesional",
    category: "Limpieza",
    image: "/placeholder-cleaning.jpg",
    description: "Web con reservas online y gestión de servicios",
    result: "+180% reservas online"
  },
  {
    title: "Jardinería Verde",
    category: "Jardinería",
    image: "/placeholder-gardening.jpg",
    description: "Portfolio impactante con antes/después",
    result: "+140% contactos"
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