import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Crown, Zap } from "lucide-react";

const plans = [
  {
    name: "Esencial",
    price: "497",
    originalPrice: "697",
    icon: Zap,
    description: "Perfecto para empezar a convertir visitas en clientes",
    features: [
      "Web Profesional Para Autónomos",
      "Widget Reviews (Google/Trustpilot)",
      "Sección Portfolio",
      "CRM simple incluido",
      "WhatsApp directo integrado",
      "Soporte estándar",
    ],
    cta: "Empezar ahora",
    popular: false,
  },
  {
    name: "Pro",
    price: "797",
    originalPrice: null,
    icon: Sparkles,
    description: "La opción más completa para autónomos serios",
    features: [
      "Todo lo de Esencial +",
      "Portfolio Pro (5 proyectos destacados)",
      "Devis IA semi-automáticos",
      "Kit Digital incluido",
      "Formulario de contacto avanzado",
      "Integración Calendly Premium",
      "Soporte prioritario",
    ],
    cta: "Elegir Pro",
    popular: true,
  },
  {
    name: "Premium",
    price: "1297",
    originalPrice: null,
    icon: Crown,
    description: "Solución completa con agente IA y soporte VIP",
    features: [
      "Todo lo de Pro +",
      "Portfolio Ilimitado",
      "Agente IA conversacional",
      "Automatización completa devis",
      "CRM avanzado con seguimiento",
      "Integraciones personalizadas",
      "Soporte VIP 24/7",
    ],
    cta: "Ir a Premium",
    popular: false,
  },
];

export function PricingCards() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Elige tu plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Precios transparentes, sin sorpresas. Todos los planes incluyen setup completo en 7 días.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <Card
                key={plan.name}
                className={`relative p-8 space-y-6 border-2 ${
                  plan.popular
                    ? "border-primary shadow-xl scale-105"
                    : "hover:border-primary transition-colors"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary hover:bg-primary text-primary-foreground font-semibold px-4">
                    Más Popular
                  </Badge>
                )}

                <div className="space-y-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-heading font-bold text-primary">
                      {plan.price}€
                    </span>
                    {plan.originalPrice && (
                      <span className="text-xl text-muted-foreground line-through">
                        {plan.originalPrice}€
                      </span>
                    )}
                  </div>
                  {plan.originalPrice && (
                    <p className="text-xs text-muted-foreground">
                      Oferta válida 7 días
                    </p>
                  )}
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className="w-full font-semibold"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href="https://calendly.com/webparaautonomos" target="_blank">
                    {plan.cta}
                  </Link>
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}