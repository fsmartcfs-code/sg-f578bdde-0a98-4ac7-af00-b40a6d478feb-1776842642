import Link from "next/link";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Calendar, MessageCircle, Sparkles, TrendingUp, Zap } from "lucide-react";

export default function ProPage() {
  return (
    <>
      <SEO
        title="Pack Pro 1097€ HT - CRM + Devis IA + Kit Digital"
        description="Tout l'Esencial + CRM + Devis IA semi-automatiques + Calendly Premium. La solution complète pour autónomos en croissance. Sin cuotas mensuales."
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
                MÁS POPULAR · SANS FRAIS MENSUELS
              </Badge>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
                Pack Pro
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground">
                Croissance avec CRM & Devis IA (1097€ HT)
              </p>

              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl md:text-6xl font-heading font-bold text-primary">1097€</span>
                <span className="text-xl text-muted-foreground">HT</span>
              </div>

              <p className="text-lg font-medium text-primary">
                Pago único · Sin cuotas mensuales
              </p>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tout l'Esencial + automatisation commerciale. Sans frais mensuels.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="text-base font-semibold" asChild>
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
                      ¿Qui c'est pour ?
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
                    description: "Site professionnel + Reviews + Portfolio + WhatsApp + Formulaire"
                  },
                  {
                    icon: Check,
                    title: "CRM simple",
                    description: "Suivi des clients, historique des échanges, gestion des opportunités"
                  },
                  {
                    icon: Check,
                    title: "Devis IA semi-automatiques",
                    description: "Génère des devis pré-remplis en quelques clics, gagne du temps"
                  },
                  {
                    icon: Check,
                    title: "Kit Digital inclus",
                    description: "Aide aux subventions Kit Digital (si applicable en Espagne)"
                  },
                  {
                    icon: Check,
                    title: "Formulaire avancé",
                    description: "Capture des données qualifiées avec champs personnalisés"
                  },
                  {
                    icon: Check,
                    title: "Intégration Calendly Premium",
                    description: "Prise de RDV automatisée, synchronisation agenda, rappels SMS"
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
                        Site + CRM opérationnel + Calendly configuré
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        CRM opérationnel dès le jour 1
                      </h3>
                      <p className="text-muted-foreground">
                        Pré-configuré avec tes services et ton pipeline commercial
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        Configuration Calendly complète
                      </h3>
                      <p className="text-muted-foreground">
                        Types de RDV, disponibilités, rappels automatiques
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
                        Ajustements du CRM, templates de devis, optimisations
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-sm text-amber-900">
                      <strong>Après les 3 premiers mois :</strong> Modifications à 80€/heure. Hébergement gratuit (Vercel) ou ~20€/mois. Domaine à ta charge (~12€/an).
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
                    Besoin d'un agent IA 24/7 pour qualifier automatiquement les prospects ? Ajoute l'IA Upgrade. Ou passe au Premium pour la solution ultra-complète.
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

        {/* CTA Final */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
                ¿Listo para automatizar?
              </h2>
              
              <p className="text-lg md:text-xl opacity-90">
                Le Pack Pro est la solution la plus populaire. Réserve un appel pour démarrer.
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