import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Minus } from "lucide-react";

const features = [
  {
    category: "Tarifas",
    items: [
      {
        name: "Precio (Base Imponible sin IVA)",
        esencial: "697€",
        pro: "1297€",
        iaUpgrade: "997€",
        premium: "1997€",
      },
      {
        name: "Duración de realización",
        esencial: "~7 días",
        pro: "~10 días",
        iaUpgrade: "~10 días",
        premium: "~15-20 días",
      },
    ],
  },
  {
    category: "Sitio Web Profesional",
    items: [
      {
        name: "Sitio web profesional",
        esencial: true,
        pro: true,
        iaUpgrade: false,
        premium: true,
      },
      {
        name: "Widget reviews (Google/Trustpilot)",
        esencial: true,
        pro: true,
        iaUpgrade: false,
        premium: true,
      },
      {
        name: "Portfolio / Galería",
        esencial: true,
        pro: true,
        iaUpgrade: false,
        premium: true,
      },
      {
        name: "Formulario de contacto",
        esencial: true,
        pro: true,
        iaUpgrade: false,
        premium: true,
      },
      {
        name: "Integración WhatsApp",
        esencial: true,
        pro: true,
        iaUpgrade: true,
        premium: true,
      },
    ],
  },
  {
    category: "CRM y Automatización",
    items: [
      {
        name: "CRM simple",
        esencial: false,
        pro: true,
        iaUpgrade: true,
        premium: true,
      },
      {
        name: "CRM avanzado (pipeline, forecasting)",
        esencial: false,
        pro: false,
        iaUpgrade: false,
        premium: true,
      },
      {
        name: "Presupuestos IA semi-automáticos",
        esencial: false,
        pro: true,
        iaUpgrade: true,
        premium: true,
      },
      {
        name: "Agente IA conversacional 24/7",
        esencial: false,
        pro: false,
        iaUpgrade: true,
        premium: true,
      },
      {
        name: "Integración Calendly Premium",
        esencial: false,
        pro: true,
        iaUpgrade: false,
        premium: true,
      },
    ],
  },
  {
    category: "Soporte y Modificaciones",
    items: [
      {
        name: "3 meses modificaciones gratuitas",
        esencial: true,
        pro: true,
        iaUpgrade: true,
        premium: true,
      },
      {
        name: "Coaching inicial",
        esencial: false,
        pro: false,
        iaUpgrade: false,
        premium: true,
      },
    ],
  },
];

function StatusIcon({ status }: { status: boolean | string }) {
  if (status === true) {
    return <Check className="h-5 w-5 text-primary" />;
  }
  if (status === false) {
    return <X className="h-5 w-5 text-muted-foreground" />;
  }
  return <Minus className="h-5 w-5 text-muted-foreground" />;
}

function StatusDisplay({ status }: { status: boolean | string }) {
  if (typeof status === "string") {
    return <span className="text-sm font-medium text-foreground">{status}</span>;
  }
  return <StatusIcon status={status} />;
}

export function ComparisonTable() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Compara las ofertas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuentra la solución perfecta para tu negocio. Todas las ofertas incluyen SIN CUOTAS MENSUALES.
          </p>
        </div>

        <Card className="overflow-hidden border-2 max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 bg-muted/50">
                  <th className="text-left p-4 font-heading font-bold text-base">
                    Característica
                  </th>
                  <th className="text-center p-4">
                    <div className="font-heading font-bold text-base text-primary">
                      Esencial
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">697€ sin IVA</div>
                  </th>
                  <th className="text-center p-4 bg-primary/5">
                    <div className="font-heading font-bold text-base text-primary">
                      Pro
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">1297€ sin IVA</div>
                    <div className="text-xs font-semibold text-primary mt-1">MÁS POPULAR</div>
                  </th>
                  <th className="text-center p-4">
                    <div className="font-heading font-bold text-base text-foreground">
                      IA Upgrade
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">997€ sin IVA</div>
                  </th>
                  <th className="text-center p-4">
                    <div className="font-heading font-bold text-base text-foreground">
                      Premium
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">1997€ sin IVA</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((category, catIndex) => (
                  <>
                    <tr key={`cat-${catIndex}`} className="bg-muted/20">
                      <td colSpan={5} className="p-3 font-heading font-bold text-sm text-primary">
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((feature, featIndex) => (
                      <tr
                        key={`feat-${catIndex}-${featIndex}`}
                        className="border-b last:border-b-0 hover:bg-muted/20 transition-colors"
                      >
                        <td className="p-4 font-medium text-sm">
                          {feature.name}
                        </td>
                        <td className="p-4 text-center">
                          <div className="flex justify-center">
                            <StatusDisplay status={feature.esencial} />
                          </div>
                        </td>
                        <td className="p-4 text-center bg-primary/5">
                          <div className="flex justify-center">
                            <StatusDisplay status={feature.pro} />
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <div className="flex justify-center">
                            <StatusDisplay status={feature.iaUpgrade} />
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <div className="flex justify-center">
                            <StatusDisplay status={feature.premium} />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto mt-8">
          <Button size="lg" variant="outline" asChild>
            <Link href="/esencial">Descubrir Esencial</Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="/pro">Descubrir Pro</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/ia-upgrade">Descubrir IA Upgrade</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/premium">Descubrir Premium</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}