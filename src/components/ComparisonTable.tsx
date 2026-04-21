import { Card } from "@/components/ui/card";
import { Check, X, AlertTriangle } from "lucide-react";

const baseFeatures = [
  {
    name: "Precio base",
    wpa: "497€",
    cheap: "200€ - 400€",
    agency: "2000€ - 5000€",
  },
  {
    name: "Propiedad de la web",
    wpa: true,
    cheap: "partial",
    agency: "partial",
  },
  {
    name: "Captación de leads",
    wpa: true,
    cheap: "partial",
    agency: true,
  },
  {
    name: "Prueba Social (Reviews)",
    wpa: true,
    cheap: false,
    agency: "extra",
  },
  {
    name: "Portfolio integrado",
    wpa: true,
    cheap: false,
    agency: true,
  },
  {
    name: "WhatsApp directo",
    wpa: true,
    cheap: true,
    agency: false,
  },
  {
    name: "Precio transparente",
    wpa: true,
    cheap: true,
    agency: false,
  },
  {
    name: "Setup rápido (7 días)",
    wpa: true,
    cheap: false,
    agency: false,
  },
];

const advancedFeatures = [
  {
    name: "Precio con opciones",
    wpa: "797€",
    cheap: "No disponible",
    agency: "3000€+",
  },
  {
    name: "CRM simple",
    wpa: true,
    cheap: false,
    agency: "complex",
  },
  {
    name: "Devis semi-automatiques",
    wpa: true,
    cheap: false,
    agency: "extra",
  },
];

function StatusIcon({ status }: { status: boolean | string }) {
  if (status === true) {
    return <Check className="h-5 w-5 text-primary" />;
  }
  if (status === false) {
    return <X className="h-5 w-5 text-muted-foreground" />;
  }
  if (status === "partial" || status === "complex" || status === "extra") {
    return <AlertTriangle className="h-5 w-5 text-amber-500" />;
  }
  return null;
}

function StatusText({ status }: { status: boolean | string }) {
  if (status === true) return "Incluida";
  if (status === false) return "No";
  if (status === "partial") return "Cuotas";
  if (status === "complex") return "Complejo";
  if (status === "extra") return "Pago extra";
  if (typeof status === "string") return status;
  return "";
}

export function ComparisonTable() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Por qué Web Para Autónomos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comparación directa: lo que obtienes aquí vs otras opciones.
          </p>
        </div>

        <Card className="overflow-hidden border-2 max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 bg-muted/50">
                  <th className="text-left p-4 font-heading font-bold text-base md:text-lg">
                    Característica
                  </th>
                  <th className="text-center p-4">
                    <div className="font-heading font-bold text-base md:text-lg text-primary">
                      Web Para
                      <br />
                      Autónomos
                    </div>
                  </th>
                  <th className="text-center p-4">
                    <div className="font-heading font-bold text-base md:text-lg text-muted-foreground">
                      Web
                      <br />
                      barata
                    </div>
                  </th>
                  <th className="text-center p-4">
                    <div className="font-heading font-bold text-base md:text-lg text-muted-foreground">
                      Agencia
                      <br />
                      tradicional
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Section: Offre de base */}
                <tr className="bg-primary/5">
                  <td colSpan={4} className="p-3 font-heading font-bold text-sm md:text-base text-primary">
                    📦 Offre de base incluse
                  </td>
                </tr>
                {baseFeatures.map((feature, i) => (
                  <tr key={i} className="border-b last:border-b-0 hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-medium text-sm md:text-base">
                      {feature.name}
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <StatusIcon status={feature.wpa} />
                        <span className={`text-xs md:text-sm ${typeof feature.wpa === "string" && !["partial", "complex", "extra"].includes(feature.wpa) ? "font-bold text-primary" : "text-muted-foreground"}`}>
                          <StatusText status={feature.wpa} />
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <StatusIcon status={feature.cheap} />
                        <span className={`text-xs md:text-sm ${typeof feature.cheap === "string" && !["partial", "complex", "extra"].includes(feature.cheap) ? "font-medium" : "text-muted-foreground"}`}>
                          <StatusText status={feature.cheap} />
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <StatusIcon status={feature.agency} />
                        <span className={`text-xs md:text-sm ${typeof feature.agency === "string" && !["partial", "complex", "extra"].includes(feature.agency) ? "font-medium" : "text-muted-foreground"}`}>
                          <StatusText status={feature.agency} />
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
                
                {/* Section: Options avancées */}
                <tr className="bg-accent/10">
                  <td colSpan={4} className="p-3 font-heading font-bold text-sm md:text-base text-foreground">
                    ⚡ Options avancées (Pack Pro 797€)
                  </td>
                </tr>
                {advancedFeatures.map((feature, i) => (
                  <tr key={i} className="border-b last:border-b-0 hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-medium text-sm md:text-base">
                      {feature.name}
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <StatusIcon status={feature.wpa} />
                        <span className={`text-xs md:text-sm ${typeof feature.wpa === "string" && !["partial", "complex", "extra"].includes(feature.wpa) ? "font-bold text-primary" : "text-muted-foreground"}`}>
                          <StatusText status={feature.wpa} />
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <StatusIcon status={feature.cheap} />
                        <span className={`text-xs md:text-sm ${typeof feature.cheap === "string" && !["partial", "complex", "extra"].includes(feature.cheap) ? "font-medium" : "text-muted-foreground"}`}>
                          <StatusText status={feature.cheap} />
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <StatusIcon status={feature.agency} />
                        <span className={`text-xs md:text-sm ${typeof feature.agency === "string" && !["partial", "complex", "extra"].includes(feature.agency) ? "font-medium" : "text-muted-foreground"}`}>
                          <StatusText status={feature.agency} />
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
}