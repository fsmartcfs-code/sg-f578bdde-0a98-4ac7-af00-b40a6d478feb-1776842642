import Link from "next/link";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Calendar, MessageCircle, Zap, TrendingUp, Globe, Star, Briefcase, Mail, Shield } from "lucide-react";

export default function EsencialPage() {
  return (
    <>
      <SEO
        title="Pack Esencial 697€ sin IVA - Web Profesional Para Autónomos"
        description="Inicio simple, impacto profesional. Sitio web moderno + Reviews + Portfolio. Sin cuotas mensuales. 3 meses modificaciones gratis."
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="mb-4">PACK ESENCIAL</Badge>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
                Tu Web Profesional en 7 Días
              </h1>
              <p className="text-xl text-muted-foreground">
                Presencia online profesional con todas las herramientas de conversión que necesitas
              </p>
              <div className="flex flex-col items-center gap-3 pt-4">
                <div className="text-3xl text-muted-foreground line-through">
                  997€
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl md:text-6xl font-bold text-primary">697€</span>
                  <span className="text-xl text-muted-foreground">sin IVA</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Pago: 40% al inicio + 60% al finalizar
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ¿Para quién es? */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                      ¿Para quién es?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Eres autónomo o pequeña empresa, quieres una vitrina profesional en línea sin arruinarte. Sin complejidad innecesaria, solo lo esencial.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Features detalladas */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                Qué incluye el Pack Esencial
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Check,
                    title: "Sitio web profesional",
                    description: "Diseño moderno y responsive, optimizado para la conversión"
                  },
                  {
                    icon: Check,
                    title: "Widget Reviews",
                    description: "Muestra tus opiniones de clientes de Google/Trustpilot para generar confianza"
                  },
                  {
                    icon: Check,
                    title: "Portfolio o galería",
                    description: "Muestra tus mejores trabajos y proyectos realizados"
                  },
                  {
                    icon: Check,
                    title: "Formulario de contacto",
                    description: "Captura leads cualificados con formulario avanzado"
                  },
                  {
                    icon: Check,
                    title: "Integración WhatsApp",
                    description: "Botón WhatsApp visible para contacto inmediato"
                  },
                  {
                    icon: Check,
                    title: "Alojamiento incluido",
                    description: "3 primeros meses de alojamiento incluidos en el precio"
                  },
                ].map((feature, i) => (
                  <Card key={i} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lo que está incluido */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                Lo que está incluido
              </h2>

              <Card className="p-8 md:p-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        Duración de realización: ~7 días
                      </h3>
                      <p className="text-muted-foreground">
                        Desde el pedido hasta la puesta en línea completa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        3 meses de modificaciones gratuitas
                      </h3>
                      <p className="text-muted-foreground">
                        Hasta 10 modificaciones durante los 3 primeros meses
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        Alojamiento incluido (3 meses)
                      </h3>
                      <p className="text-muted-foreground">
                        Después: alojamiento gratuito (Vercel) o ~20€/mes en otro lugar
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-sm text-amber-900">
                      <strong>Después de los 3 primeros meses:</strong> Las modificaciones adicionales se facturan a 80€/hora. El dominio corre a tu cargo (~12€/año).
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Después del Esencial */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-background border-2">
                <div className="text-center space-y-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">
                    ¿Después del Esencial?
                  </h2>
                  
                  <p className="text-lg text-muted-foreground">
                    ¿Necesitas más? Descubre el Pack Pro con CRM y presupuestos IA, o mejora al IA Upgrade para la automatización.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/pro">
                        Ver Pack Pro
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/ia-upgrade">
                        Ver IA Upgrade
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
                ¿Listo para empezar?
              </h2>
              
              <p className="text-lg md:text-xl opacity-90">
                Reserva una llamada o escríbenos por WhatsApp para comenzar tu proyecto.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-base font-semibold" asChild>
                  <Link href="https://calendly.com/webparaautonomos" target="_blank">
                    <Calendar className="mr-2 h-5 w-5" />
                    Reservar llamada
                  </Link>
                </Button>
                <Button size="lg" className="text-base font-semibold bg-[#25D366] hover:bg-[#20BA5A] text-white border-0" asChild>
                  <Link href="https://wa.me/34711248274?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20Pack%20Esencial" target="_blank">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Escribir por WhatsApp
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