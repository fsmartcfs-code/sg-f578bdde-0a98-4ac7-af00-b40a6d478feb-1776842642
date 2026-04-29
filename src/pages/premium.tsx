import Link from "next/link";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X, ArrowLeft, Calendar, MessageCircle, Bot, Sparkles, Crown, Zap, TrendingUp } from "lucide-react";

export default function PremiumPage() {
  return (
    <>
      <SEO
        title="Pack Premium 1997€ sin IVA - Solución Completa Sitio + IA + CRM"
        description="La solución experta: Sitio profesional + Agente IA avanzado + CRM avanzado + Coaching completo. Externaliza tu comercial completamente. Sin cuotas mensuales."
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
          <div className="container">
            <Link 
              href="/#comparacion" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a comparación
            </Link>

            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-4 py-2 border-0">
                SOLUCIÓN VIP · SIN CUOTAS MENSUALES
              </Badge>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
                Pack Premium
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground">
                Solución Completa (1997€ sin IVA)
              </p>

              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl md:text-6xl font-heading font-bold text-primary">1997€</span>
                <span className="text-xl text-muted-foreground">sin IVA</span>
              </div>

              <p className="text-sm text-muted-foreground">
                Pago: 50% al inicio + 50% al finalizar
              </p>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Sitio + Agente IA + CRM Avanzado. Sin cuotas mensuales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <div className="text-3xl text-muted-foreground line-through">
                  2997€
                </div>
                <Button size="lg" className="text-base font-semibold" asChild>
                  <Link href="https://calendly.com/webparaautonomos" target="_blank">
                    <Calendar className="mr-2 h-5 w-5" />
                    Reservar llamada discovery
                  </Link>
                </Button>
                <Button size="lg" className="text-base font-semibold bg-[#25D366] hover:bg-[#20BA5A] text-white border-0" asChild>
                  <Link href="https://wa.me/34711248274?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20Pack%20Premium" target="_blank">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Escribir por WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ¿Para quién es? */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 border-2 border-amber-200 bg-gradient-to-br from-amber-50/50 to-background">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shrink-0">
                    <Crown className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                      ¿Para quién es?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Quieres la solución experta: una web ultra-completa, un agente de IA que hace el trabajo comercial por ti, un CRM que lo gestiona todo. Pagas una vez y tienes una máquina comercial.
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
                Qué incluye el Pack Premium
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Check,
                    title: "Todo del Pack Pro",
                    description: "Sitio + CRM + Presupuestos IA + Kit Digital + Calendly Premium"
                  },
                  {
                    icon: Check,
                    title: "Agente IA conversacional avanzado",
                    description: "Dispatcher 24/7 con cualificación avanzada y escenarios personalizados"
                  },
                  {
                    icon: Check,
                    title: "Automatización completa de presupuestos",
                    description: "Presupuestos generados y enviados casi sin intervención humana"
                  },
                  {
                    icon: Check,
                    title: "CRM avanzado",
                    description: "Pipeline completo, previsión simple, automatización de recordatorios"
                  },
                  {
                    icon: Check,
                    title: "Integraciones personalizadas",
                    description: "Conecta tus herramientas existentes (facturación, contabilidad, etc.)"
                  },
                  {
                    icon: Check,
                    title: "Coaching inicial completo",
                    description: "Formación en profundidad sobre cada herramienta y proceso"
                  },
                  {
                    icon: Check,
                    title: "Socio experto dedicado",
                    description: "Un experto dedicado para gestionar la complejidad de tu proyecto"
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

        {/* Caso de uso completo */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-8">
                Caso de uso completo
              </h2>
              
              <Card className="p-8 md:p-12 border-2">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary">
                      🚿
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        Ejemplo fontanero completo
                      </h3>
                      <p className="text-muted-foreground">
                        Automatización comercial de principio a fin
                      </p>
                    </div>
                  </div>

                  <div className="pl-14 space-y-4 border-l-2 border-primary/20">
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">1.</span>
                      <p className="text-sm text-muted-foreground">
                        <strong>Cliente contacta vía WhatsApp</strong> → Bot IA toma el control
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">2.</span>
                      <p className="text-sm text-muted-foreground">
                        <strong>Bot cualifica automáticamente</strong>: tipo de problema, urgencia, zona, fotos
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">3.</span>
                      <p className="text-sm text-muted-foreground">
                        <strong>Presupuesto generado automáticamente</strong> basado en la cualificación
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">4.</span>
                      <p className="text-sm text-muted-foreground">
                        <strong>Horario propuesto vía Calendly</strong> según disponibilidades reales
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">5.</span>
                      <p className="text-sm text-muted-foreground">
                        <strong>Cita confirmada automáticamente</strong> en tu agenda + recordatorios SMS
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">6.</span>
                      <p className="text-sm text-muted-foreground">
                        <strong>CRM actualiza el historial del cliente</strong> y el pipeline comercial
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">7.</span>
                      <p className="text-sm text-muted-foreground">
                        <strong>Recordatorios automáticos</strong> si no hay respuesta en 48h
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-4 mt-6">
                    <p className="text-sm text-foreground text-center font-medium">
                      💪 <strong>Tú te concentras en la prestación, no en la administración.</strong> La IA y el CRM gestionan todo.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Propiedad del Sitio */}
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Solución Completa, 100% Tuya
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <Card className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Check className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-heading text-xl font-bold">Propiedad Total</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Web + Agente IA + CRM Avanzado + Integraciones: código completo entregado tras pago final. 
                      Colaboración con experto, pero la tecnología es 100% tuya.
                    </p>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-destructive/10 rounded-lg">
                        <X className="h-6 w-6 text-destructive" />
                      </div>
                      <h3 className="font-heading text-xl font-bold">No Como Agencias Premium</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Agencias premium cobran 500-2000€/mes indefinidamente y mantienen control perpetuo. 
                      Nosotros: inversión única, independencia permanente.
                    </p>
                  </div>
                </Card>
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
                        Duración de realización: ~15-20 días
                      </h3>
                      <p className="text-muted-foreground">
                        Configuración completa + optimización + pruebas en profundidad
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        Socio experto para la complejidad
                      </h3>
                      <p className="text-muted-foreground">
                        Un experto dedicado gestiona todo tu proyecto de A a Z
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        Todo pre-configurado y optimizado
                      </h3>
                      <p className="text-muted-foreground">
                        Entregado operacional: escenarios IA, pipeline CRM, plantillas de presupuestos
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
                        Optimizaciones, ajustes ilimitados durante los 3 primeros meses
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        Formación completa sobre cada herramienta
                      </h3>
                      <p className="text-muted-foreground">
                        Coaching en profundidad para dominar todo el stack
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-900">
                      <strong>Nota:</strong> La duración puede aumentar según la complejidad. Se requiere una llamada de discovery para aclarar el alcance exacto.
                    </p>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-sm text-amber-900">
                      <strong>Después de los 3 meses:</strong> Modificaciones a 80€/hora. Alojamiento gratuito (Vercel) o ~20€/mes. Dominio a tu cargo (~12€/año).
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Ventaja Premium */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50/50 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 border-2 border-amber-200">
                <div className="text-center space-y-6">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mx-auto">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">
                    Ventaja Premium
                  </h2>
                  
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Es la solución para quien quiere realmente <strong>externalizar su comercial</strong>. Puedes vender, puedes prospectar, puedes concentrarte en tu oficio. La IA y la administración, es cosa del pasado.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 pt-6">
                    <div className="p-4 bg-white rounded-lg border border-amber-200">
                      <div className="text-3xl font-heading font-bold text-primary mb-1">24/7</div>
                      <div className="text-sm text-muted-foreground">Disponibilidad IA</div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-amber-200">
                      <div className="text-3xl font-heading font-bold text-primary mb-1">-80%</div>
                      <div className="text-sm text-muted-foreground">Tiempo admin</div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-amber-200">
                      <div className="text-3xl font-heading font-bold text-primary mb-1">VIP</div>
                      <div className="text-sm text-muted-foreground">Coaching completo</div>
                    </div>
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
                    ¿Cómo funciona el pago del Pack Premium?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Pagas 50% (999€) al inicio tras la llamada discovery. El 50% restante (998€) se paga cuando toda la solución esté operativa: web + agente IA + CRM avanzado + integraciones. Sin cuotas mensuales ocultas.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="discovery" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Qué es la llamada discovery?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Una sesión de 60-90 min para entender tu negocio, procesos comerciales, y objetivos. Analizamos qué automatizar, cómo configurar el agente IA, y qué integraciones necesitas. Es obligatoria para garantizar que el Premium es adecuado para ti.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="entrega" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Cuánto tarda la implementación completa?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    15-20 días hábiles según complejidad. Incluye desarrollo completo, configuración de todos los sistemas, integraciones personalizadas, migración de datos si es necesario, y 2 sesiones de coaching (4 horas total). Entregamos todo operativo.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="vs-pro" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Qué añade el Premium vs el Pack Pro?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Agente IA conversacional avanzado (vs solo presupuestos IA), CRM con automatización de seguimiento (vs CRM simple), presupuestos 100% automáticos (vs semi-automáticos), integraciones ilimitadas (vs básicas), y coaching comercial incluido. Es el Pro + automatización total.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="crm-avanzado" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Qué incluye el CRM avanzado?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Pipeline visual de oportunidades, seguimiento automático de leads, recordatorios inteligentes, historial completo de interacciones, reportes de conversión, y sincronización multi-canal (WhatsApp, email, Calendly, teléfono). Todo centralizado.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="coaching" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Qué incluye el coaching comercial?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    2 sesiones (4 horas total): optimización de procesos comerciales, estrategias de calificación de leads, configuración de flujos de automatización, análisis de métricas de conversión, y mejores prácticas. Te enseñamos a sacar el máximo provecho del sistema.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="propiedad" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Todo el sistema es 100% mío?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sí. Código completo entregado: web + agente IA + CRM avanzado + todas las integraciones. 100% tuyo. Colaboramos como expertos, pero la tecnología te pertenece. Sin dependencias perpetuas, sin cuotas obligatorias.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="roi" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Vale la pena la inversión de 1997€?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Si capturas +20 leads/mes y cierras >15% (3+ clientes/mes), sí. El sistema recupera leads perdidos, acelera cierres con presupuestos automáticos, y libera tiempo comercial. Típicamente se amortiza en 2-4 meses. Además, es una inversión única, no un gasto recurrente.
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
                ¿Listo para la solución completa?
              </h2>
              
              <p className="text-lg md:text-xl opacity-90">
                El Pack Premium está hecho para ti. Reserva una llamada de discovery para aclarar tu proyecto.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-base font-semibold" asChild>
                  <Link href="https://calendly.com/webparaautonomos" target="_blank">
                    <Calendar className="mr-2 h-5 w-5" />
                    Llamada discovery requerida
                  </Link>
                </Button>
                <Button size="lg" className="text-base font-semibold bg-[#25D366] hover:bg-[#20BA5A] text-white border-0" asChild>
                  <Link href="https://wa.me/34711248274?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20Pack%20Premium" target="_blank">
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