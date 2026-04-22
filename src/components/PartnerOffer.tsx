import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, TrendingUp, Users, Euro } from "lucide-react";

export function PartnerOffer() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 border-2 border-primary/20">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Handshake className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold">
                  Offre Partenaire / Apporteur d'affaires
                </h2>
                <p className="text-lg text-muted-foreground">
                  Vous connaissez des autónomos qui ont besoin d'une web professionnelle ? Recommandez-nous et gagnez une commission.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2 text-center">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg">Commission attractive</h3>
                  <p className="text-sm text-muted-foreground">
                    Jusqu'à 20% de commission sur chaque vente réalisée
                  </p>
                </div>

                <div className="space-y-2 text-center">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg">Réseau professionnel</h3>
                  <p className="text-sm text-muted-foreground">
                    Valorisez votre réseau en recommandant une solution de qualité
                  </p>
                </div>

                <div className="space-y-2 text-center">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <Euro className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg">Paiement rapide</h3>
                  <p className="text-sm text-muted-foreground">
                    Commission versée dès validation du projet client
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                <h4 className="font-heading font-bold text-lg">Comment ça marche ?</h4>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary shrink-0">1.</span>
                    <span>Vous nous présentez un client potentiel (autónomo, TPE)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary shrink-0">2.</span>
                    <span>Nous prenons contact et gérons toute la relation commerciale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary shrink-0">3.</span>
                    <span>Une fois le projet signé, vous recevez votre commission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary shrink-0">4.</span>
                    <span>Vous pouvez recommander autant de clients que vous voulez</span>
                  </li>
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="https://wa.me/34711248274?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20l%27offre%20partenaire" target="_blank">
                    Devenir partenaire
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="https://calendly.com/webparaautonomos" target="_blank">
                    Discuter du programme
                  </Link>
                </Button>
              </div>

              <p className="text-xs text-center text-muted-foreground">
                * Conditions applicables. Commission variable selon le pack vendu (Esencial, Pro, IA Upgrade, Premium).
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}