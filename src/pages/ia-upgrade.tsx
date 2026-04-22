import Link from "next/link";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Calendar, MessageCircle, Bot, TrendingUp, AlertCircle } from "lucide-react";

export default function IAUpgradePage() {
  return (
    <>
      <SEO
        title="IA Upgrade 997€ HT - Agent IA Conversationnel 24/7"
        description="Ajoute un agent IA dispatcher à ton site existant. Qualification automatique, CRM intégré, disponible 24/7. Sin cuotas mensuales."
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
              <Badge className="bg-primary hover:bg-primary text-primary-foreground font-semibold px-4 py-2">
                SANS FRAIS MENSUELS
              </Badge>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
                IA Upgrade
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground">
                Agent Conversationnel 24/7 (997€ HT)
              </p>

              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl md:text-6xl font-heading font-bold text-primary">997€</span>
                <span className="text-xl text-muted-foreground">sin IVA</span>
              </div>

              <p className="text-lg font-medium text-primary">
                40% al inicio + 60% al finalizar · Sin cuotas mensuales
              </p>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Añade automatización IA a tu sitio existente. Sin cuotas mensuales.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-xl mx-auto">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-900 text-left">
                    <strong>Prérequis :</strong> Tu dois avoir un site web fonctionnel (créé par toi, une agence, ou nous).
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="text-base font-semibold" asChild>
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

        {/* Qui c'est pour ? */}
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
                      ¿Qui c'est pour ?
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

        {/* Features détaillées */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                Qué incluye l'IA Upgrade
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Check,
                    title: "Agent IA Dispatcher 24/7",
                    description: "Qualifie et oriente les demandes automatiquement, même la nuit"
                  },
                  {
                    icon: Check,
                    title: "CRM simple automatisé",
                    description: "Trace toutes les conversations et enregistre les leads qualifiés"
                  },
                  {
                    icon: Check,
                    title: "Base de connaissance FAQ",
                    description: "L'agent répond aux questions fréquentes sur tes services"
                  },
                  {
                    icon: Check,
                    title: "Intégrations WhatsApp/Email",
                    description: "Notifie les demandes urgentes sur WhatsApp en temps réel"
                  },
                  {
                    icon: Check,
                    title: "Configuration sans code",
                    description: "Interface simple pour configurer les réponses de l'agent"
                  },
                  {
                    icon: Check,
                    title: "Formation incluse",
                    description: "Appel de formation pour maîtriser l'outil rapidement"
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

        {/* Cas d'usage concret */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-8">
                Cas d'usage concret
              </h2>
              
              <Card className="p-8 md:p-12 border-2">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary">
                      💬
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        Exemple : Un plombier
                      </h3>
                      <p className="text-muted-foreground">
                        Le client demande sur le chat : <em>"Tengo una fuga urgente en la cocina"</em>
                      </p>
                    </div>
                  </div>

                  <div className="pl-14 space-y-4 border-l-2 border-primary/20">
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">1.</span>
                      <p className="text-sm text-muted-foreground">
                        L'agent IA demande automatiquement : <em>"¿En qué zona estás?"</em>
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">2.</span>
                      <p className="text-sm text-muted-foreground">
                        Vérifie ta disponibilité dans ton agenda Calendly
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">3.</span>
                      <p className="text-sm text-muted-foreground">
                        Propose un créneau : <em>"Puedo pasar mañana a las 10h"</em>
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">4.</span>
                      <p className="text-sm text-muted-foreground">
                        T'envoie une alerte WhatsApp : <em>"Cliente urgente: fuga en cocina, zona X, confirmado 10h"</em>
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">5.</span>
                      <p className="text-sm text-muted-foreground">
                        Le client reçoit la confirmation automatiquement
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-4 mt-6">
                    <p className="text-sm text-foreground text-center font-medium">
                      🌙 <strong>Pendant ce temps, tu dors.</strong> L'agent IA a tout géré.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Ce qui est inclus */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                Ce qui est inclus
              </h2>

              <Card className="p-8 md:p-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        Durée de réalisation : ~10 jours
                      </h3>
                      <p className="text-muted-foreground">
                        Intégration complète sur ton site existant + configuration
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        Configuration complète de l'agent
                      </h3>
                      <p className="text-muted-foreground">
                        Base de connaissance, scénarios de qualification, intégrations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        Formation rapide incluse
                      </h3>
                      <p className="text-muted-foreground">
                        Appel de formation pour maîtriser l'outil et ajuster les réponses
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        3 mois de modifications gratuites
                      </h3>
                      <p className="text-muted-foreground">
                        Ajustements des scénarios, réponses, intégrations
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-sm text-amber-900">
                      <strong>Prérequis :</strong> Site web fonctionnel requis. Après les 3 mois : modifications à 80€/heure.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Après l'IA Upgrade */}
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
                    Veux la solution ultra-complète ? Passe au Pack Premium : IA avancé + CRM avancé + support VIP 24/7.
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
                Ajoute un agent IA à ton site existant. Réserve un appel pour discuter de ton projet.
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