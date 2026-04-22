import Link from "next/link";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Calendar, MessageCircle, Crown, TrendingUp, Sparkles } from "lucide-react";

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

              <p className="text-lg font-medium text-primary">
                40% al inicio + 60% al finalizar · Sin cuotas mensuales
              </p>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Sitio + Agente IA + CRM Avanzado. Sin cuotas mensuales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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

        {/* CTA Final */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
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