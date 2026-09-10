import { Badge } from "@/components/ui/badge";

export function ProposalHeader({
  eyebrow,
  title,
  subtitle,
  accent = "primary",
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  accent?: "primary" | "danger";
}) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-14">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-secondary/25 blur-3xl" />
      <div className="relative">
        <div>
          <Badge className={`mb-4 ${accent === "danger" ? "bg-destructive/20 text-destructive border-destructive/40" : "bg-primary text-primary-foreground"}`}>
            {eyebrow}
          </Badge>
          <h1 className="flex flex-wrap items-baseline gap-x-3 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gradient-gold">Proposta</span>
            <span aria-hidden="true">—</span>
            <span>{title}</span>
          </h1>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
