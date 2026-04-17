import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Calendar, ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center space-y-8 border-2 border-primary shadow-2xl">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
              Convierte el tráfico en conversaciones reales
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada bloque está pensado para empujar al usuario a reservar, escribir o pedir presupuesto, sin distraerlo con demasiada información.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-base font-semibold group" asChild>
              <Link href="https://wa.me/34600000000" target="_blank">
                <MessageCircle className="mr-2 h-5 w-5" />
                Quiero más clientes por WhatsApp
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base font-semibold border-2 group"
              asChild
            >
              <Link href="https://calendly.com/webparaautonomos" target="_blank">
                <Calendar className="mr-2 h-5 w-5" />
                Reservar llamada ahora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Sin permanencia.</strong> Sin letra pequeña. Sin sorpresas.
              <br />
              Solo una web que funciona para captar clientes desde el día 1.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}