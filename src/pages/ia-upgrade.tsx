import Link from "next/link";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Calendar, MessageCircle, Bot, TrendingUp, AlertCircle } from "lucide-react";

export default function IAUpgradePage() {
  return (
    <>
      <SEO
        title="IA Upgrade 997€ sin IVA - Agente IA Conversacional 24/7"
        description="Añade un agente IA dispatcher a tu sitio existente. Cualificación automática, CRM integrado, disponible 24/7. Sin cuotas mensuales."
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="mb-4">IA UPGRADE</Badge>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
                Añade un Agente IA 24/7 a tu Web
              </h1>
              <p className="text-xl text-muted-foreground">
                Para quien ya tiene sitio web y quiere automatización inteligente
              </p>
              <div className="flex flex-col items-center gap-3 pt-4">
                <div className="text-3xl text-muted-foreground line-through">
                  1497€
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl md:text-6xl font-bold text-primary">997€</span>
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
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                      ¿Para quién es?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Ya tienes un sitio web (creado por otra persona o hace tiempo) y quieres añadir un agente de IA conversacional que responda 24/7 a tus clientes potenciales. Imagina un vendedor que nunca duerme.
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
                Qué incluye el IA Upgrade
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Check,
                    title: "Agente IA Dispatcher 24/7",
                    description: "Cualifica y orienta las solicitudes automáticamente, incluso de noche"
                  },
                  {
                    icon: Check,
                    title: "CRM simple automatizado",
                    description: "Rastrea todas las conversaciones y registra los leads cualificados"
                  },
                  {
                    icon: Check,
                    title: "Base de conocimiento FAQ",
                    description: "El agente responde a preguntas frecuentes sobre tus servicios"
                  },
                  {
                    icon: Check,
                    title: "Integraciones WhatsApp/Email",
                    description: "Notifica las solicitudes urgentes en WhatsApp en tiempo real"
                  },
                  {
                    icon: Check,
                    title: "Configuración sin código",
                    description: "Interfaz simple para configurar las respuestas del agente"
                  },
                  {
                    icon: Check,
                    title: "Formación incluida",
                    description: "Llamada de formación para dominar la herramienta rápidamente"
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

        {/* Caso de uso concreto */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-8">
                Caso de uso concreto
              </h2>
              
              <Card className="p-8 md:p-12 border-2">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary">
                      💬
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        Ejemplo: Un fontanero
                      </h3>
                      <p className="text-muted-foreground">
                        El cliente pregunta en el chat: <em>"Tengo una fuga urgente en la cocina"</em>
                      </p>
                    </div>
                  </div>

                  <div className="pl-14 space-y-4 border-l-2 border-primary/20">
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">1.</span>
                      <p className="text-sm text-muted-foreground">
                        El agente IA pregunta automáticamente: <em>"¿En qué zona estás?"</em>
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">2.</span>
                      <p className="text-sm text-muted-foreground">
                        Verifica tu disponibilidad en tu agenda Calendly
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">3.</span>
                      <p className="text-sm text-muted-foreground">
                        Propone un horario: <em>"Puedo pasar mañana a las 10h"</em>
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">4.</span>
                      <p className="text-sm text-muted-foreground">
                        Te envía una alerta WhatsApp: <em>"Cliente urgente: fuga en cocina, zona X, confirmado 10h"</em>
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">5.</span>
                      <p className="text-sm text-muted-foreground">
                        El cliente recibe la confirmación automáticamente
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-4 mt-6">
                    <p className="text-sm text-foreground text-center font-medium">
                      🌙 <strong>Mientras tanto, tú duermes.</strong> El agente IA ha gestionado todo.
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
                Tu Agente IA, Tu Propiedad
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <Card className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Check className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-heading text-xl font-bold">Código Completo</h3>
                    </div>
                    <p className="text-muted-foreground">
                      El agente IA + integraciones + CRM: todo el código es tuyo tras el pago final. 
                      Independencia tecnológica total.
                    </p>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-destructive/10 rounded-lg">
                        <X className="h-6 w-6 text-destructive" />
                      </div>
                      <h3 className="font-heading text-xl font-bold">No Como SaaS Externos</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Plataformas SaaS te cobran mensualmente para siempre. Si dejas de pagar, pierdes todo. 
                      Nosotros: una inversión, propiedad permanente.
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
                        Duración de realización: ~10 días
                      </h3>
                      <p className="text-muted-foreground">
                        Integración completa en tu sitio existente + configuración
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        Configuración completa del agente
                      </h3>
                      <p className="text-muted-foreground">
                        Base de conocimiento, escenarios de cualificación, integraciones
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        Formación rápida incluida
                      </h3>
                      <p className="text-muted-foreground">
                        Llamada de formación para dominar la herramienta y ajustar las respuestas
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
                        Ajustes de los escenarios, respuestas, integraciones
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-sm text-amber-900">
                      <strong>Requisito previo:</strong> Sitio web funcional requerido. Después de los 3 meses: modificaciones a 80€/hora.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Después del IA Upgrade */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-background border-2">
                <div className="text-center space-y-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">
                    ¿Después del IA Upgrade?
                  </h2>
                  
                  <p className="text-lg text-muted-foreground">
                    ¿Quieres la solución ultra-completa? Pasa al Pack Premium: IA avanzado + CRM avanzado + coaching completo.
                  </p>

                  <div className="flex justify-center pt-4">
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

        {/* CTA Final */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
                ¿Listo para automatizar 24/7?
              </h2>
              
              <p className="text-lg md:text-xl opacity-90">
                Añade un agente IA a tu sitio existente. Reserva una llamada para discutir tu proyecto.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-base font-semibold" asChild>
                  <Link href="https://calendly.com/webparaautonomos" target="_blank">
                    <Calendar className="mr-2 h-5 w-5" />
                    Reservar llamada
                  </Link>
                </Button>
                <Button size="lg" className="text-base font-semibold bg-[#25D366] hover:bg-[#20BA5A] text-white border-0" asChild>
                  <Link href="https://wa.me/34711248274?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20IA%20Upgrade" target="_blank">
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