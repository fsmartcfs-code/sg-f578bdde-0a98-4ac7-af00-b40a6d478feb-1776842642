import Link from "next/link";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Calendar, MessageCircle, Zap, TrendingUp } from "lucide-react";

export default function EsencialPage() {
  return (
    <>
      <SEO
        title="Pack Esencial 697€ HT - Web Profesional Para Autónomos"
        description="Démarrage simple, impact professionnel. Site web moderne + Reviews + Portfolio. Sin cuotas mensuales. 3 meses modificaciones gratis."
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
                Pack Esencial
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground">
                Tu web profesional a 697€ HT
              </p>

              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl md:text-6xl font-heading font-bold text-primary">697€</span>
                <span className="text-xl text-muted-foreground">HT</span>
              </div>

              <p className="text-lg font-medium text-primary">
                Pago único · Sin cuotas mensuales
              </p>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Démarrage simple, impact professionnel. Sans frais mensuels.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="text-base font-semibold" asChild>
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

        {/* Qui c'est pour ? */}
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
                      ¿Qui c'est pour ?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Eres independiente o TPE, quieres una vitrina profesional en línea sin arruinarte. Sin complejidad innecesaria, solo lo esencial.
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
                Qué incluye el Pack Esencial
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Check,
                    title: "Site web professionnel",
                    description: "Design moderne et responsive, optimisé pour la conversion"
                  },
                  {
                    icon: Check,
                    title: "Widget Reviews",
                    description: "Affiche tes avis clients Google/Trustpilot pour générer confiance"
                  },
                  {
                    icon: Check,
                    title: "Portfolio ou galerie",
                    description: "Montre tes meilleurs travaux et projets réalisés"
                  },
                  {
                    icon: Check,
                    title: "Formulaire de contact",
                    description: "Capture des leads qualifiés avec formulaire avancé"
                  },
                  {
                    icon: Check,
                    title: "Intégration WhatsApp",
                    description: "Bouton WhatsApp visible pour contact immédiat"
                  },
                  {
                    icon: Check,
                    title: "Hébergement compris",
                    description: "3 premiers mois d'hébergement inclus dans le prix"
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
                        Durée de réalisation : ~7 jours
                      </h3>
                      <p className="text-muted-foreground">
                        De la commande à la mise en ligne complète
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
                        Jusqu'à 10 modifications pendant les 3 premiers mois
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        Hébergement compris (3 mois)
                      </h3>
                      <p className="text-muted-foreground">
                        Après : hébergement gratuit (Vercel) ou ~20€/mois ailleurs
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-sm text-amber-900">
                      <strong>Après les 3 premiers mois :</strong> Les modifications additionnelles sont facturées à 80€/heure. Le domaine est à ta charge (~12€/an).
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Après l'Esencial */}
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
                    Besoin de plus ? Découvre le Pack Pro avec CRM et devis IA, ou upgrade vers l'IA Upgrade pour l'automatisation.
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
                Reserva una llamada o escríbenos por WhatsApp para empezar tu proyecto.
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