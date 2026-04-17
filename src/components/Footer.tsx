import { Badge } from "@/components/ui/badge";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-2">
            <h3 className="font-heading text-2xl font-bold">
              Web Para Autónomos – Conversión Directa
            </h3>
            <p className="text-sm text-muted-foreground">
              La web pensada para convertir visitas en clientes reales
            </p>
          </div>

          <Badge variant="outline" className="text-sm font-normal px-4 py-2 border-destructive text-destructive">
            ⚡ Oferta base: 497€ en lugar de 697€ · Válida únicamente 7 días
          </Badge>

          <div className="pt-4 border-t border-border space-y-2">
            <p className="text-xs text-muted-foreground">
              Incluye: Web Profesional Para Autónomos + Widget Reviews + Sección Portfolio
            </p>
            <p className="text-xs text-muted-foreground">
              © {currentYear} Web Para Autónomos. Hecho para autónomos que quieren crecer.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}