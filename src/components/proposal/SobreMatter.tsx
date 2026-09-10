import matterLogo from "@/assets/matter-logo.png";
import matterLogoLight from "@/assets/matter-logo-light.webp.asset.json";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Layers, Users, Sparkles, Workflow, ArrowUpRight } from "lucide-react";

const pillars = [
  { icon: Workflow, title: "Metodologia", desc: "Framework proprietário SHIFT, validado em +100 empresas." },
  { icon: Layers, title: "Experiência", desc: "Experiência profunda em transformação prática de negócios." },
  { icon: Users, title: "Experts", desc: "Especialistas em negócios, mercado imobiliário, cultura e IA." },
  { icon: Brain, title: "Inteligência³", desc: "Inteligência de negócios + Inteligência coletiva + Inteligência Artificial." },
  { icon: Sparkles, title: "Integração", desc: "Curadoria de conhecimento estratégico + tecnologia + execução." },
];

const companies = [
  { name: "Smart", tag: "Estratégia e Gestão" },
  { name: "Umanse", tag: "Gestão de Pessoas" },
  { name: "BASE/labs", tag: "Inovação em Software" },
  { name: "BASE 2", tag: "Qualidade em Software" },
  { name: "Almabrands", tag: "Marketing Estratégico" },
  { name: "Matter Academy", tag: "Educação Corporativa" },
];

export function SobreMatter() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16 grid-bg">
        <div className="absolute inset-0 bg-gradient-glow opacity-60 pointer-events-none" />
        <div className="relative max-w-4xl">
          <img src={matterLogo} alt="Matter&Co." className="h-12 md:h-14 mb-10 only-dark" />
          <img src={matterLogoLight.url} alt="Matter&Co." className="h-12 md:h-14 mb-10 only-light" />

          <Badge className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 mb-6">
            Ecossistema Matter&Co.
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            O primeiro <span className="text-gradient-gold">ecossistema de inteligência</span> de negócios da América Latina
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
            Reunindo empresas com expertises complementares para solucionar desafios complexos.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <div className="px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-gold flex items-center gap-2">
              +100 empresas transformadas
            </div>
            <div className="px-5 py-3 rounded-xl border border-border bg-background/50 font-medium">
              Framework SHIFT
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section>
        <div className="mb-10">
          <p className="text-primary font-mono text-sm uppercase tracking-widest mb-2">Por que Matter</p>
          <h2 className="text-3xl md:text-5xl font-bold">Cinco pilares que sustentam o ecossistema</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <Card key={p.title} className="group p-7 bg-card border-border hover:border-primary/50 transition-all hover:-translate-y-1">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <p.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <span className="text-muted-foreground font-mono text-xs">0{i + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Companies */}
      <section>
        <div className="mb-10">
          <p className="text-primary font-mono text-sm uppercase tracking-widest mb-2">Ecossistema</p>
          <h2 className="text-3xl md:text-5xl font-bold">6 empresas. 1 inteligência integrada.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {companies.map((c) => (
            <div key={c.name} className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1 cursor-default">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{c.name}</h3>
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary transition-colors shrink-0">
                  <ArrowUpRight className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{c.tag}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
