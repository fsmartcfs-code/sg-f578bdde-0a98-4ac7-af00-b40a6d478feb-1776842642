import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MessageCircle, TrendingUp, Users, Zap, Target } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-4 md:py-12 lg:py-24 overflow-hidden bg-white">
      <div className="container relative z-10">
        {/* Layout mobile: tout en colonne */}
        <div className="space-y-8">
          {/* Titre et CTAs */}
          <div className="space-y-6 lg:max-w-xl">
            <div className="space-y-2">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight text-center lg:text-left" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.8)' }}>
                ¡Consigue <span className="text-primary">más clientes</span>, no solo una web bonita!
              </h1>

              {/* Image visible sur mobile uniquement - juste après le titre */}
              <div className="lg:hidden flex justify-center -mx-4">
                <div className="relative w-full max-w-[750px]">
                  <Image
                    src="/semfundo.png"
                    alt="Plomero profesional"
                    width={750}
                    height={937}
                    className="object-contain w-full h-auto"
                    style={{
                      imageRendering: 'crisp-edges',
                      filter: 'contrast(1.15) brightness(1.02) saturate(1.1)'
                    }}
                    priority
                  />
                </div>
              </div>

              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl text-center lg:text-left" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2), 0 0 10px rgba(255, 255, 255, 0.6)' }}>
                Web Para Autónomos pensada para convertir visitas en contactos: botones claros, prueba social visible y portfolio para generar confianza desde el primer scroll.
              </p>
            </div>

            {/* Widget Google Reviews */}
            <div className="flex items-center justify-center lg:justify-start gap-2 py-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-accent" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">5.0</span>
              <span className="text-sm text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground">127 opiniones en Google</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base font-semibold shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto" asChild>
                <Link href="https://calendly.com/webparaautonomos" target="_blank">
                  <Calendar className="mr-2 h-5 w-5" />
                  Reservar llamada
                </Link>
              </Button>
              <Button size="lg" className="text-base font-semibold shadow-sm hover:shadow-md transition-shadow w-full sm:w-auto bg-[#25D366] hover:bg-[#20BA5A] text-white border-0" asChild>
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
        </div>
      </div>
    </section>
  );
}