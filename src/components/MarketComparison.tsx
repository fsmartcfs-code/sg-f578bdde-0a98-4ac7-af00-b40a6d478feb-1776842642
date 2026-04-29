import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    category: "Precio y Transparencia",
    items: [
      {
        feature: "Precio final claro desde el inicio",
        webParaAutonomos: true,
        webBarata: false,
        agenciaTradicional: false
      },
      {
        feature: "Sin cuotas mensuales ocultas",
        webParaAutonomos: true,
        webBarata: false,
        agenciaTradicional: false
      },
      {
        feature: "Modalidad de pago",
        webParaAutonomos: "40% inicio + 60% finalizar",
        webBarata: "100% por adelantado",
        agenciaTradicional: "30-40-30 + mensualidad"
      }
    ]
  },
  {
    category: "Calidad y Profesionalismo",
    items: [
      {
        feature: "Diseño personalizado",
        webParaAutonomos: true,
        webBarata: false,
        agenciaTradicional: true
      },
      {
        feature: "SEO incluido",
        webParaAutonomos: true,
        webBarata: false,
        agenciaTradicional: "Extra €€€"
      },
      {
        feature: "100% responsive",
        webParaAutonomos: true,
        webBarata: "Básico",
        agenciaTradicional: true
      },
      {
        feature: "Velocidad optimizada",
        webParaAutonomos: true,
        webBarata: false,
        agenciaTradicional: true
      }
    ]
  },
  {
    category: "Herramientas de Conversión",
    items: [
      {
        feature: "Botón WhatsApp integrado",
        webParaAutonomos: true,
        webBarata: "Básico",
        agenciaTradicional: "Extra €€"
      },
      {
        feature: "Widget de reviews Google",
        webParaAutonomos: true,
        webBarata: false,
        agenciaTradicional: "Extra €€"
      },
      {
        feature: "Sección Portfolio",
        webParaAutonomos: true,
        webBarata: false,
        agenciaTradicional: true
      },
      {
        feature: "Formulario de contacto avanzado",
        webParaAutonomos: true,
        webBarata: "Básico",
        agenciaTradicional: true
      },
      {
        feature: "Integración Calendly",
        webParaAutonomos: "Incluido",
        webBarata: false,
        agenciaTradicional: "Extra €€"
      }
    ]
  },
  {
    category: "Soporte y Mantenimiento",
    items: [
      {
        feature: "3 meses de modificaciones gratis",
        webParaAutonomos: true,
        webBarata: false,
        agenciaTradicional: "1 mes"
      },
      {
        feature: "Tiempo de respuesta",
        webParaAutonomos: "24-48h",
        webBarata: "Semanas",
        agenciaTradicional: "48-72h"
      },
      {
        feature: "Soporte en español",
        webParaAutonomos: true,
        webBarata: "Variable",
        agenciaTradicional: true
      }
    ]
  },
  {
    category: "Tiempo de Entrega",
    items: [
      {
        feature: "Web operativa en",
        webParaAutonomos: "7-20 días",
        webBarata: "15-30 días",
        agenciaTradicional: "30-60 días"
      }
    ]
  }
];

const renderCell = (value: boolean | string) => {
  if (typeof value === "boolean") {
    return value ? (
      <div className="flex justify-center">
        <Check className="h-5 w-5 text-green-600" />
      </div>
    ) : (
      <div className="flex justify-center">
        <X className="h-5 w-5 text-gray-400" />
      </div>
    );
  }
  return (
    <div className="text-center text-sm">
      {value}
    </div>
  );
};

export function MarketComparison() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            ¿Por qué Web Para Autónomos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comparamos nuestra propuesta con las alternativas del mercado para que veas la diferencia
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="font-heading font-bold text-lg">
                Característica
              </div>
              <div className="text-center">
                <Card className="p-4 bg-primary/10 border-primary/20">
                  <div className="font-heading font-bold text-primary text-lg">
                    Web Para Autónomos
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Nuestra solución
                  </div>
                </Card>
              </div>
              <div className="text-center">
                <Card className="p-4">
                  <div className="font-heading font-bold text-lg">
                    Web Barata
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Plantillas genéricas
                  </div>
                </Card>
              </div>
              <div className="text-center">
                <Card className="p-4">
                  <div className="font-heading font-bold text-lg">
                    Agencia Tradicional
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Solución cara
                  </div>
                </Card>
              </div>
            </div>

            {/* Comparison rows by category */}
            {comparisonData.map((section, sectionIdx) => (
              <div key={sectionIdx} className="mb-8">
                <h3 className="font-heading font-bold text-xl mb-4 text-primary">
                  {section.category}
                </h3>
                
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="grid grid-cols-4 gap-4 mb-3">
                    <div className="flex items-center text-sm font-medium">
                      {item.feature}
                    </div>
                    <Card className="p-3 bg-primary/5 border-primary/20">
                      {renderCell(item.webParaAutonomos)}
                    </Card>
                    <Card className="p-3">
                      {renderCell(item.webBarata)}
                    </Card>
                    <Card className="p-3">
                      {renderCell(item.agenciaTradicional)}
                    </Card>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Card className="p-6 bg-primary/5 border-primary/20 max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-primary">Nuestra diferencia:</span> Transparencia total en precio, 
              herramientas de conversión incluidas desde el inicio, y un enfoque 100% orientado a resultados. 
              Sin letra pequeña, sin sorpresas, sin cuotas ocultas.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}