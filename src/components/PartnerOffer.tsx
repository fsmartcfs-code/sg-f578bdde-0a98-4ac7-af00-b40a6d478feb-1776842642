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
                  Oferta Partner / Aportador de clientes
                </h2>
                <p className="text-lg text-muted-foreground">
                  ¿Conoces autónomos que necesitan una web profesional? Recomiéndanos y gana una comisión.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2 text-center">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg">Comisión atractiva</h3>
                  <p className="text-sm text-muted-foreground">
                    Hasta 20% de comisión en cada venta realizada
                  </p>
                </div>

                <div className="space-y-2 text-center">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg">Red profesional</h3>
                  <p className="text-sm text-muted-foreground">
                    Valoriza tu red recomendando una solución de calidad
                  </p>
                </div>

                <div className="space-y-2 text-center">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <Euro className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg">Pago rápido</h3>
                  <p className="text-sm text-muted-foreground">
                    Comisión pagada tras validación del proyecto cliente
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                <h4 className="font-heading font-bold text-lg">¿Cómo funciona?</h4>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary shrink-0">1.</span>
                    <span>Nos presentas un cliente potencial (autónomo, pyme)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary shrink-0">2.</span>
                    <span>Tomamos contacto y gestionamos toda la relación comercial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary shrink-0">3.</span>
                    <span>Una vez firmado el proyecto, recibes tu comisión</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary shrink-0">4.</span>
                    <span>Puedes recomendar tantos clientes como quieras</span>
                  </li>
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="https://wa.me/34711248274?text=Hola%2C%20estoy%20interesado%20en%20la%20oferta%20partner" target="_blank">
                    Hacerse partner
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="https://calendly.com/webparaautonomos" target="_blank">
                    Hablar del programa
                  </Link>
                </Button>
              </div>

              <p className="text-xs text-center text-muted-foreground">
                * Condiciones aplicables. Comisión variable según el pack vendido (Esencial, Pro, IA Upgrade, Premium).
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}