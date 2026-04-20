import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MessageCircle, TrendingUp, Users, Zap, Target } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-12 md:py-16 lg:py-24 overflow-hidden bg-white">
      {/* Image cachée sur mobile, visible seulement sur desktop */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-[5]" style={{ transform: 'translateX(-150px) translateY(190px)' }}>
        <div className="relative w-[900px] h-[1100px] mx-auto">
          <Image
            src="/semfundo.png"
            alt="Plomero profesional"
            width={900}
            height={1100}
            className="object-contain"
            style={{
              imageRendering: 'crisp-edges',
              filter: 'contrast(1.15) brightness(1.02) saturate(1.1)'
            }}
            priority
          />
        </div>
      </div>

      <div className="container relative z-10">
        {/* Layout mobile: tout en colonne */}
        <div className="space-y-8">
          {/* Titre et CTAs */}
          <div className="space-y-6 lg:max-w-xl">
            <div className="space-y-4">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.8)' }}>
                ¡Consigue <span className="text-primary">más clientes</span>, no solo una web bonita!
              </h1>

              {/* Image visible sur mobile uniquement - juste après le titre */}
              <div className="lg:hidden flex justify-center -mx-4 py-6">
                <div className="relative w-full max-w-[500px]">
                  <Image
                    src="/semfundo.png"
                    alt="Plomero profesional"
                    width={500}
                    height={625}
                    className="object-contain w-full h-auto"
                    style={{
                      imageRendering: 'crisp-edges',
                      filter: 'contrast(1.15) brightness(1.02) saturate(1.1)'
                    }}
                    priority
                  />
                </div>
              </div>

              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2), 0 0 10px rgba(255, 255, 255, 0.6)' }}>
                Web Para Autónomos pensada para convertir visitas en contactos: botones claros, prueba social visible y portfolio para generar confianza desde el primer scroll.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base font-semibold shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto" asChild>
                <Link href="https://calendly.com/webparaautonomos" target="_blank">
                  <Calendar className="mr-2 h-5 w-5" />
                  Reservar llamada
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base font-semibold border-2 shadow-sm hover:shadow-md transition-shadow w-full sm:w-auto" asChild>
                <Link href="https://wa.me/34600000000" target="_blank">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Escribir por WhatsApp
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 items-center text-sm font-medium text-muted-foreground">
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

          {/* Image visible sur mobile uniquement */}
          <div className="lg:hidden flex justify-center -mx-4">
            <div className="relative w-full max-w-[400px]">
              <Image
                src="/semfundo.png"
                alt="Plomero profesional"
                width={400}
                height={500}
                className="object-contain w-full h-auto"
                style={{
                  imageRendering: 'crisp-edges',
                  filter: 'contrast(1.15) brightness(1.02) saturate(1.1)'
                }}
                priority
              />
            </div>
          </div>

          {/* Carte de prix - en bas sur mobile, à droite sur desktop */}
          <div className="lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:w-[420px]">
            <Card className="p-6 md:p-8 space-y-6 border-2 border-primary shadow-xl hover:shadow-2xl transition-shadow bg-background/95 backdrop-blur-sm">
              <div className="space-y-2">
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-destructive hover:bg-destructive text-destructive-foreground font-semibold">
                    Oferta Limitada · 7 días
                  </Badge>
                  <Badge variant="outline" className="border-primary text-primary font-semibold">
                    Pago único
                  </Badge>
                </div>
                <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold">
                  Web Profesional Para Autónomos
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl md:text-5xl font-heading font-bold text-primary">497€</span>
                  <span className="text-xl md:text-2xl text-muted-foreground line-through">697€</span>
                </div>

                <ul className="space-y-3 text-sm md:text-base">
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