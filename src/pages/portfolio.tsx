import Link from "next/link";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Calendar, Briefcase, Check } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Fontanería Rápida Madrid",
    category: "Fontanería",
    description: "Sitio web profesional con sistema de reservas integrado y atención 24/7 vía WhatsApp.",
    image: "/public/fontanero.png",
    tags: ["Web Profesional", "Calendly", "WhatsApp"],
    results: [
      "+150% leads en 3 meses",
      "Tiempo de respuesta: 2 min",
      "95% satisfacción clientes"
    ],
    duration: "7 días",
    pack: "Esencial"
  },
  {
    id: 2,
    title: "Electricista Pro Barcelona",
    category: "Electricidad",
    description: "Sitio completo con CRM, presupuestos automáticos y gestión de clientes.",
    image: "/placeholder-electrician.jpg",
    tags: ["CRM", "Presupuestos IA", "Portfolio"],
    results: [
      "+200% conversión",
      "80% presupuestos automatizados",
      "5 estrellas Google Reviews"
    ],
    duration: "10 días",
    pack: "Pro"
  },
  {
    id: 3,
    title: "Carpintería Artesanal",
    category: "Carpintería",
    description: "Portfolio visual con galería de trabajos y formulario de contacto avanzado.",
    image: "/placeholder-carpenter.jpg",
    tags: ["Portfolio", "Galería", "Reviews"],
    results: [
      "+120% solicitudes",
      "Proyectos premium captados",
      "Presencia profesional online"
    ],
    duration: "7 días",
    pack: "Esencial"
  },
  {
    id: 4,
    title: "Reformas Integrales Valencia",
    category: "Reformas",
    description: "Solución completa con agente IA, CRM avanzado y automatización total.",
    image: "/placeholder-reforms.jpg",
    tags: ["IA 24/7", "CRM Avanzado", "Automatización"],
    results: [
      "+300% leads cualificados",
      "Respuesta instantánea 24/7",
      "90% clientes satisfechos"
    ],
    duration: "15 días",
    pack: "Premium"
  },
  {
    id: 5,
    title: "Limpieza Profesional Madrid",
    category: "Limpieza",
    description: "Web con reservas online, CRM simple y gestión de servicios recurrentes.",
    image: "/placeholder-cleaning.jpg",
    tags: ["Calendly", "CRM", "Servicios"],
    results: [
      "+180% reservas online",
      "Clientes recurrentes +60%",
      "Gestión simplificada"
    ],
    duration: "10 días",
    pack: "Pro"
  },
  {
    id: 6,
    title: "Jardinería Verde",
    category: "Jardinería",
    description: "Portfolio visual impactante con antes/después y testimonios de clientes.",
    image: "/placeholder-gardening.jpg",
    tags: ["Portfolio", "Antes/Después", "Testimonios"],
    results: [
      "+140% contactos",
      "Proyectos de alto valor",
      "Branding profesional"
    ],
    duration: "7 días",
    pack: "Esencial"
  }
];

const categories = ["Todos", "Fontanería", "Electricidad", "Carpintería", "Reformas", "Limpieza", "Jardinería"];

export default function PortfolioPage() {
  return (
    <>
      <SEO
        title="Portfolio - Proyectos Web Para Autónomos | Casos de Éxito"
        description="Descubre nuestros proyectos exitosos para autónomos en España. Fontaneros, electricistas, carpinteros y más. Resultados reales, conversión garantizada."
        image="/og-image.png"
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
          <div className="container">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>

            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge className="bg-primary hover:bg-primary text-primary-foreground font-semibold px-4 py-2">
                CASOS DE ÉXITO
              </Badge>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
                Proyectos que Convierten
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground">
                Descubre cómo ayudamos a autónomos como tú a conseguir más clientes y crecer online
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">Proyectos Completados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold mb-2">98%</div>
                <div className="text-sm opacity-90">Satisfacción Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold mb-2">+180%</div>
                <div className="text-sm opacity-90">Leads Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold mb-2">7-20</div>
                <div className="text-sm opacity-90">Días Entrega</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                    {project.image.startsWith('/public/') ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                        <Briefcase className="h-16 w-16 text-primary/40" />
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-2 pt-2 border-t">
                      {project.results.map((result, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{project.duration}</span>
                      </div>
                      <Badge variant="outline" className="text-primary border-primary">
                        Pack {project.pack}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
                ¿Listo para tu Proyecto?
              </h2>
              
              <p className="text-lg md:text-xl opacity-90">
                Únete a los autónomos que ya están consiguiendo más clientes con su presencia online profesional
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-base font-semibold" asChild>
                  <Link href="/#comparacion">
                    Ver Packs y Precios
                  </Link>
                </Button>
                <Button size="lg" className="text-base font-semibold bg-[#25D366] hover:bg-[#20BA5A] text-white border-0" asChild>
                  <Link href="https://wa.me/34711248274?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Web%20Para%20Aut%C3%B3nomos" target="_blank">
                    Contactar por WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}