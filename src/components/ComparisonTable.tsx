import { Card } from "@/components/ui/card";
import { Check, X, AlertTriangle } from "lucide-react";

const esencialFeatures = [
  {
    name: "Precio",
    wpa: "497€",
    cheap: "200€ - 400€",
    agency: "2000€ - 5000€",
  },
  {
    name: "Web Profesional Para Autónomos",
    wpa: true,
    cheap: "partial",
    agency: true,
  },
  {
    name: "Widget Reviews (Google/Trustpilot)",
    wpa: true,
    cheap: false,
    agency: "extra",
  },
  {
    name: "Sección Portfolio",
    wpa: true,
    cheap: false,
    agency: true,
  },
  {
    name: "Formulario de contacto para captación de leads",
    wpa: true,
    cheap: "partial",
    agency: true,
  },
  {
    name: "WhatsApp directo integrado",
    wpa: true,
    cheap: true,
    agency: false,
  },
  {
    name: "Soporte estándar",
    wpa: true,
    cheap: "partial",
    agency: true,
  },
];

const proFeatures = [
  {
    name: "Precio Pack Pro",
    wpa: "797€",
    cheap: "No disponible",
    agency: "3000€+",
  },
  {
    name: "Todo lo de Esencial +",
    wpa: true,
    cheap: false,
    agency: "partial",
  },
  {
    name: "CRM simple incluido",
    wpa: true,
    cheap: false,
    agency: "complex",
  },
  {
    name: "Presupuestos IA semi-automáticos",
    wpa: true,
    cheap: false,
    agency: "extra",
  },
  {
    name: "Kit Digital incluido",
    wpa: true,
    cheap: false,
    agency: false,
  },
  {
    name: "Formulario de contacto avanzado",
    wpa: true,
    cheap: "partial",
    agency: true,
  },
  {
    name: "Integración Calendly Premium",
    wpa: true,
    cheap: false,
    agency: "extra",
  },
];

const premiumFeatures = [
  {
    name: "Precio Pack Premium",
    wpa: "1297€",
    cheap: "No disponible",
    agency: "5000€+",
  },
  {
    name: "Todo lo de Pro +",
    wpa: true,
    cheap: false,
    agency: "partial",
  },
  {
    name: "Agente IA conversacional",
    wpa: true,
    cheap: false,
    agency: false,
  },
  {
    name: "Automatización completa presupuestos",
    wpa: true,
    cheap: false,
    agency: "extra",
  },
  {
    name: "CRM avanzado con seguimiento",
    wpa: true,
    cheap: false,
    agency: "complex",
  },
  {
    name: "Integraciones personalizadas",
    wpa: true,
    cheap: false,
    agency: "extra",
  },
  {
    name: "Soporte VIP 24/7",
    wpa: true,
    cheap: false,
    agency: "partial",
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
                {/* Section: Pack Esencial */}
                <tr className="bg-primary/5">
                  <td colSpan={4} className="p-3 font-heading font-bold text-sm md:text-base text-primary">
                    ⚡ Pack Esencial (497€)
                  </td>
                </tr>
                {esencialFeatures.map((feature, i) => (
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
                
                {/* Section: Pack Pro */}
                <tr className="bg-accent/10">
                  <td colSpan={4} className="p-3 font-heading font-bold text-sm md:text-base text-foreground">
                    ✨ Pack Pro (797€)
                  </td>
                </tr>
                {proFeatures.map((feature, i) => (
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

                {/* Section: Pack Premium */}
                <tr className="bg-primary/10">
                  <td colSpan={4} className="p-3 font-heading font-bold text-sm md:text-base text-primary">
                    👑 Pack Premium (1297€)
                  </td>
                </tr>
                {premiumFeatures.map((feature, i) => (
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