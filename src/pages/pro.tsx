import Link from "next/link";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X, Calendar, MessageCircle, Sparkles, TrendingUp, Zap } from "lucide-react";

export default function ProPage() {
  return (
    <>
      <SEO
        title="Pack Pro 1297€ sin IVA - CRM + Presupuestos IA + Kit Digital"
        description="Todo lo de Esencial + CRM + Presupuestos IA semi-automáticos + Calendly Premium. La solución completa para autónomos en crecimiento. Sin cuotas mensuales."
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="mb-4">PACK PRO</Badge>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
                Automatiza y Escala tu Negocio
              </h1>
              <p className="text-xl text-muted-foreground">
                Todo lo esencial + CRM + Presupuestos con IA + Kit Digital
              </p>
              <div className="flex flex-col items-center gap-3 pt-4">
                <div className="text-3xl text-muted-foreground line-through">
                  1997€
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl md:text-6xl font-bold text-primary">1297€</span>
                  <span className="text-xl text-muted-foreground">sin IVA</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Pago: 30% al inicio + 70% al finalizar
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Qui c'est pour ? */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                      ¿Para quién es?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Necesitas gestionar tus clientes, tus presupuestos, automatizar los recordatorios. Quieres crecer sin pasar 2 horas al día en tareas administrativas.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Features détaillées */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                Qué incluye el Pack Pro
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Check,
                    title: "Todo del Pack Esencial",
                    description: "Sitio profesional + Reviews + Portfolio + WhatsApp + Formulario"
                  },
                  {
                    icon: Check,
                    title: "CRM simple",
                    description: "Seguimiento de clientes, historial de intercambios, gestión de oportunidades"
                  },
                  {
                    icon: Check,
                    title: "Presupuestos IA semi-automáticos",
                    description: "Genera presupuestos prellenados en pocos clics, ahorra tiempo"
                  },
                  {
                    icon: Check,
                    title: "Kit Digital incluido",
                    description: "Ayuda con las subvenciones Kit Digital (si aplicable en España)"
                  },
                  {
                    icon: Check,
                    title: "Formulario avanzado",
                    description: "Captura de datos cualificados con campos personalizados"
                  },
                  {
                    icon: Check,
                    title: "Integración Calendly Premium",
                    description: "Reserva de citas automatizada, sincronización agenda, recordatorios SMS"
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

        {/* Propiedad del Sitio */}
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Tu Sitio, Tu Propiedad
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <Card className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Check className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-heading text-xl font-bold">100% Tuya</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Tras el pago final, recibes copia completa del código: sitio web + CRM + integraciones. 
                      Todo es tuyo, sin dependencias ocultas.
                    </p>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-destructive/10 rounded-lg">
                        <X className="h-6 w-6 text-destructive" />
                      </div>
                      <h3 className="font-heading text-xl font-bold">No Como las Agencias</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Las agencias cobran cuotas mensuales perpetuas y mantienen control total. 
                      Nosotros te damos independencia: tu negocio, tu tecnología.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Ce qui est inclus */}
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
                        Duración de realización: ~10 días
                      </h3>
                      <p className="text-muted-foreground">
                        Sitio + CRM operacional + Calendly configurado
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        CRM operacional desde el día 1
                      </h3>
                      <p className="text-muted-foreground">
                        Pre-configurado con tus servicios y tu pipeline comercial
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        Configuración completa de Calendly
                      </h3>
                      <p className="text-muted-foreground">
                        Tipos de citas, disponibilidades, recordatorios automáticos
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
                        Ajustes del CRM, plantillas de presupuestos, optimizaciones
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-sm text-amber-900">
                      <strong>Después de los 3 primeros meses:</strong> Modificaciones a 80€/hora. Alojamiento gratuito (Vercel) o ~20€/mes. Dominio a tu cargo (~12€/año).
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Après le Pro */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-background border-2">
                <div className="text-center space-y-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">
                    ¿Después del Pro?
                  </h2>
                  
                  <p className="text-lg text-muted-foreground">
                    ¿Necesitas un agente IA 24/7 para calificar automáticamente los prospectos? Añade el IA Upgrade. O pasa al Premium para la solución ultra-completa.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/ia-upgrade">
                        Ver IA Upgrade
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/premium">
                        Ver Pack Premium
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                Preguntas Frecuentes
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="pago" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Cómo funciona el pago del Pack Pro?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Pagas 30% (389€) al inicio para reservar tu proyecto. El 70% restante (908€) se paga cuando todo esté operativo: sitio web + CRM configurado + presupuestos IA funcionando. Sin cuotas mensuales.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="entrega" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Cuánto tarda la entrega completa?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    El Pack Pro se entrega en 10 días hábiles. Incluye sitio web completo, CRM configurado con tus clientes, sistema de presupuestos IA operativo, y Calendly Premium integrado. Todo listo para automatizar tu comercial.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="crm" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Cómo funciona el CRM incluido?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    El CRM simple te permite gestionar contactos, leads y oportunidades en un solo lugar. Sincronización automática con WhatsApp, email y Calendly. Te entregamos el sistema configurado y te formamos en su uso (30 min sesión incluida).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="presupuestos-ia" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Qué son los presupuestos IA semi-automáticos?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    El sistema genera borradores de presupuestos basados en tus servicios y tarifas. Tú revisas, ajustas si es necesario, y envías. Ahorra 70% del tiempo vs hacerlos manualmente. Configurable según tu sector.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="kit-digital" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿El Kit Digital está incluido en el precio?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sí. Te ayudamos con la tramitación del Kit Digital (subvención de hasta 2000€ del gobierno español). Si eres elegible, puedes recuperar parte o toda la inversión. Te guiamos en todo el proceso.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="propiedad" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿El CRM y las integraciones son míos también?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sí. Recibes el código completo: sitio web + CRM + sistema de presupuestos + todas las integraciones. 100% tuyo, sin dependencias. Puedes exportar tus datos, modificar el sistema, o migrar a otro hosting cuando quieras.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="diferencia-esencial" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Vale la pena vs el Pack Esencial?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Si gestionas +10 consultas/semana, sí. El CRM evita perder leads, los presupuestos IA aceleran cierres, y Calendly elimina el ping-pong de emails. Recuperas la inversión con 2-3 clientes adicionales captados.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
                ¿Listo para automatizar?
              </h2>
              
              <p className="text-lg md:text-xl opacity-90">
                El Pack Pro es la solución más popular. Reserva una llamada para empezar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-base font-semibold" asChild>
                  <Link href="https://calendly.com/webparaautonomos" target="_blank">
                    <Calendar className="mr-2 h-5 w-5" />
                    Reservar llamada
                  </Link>
                </Button>
                <Button size="lg" className="text-base font-semibold bg-[#25D366] hover:bg-[#20BA5A] text-white border-0" asChild>
                  <Link href="https://wa.me/34711248274?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20Pack%20Pro" target="_blank">
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