import Image from "next/image";
import { Card } from "@/components/ui/card";

export function BeforeAfter() {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              De invisible a imparable
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              La diferencia entre perder clientes por falta de presencia y generar confianza desde el primer impacto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-2">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80"
                  alt="Antes: autónomo sin presencia profesional"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-destructive rounded-md text-sm font-semibold mb-2">
                    Antes
                  </span>
                  <p className="text-sm leading-relaxed">
                    Sin presencia clara, imagen poco profesional, actividad invisible online, clientes perdidos por falta de confianza.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden border-2 border-primary">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
                  alt="Después: autónomo con presencia profesional y confianza"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-primary rounded-md text-sm font-semibold mb-2">
                    Después
                  </span>
                  <p className="text-sm leading-relaxed">
                    Presencia profesional clara, confianza desde el primer clic, portfolio visible, prueba social activa, más conversiones.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
            <strong className="text-foreground">Antes / Después:</strong> de no tener presencia clara a transmitir confianza y profesionalidad desde el primer impacto.
          </p>
        </div>
      </div>
    </section>
  );
}