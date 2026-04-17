import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MessageCircle, TrendingUp, Users, Zap, Target } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative">
            {/* Plombier détouré intégré au titre */}
            <div className="relative">
              <div className="absolute -right-12 -top-16 md:-right-20 md:-top-24 lg:-right-32 lg:-top-32 w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] z-0">
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop"
                    alt="Plomero profesional"
                    width={800}
                    height={800}
                    className="object-cover rounded-full opacity-80 mix-blend-multiply scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/30 to-background rounded-full"></div>
                </div>
              </div>
              
              <div className="relative z-10 space-y-4">
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
                  ¡Consigue más clientes,{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">no solo una web bonita!</span>
                    <div className="absolute -inset-2 bg-primary/10 -skew-y-1 rounded-lg -z-10"></div>
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl">
                  Web Para Autónomos pensada para convertir visitas en contactos: botones claros, prueba social visible y portfolio para generar confianza desde el primer scroll.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <Button size="lg" className="text-base font-semibold shadow-lg hover:shadow-xl transition-shadow" asChild>
                <Link href="https://calendly.com/webparaautonomos" target="_blank">
                  <Calendar className="mr-2 h-5 w-5" />
                  Reservar llamada
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base font-semibold border-2 shadow-sm hover:shadow-md transition-shadow" asChild>
                <Link href="https://wa.me/34600000000" target="_blank">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Escribir por WhatsApp
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 items-center text-sm font-medium text-muted-foreground relative z-10">
              <span className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                + Leads
              </span>
              <span className="text-border">·</span>
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                + Confianza
              </span>
              <span className="text-border">·</span>
              <span className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                + Respuestas rápidas
              </span>
              <span className="text-border">·</span>
              <span className="flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                + Cierres
              </span>
            </div>
          </div>

          <div className="lg:pl-8 relative z-10">
            <Card className="p-8 space-y-6 border-2 border-primary shadow-xl hover:shadow-2xl transition-shadow">
              <div className="space-y-2">
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-destructive hover:bg-destructive text-destructive-foreground font-semibold">
                    Oferta Limitada · 7 días
                  </Badge>
                  <Badge variant="outline" className="border-primary text-primary font-semibold">
                    Pago único
                  </Badge>
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold">
                  Web Profesional Para Autónomos
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-heading font-bold text-primary">497€</span>
                  <span className="text-2xl text-muted-foreground line-through">697€</span>
                </div>

                <ul className="space-y-3 text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Web Profesional Para Autónomos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Widget Reviews (Google/Trustpilot)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Sección Portfolio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">✓</span>
                    <span className="font-semibold">La web es tuya forever · Sin cuotas mensuales</span>
                  </li>
                </ul>
              </div>

              <Button size="lg" className="w-full text-base font-semibold" asChild>
                <Link href="https://calendly.com/webparaautonomos" target="_blank">
                  Reservar ahora
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}