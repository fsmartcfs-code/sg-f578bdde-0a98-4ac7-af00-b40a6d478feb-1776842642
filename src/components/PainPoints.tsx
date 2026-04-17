import { Card } from "@/components/ui/card";
import { AlertCircle, Clock, TrendingDown, DollarSign, FileX, MessagesSquare } from "lucide-react";

const pains = [
  {
    icon: MessagesSquare,
    title: "Leads perdidos en WhatsApp",
    description: "Sin sistema para captar y organizar consultas, pierdes clientes antes de responder.",
  },
  {
    icon: Clock,
    title: "Respuestas demasiado lentas",
    description: "Mientras preparas el presupuesto manualmente, el cliente ya ha llamado a otro.",
  },
  {
    icon: AlertCircle,
    title: "Falta de confianza al primer clic",
    description: "Sin portfolio ni reviews visibles, el visitante se va sin contactar.",
  },
  {
    icon: DollarSign,
    title: "Difícil justificar el precio",
    description: "Sin prueba social ni trabajos previos, todos los autónomos parecen iguales.",
  },
  {
    icon: FileX,
    title: "Devis enviados tarde",
    description: "Proceso manual y lento hace que pierdas urgencias y proyectos de decisión rápida.",
  },
  {
    icon: TrendingDown,
    title: "Sin seguimiento de demandas",
    description: "No sabes qué consultas están activas, cuáles cerrar o cuáles necesitan reactivación.",
  },
];

export function PainPoints() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Lo que resolvemos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Los problemas reales de autónomos que pierden clientes cada día por no tener un sistema claro.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pains.map((pain, i) => {
            const Icon = pain.icon;
            return (
              <Card key={i} className="p-6 space-y-3 border-2 hover:border-primary transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold">
                  {pain.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pain.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}