import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Crown, Zap, Bot } from "lucide-react";

const plans = [
  {
    name: "Esencial",
    originalPrice: "997€",
    price: "697€",
    slug: "esencial",
    icon: Zap,
    description: "Perfecto para empezar a convertir visitas en clientes",
    features: [
      "Web Profesional Para Autónomos",
      "Widget Reviews (Google/Trustpilot)",
      "Sección Portfolio",
      "Formulario de contacto",
      "WhatsApp directo integrado",
      "3 meses modificaciones gratis",
      "Sin cuotas mensuales",
    ],
    cta: "Ver detalles",
    popular: false,
  },
  {
    name: "Pro",
    originalPrice: "1997€",
    price: "1297€",
    slug: "pro",
    icon: Sparkles,
    description: "La opción más completa para autónomos serios",
    features: [
      "Todo lo de Esencial +",
      "CRM simple incluido",
      "Presupuestos IA semi-automáticos",
      "Kit Digital incluido",
      "Integración Calendly Premium",
      "3 meses modificaciones gratis",
      "Sin cuotas mensuales",
    ],
    cta: "Ver detalles",
    popular: true,
  },
  {
    name: "IA Upgrade",
    originalPrice: "1497€",
    price: "997€",
    slug: "ia-upgrade",
    icon: Bot,
    description: "Agente IA conversacional para tu sitio existente",
    features: [
      "Agent IA Dispatcher 24/7",
      "CRM simple automatizado",
      "Base de conocimiento FAQ",
      "Integraciones WhatsApp/Email",
      "Requiere sitio web existente",
      "3 meses modificaciones gratis",
      "Sin cuotas mensuales",
    ],
    cta: "Ver detalles",
    popular: false,
  },
  {
    name: "Premium",
    originalPrice: "2997€",
    price: "1997€",
    slug: "premium",
    icon: Crown,
    description: "Solución completa con agente IA avanzado",
    features: [
      "Todo lo de Pro +",
      "Agente IA conversacional avanzado",
      "Automatización completa presupuestos",
      "CRM avanzado con seguimiento",
      "Integraciones personalizadas",
      "Coaching inicial completo",
      "Sin cuotas mensuales",
    ],
    cta: "Ver detalles",
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
            Precios transparentes, sin sorpresas. Todos los planes incluyen setup completo.
          </p>
          <Badge className="bg-primary hover:bg-primary text-primary-foreground font-semibold px-4 py-2 text-base">
            SIN CUOTAS MENSUALES
          </Badge>
          <p className="text-sm text-muted-foreground mt-2">
            ✅ Todas las ofertas incluyen: alojamiento incluido (3 meses), 3 meses de modificaciones gratuitas, la web es tuya para siempre
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <Card
                key={plan.name}
                className={`relative p-6 space-y-5 border-2 ${
                  plan.popular
                    ? "border-primary shadow-xl"
                    : "hover:border-primary transition-colors"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary hover:bg-primary text-primary-foreground font-semibold px-4">
                    Más Popular
                  </Badge>
                )}

                <div className="space-y-2">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl text-muted-foreground line-through">
                      {plan.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">sin IVA</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Pago: 40% al inicio + 60% al finalizar
                  </p>
                </div>

                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className={feature.includes("Sin cuotas") ? "font-semibold" : ""}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="default"
                  className="w-full font-semibold text-sm"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href={`/${plan.slug}`}>
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