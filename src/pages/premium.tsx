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
        title="Pack Premium 1997€ HT - Solution Complète Site + IA + CRM"
        description="La solution expert : Site professionnel + Agent IA avancé + CRM avancé + Support VIP 24/7. Externalise ton commercial complètement. Sin cuotas mensuales."
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
                SOLUTION VIP · SANS FRAIS MENSUELS
              </Badge>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
                Pack Premium
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground">
                Solution Complète (1997€ HT)
              </p>

              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl md:text-6xl font-heading font-bold text-primary">1997€</span>
                <span className="text-xl text-muted-foreground">HT</span>
              </div>

              <p className="text-lg font-medium text-primary">
                Pago único · Sin cuotas mensuales
              </p>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Site + Agent IA + CRM Avancé + Support VIP. Sans frais mensuels.
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

        {/* Qui c'est pour ? */}
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
                      ¿Qui c'est pour ?
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

        {/* Features détaillées */}
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
                    description: "Site + CRM + Devis IA + Kit Digital + Calendly Premium"
                  },
                  {
                    icon: Check,
                    title: "Agent IA conversationnel avancé",
                    description: "Dispatcher 24/7 avec qualification poussée et scénarios personnalisés"
                  },
                  {
                    icon: Check,
                    title: "Automatisation complète des devis",
                    description: "Devis générés et envoyés quasi sans intervention humaine"
                  },
                  {
                    icon: Check,
                    title: "CRM avancé",
                    description: "Pipeline complet, forecasting simple, automatisation des relances"
                  },
                  {
                    icon: Check,
                    title: "Intégrations personnalisées",
                    description: "Connecte tes outils existants (facturation, compta, etc.)"
                  },
                  {
                    icon: Check,
                    title: "Support VIP 24/7",
                    description: "Priorité absolue, réponse en moins de 2h, assistance dédiée"
                  },
                  {
                    icon: Check,
                    title: "Coaching initial complet",
                    description: "Formation approfondie sur chaque outil et process"
                  },
                  {
                    icon: Check,
                    title: "Partenaire expert dédié",
                    description: "Un expert dédié pour gérer la complexité de ton projet"
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

        {/* Cas d'usage complet */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-8">
                Cas d'usage complet
              </h2>
              
              <Card className="p-8 md:p-12 border-2">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary">
                      🚿
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        Exemple plombier complet
                      </h3>
                      <p className="text-muted-foreground">
                        Automatisation commerciale de bout en bout
                      </p>
                    </div>
                  </div>

                  <div className="pl-14 space-y-4 border-l-2 border-primary/20">
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">1.</span>
                      <p className="text-sm text-muted-foreground">
                        <strong>Client contacte via WhatsApp</strong> → Bot IA prend le relais
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">2.</span>
                      <p className="text-sm text-muted-foreground">
                        <strong>Bot qualifie automatiquement</strong> : type de problème, urgence, zone, photos
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">3.</span>
                      <p className="text-sm text-muted-foreground">
                        <strong>Devis généré automatiquement</strong> basé sur la qualification
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">4.</span>
                      <p className="text-sm text-muted-foreground">
                        <strong>Créneau proposé via Calendly</strong> selon disponibilités réelles
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">5.</span>
                      <p className="text-sm text-muted-foreground">
                        <strong>RDV confirmé automatiquement</strong> dans ton agenda + rappels SMS
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">6.</span>
                      <p className="text-sm text-muted-foreground">
                        <strong>CRM met à jour l'historique client</strong> et le pipeline commercial
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary shrink-0">7.</span>
                      <p className="text-sm text-muted-foreground">
                        <strong>Relances automatiques</strong> si pas de réponse en 48h
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-4 mt-6">
                    <p className="text-sm text-foreground text-center font-medium">
                      💪 <strong>Tu te concentres sur la prestation, pas sur l'admin.</strong> L'IA et le CRM gèrent tout.
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
                        Durée de réalisation : ~15-20 jours
                      </h3>
                      <p className="text-muted-foreground">
                        Configuration complète + optimisation + tests approfondis
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        Partenaire expert pour la complexité
                      </h3>
                      <p className="text-muted-foreground">
                        Un expert dédié gère l'ensemble de ton projet de A à Z
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        Tout pré-configuré et optimisé
                      </h3>
                      <p className="text-muted-foreground">
                        Livré opérationnel : scénarios IA, pipeline CRM, templates devis
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        3 mois de support VIP gratuit
                      </h3>
                      <p className="text-muted-foreground">
                        Assistance prioritaire, optimisations, ajustements illimités
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        Formation complète sur chaque outil
                      </h3>
                      <p className="text-muted-foreground">
                        Coaching approfondi pour maîtriser toute la stack
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-900">
                      <strong>Note :</strong> La durée peut augmenter selon la complexité. Un appel de discovery est requis pour clarifier le scope exact.
                    </p>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-sm text-amber-900">
                      <strong>Après les 3 mois :</strong> Support VIP maintenu à tarif préférentiel. Hébergement gratuit (Vercel) ou ~20€/mois. Domaine à ta charge (~12€/an).
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Avantage Premium */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50/50 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 border-2 border-amber-200">
                <div className="text-center space-y-6">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mx-auto">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">
                    Avantage Premium
                  </h2>
                  
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    C'est la solution pour qui veut vraiment <strong>externaliser son commercial</strong>. Tu peux vendre, tu peux prospecter, tu peux te concentrer sur ton métier. L'IA et l'admin, c'est du passé.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 pt-6">
                    <div className="p-4 bg-white rounded-lg border border-amber-200">
                      <div className="text-3xl font-heading font-bold text-primary mb-1">24/7</div>
                      <div className="text-sm text-muted-foreground">Disponibilité IA</div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-amber-200">
                      <div className="text-3xl font-heading font-bold text-primary mb-1">-80%</div>
                      <div className="text-sm text-muted-foreground">Temps admin</div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-amber-200">
                      <div className="text-3xl font-heading font-bold text-primary mb-1">VIP</div>
                      <div className="text-sm text-muted-foreground">Support prioritaire</div>
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
                Le Pack Premium est fait pour toi. Réserve un appel de discovery pour clarifier ton projet.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-base font-semibold" asChild>
                  <Link href="https://calendly.com/webparaautonomos" target="_blank">
                    <Calendar className="mr-2 h-5 w-5" />
                    Appel discovery requis
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