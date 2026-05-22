import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import incorpeLogo from "@/assets/incorpe-logo.png";
import { DollarSign, Clock, Layers, Sparkles } from "lucide-react";

type Item = { name: string; price: string; note?: string; optional?: boolean };

const incorpeItems: Item[] = [
  { name: "Smart Route",               price: "1+4 de BRL 28.880",     note: "Fundação estratégica" },
  { name: "Smart Code",                price: "BRL 30.000",             note: "Tecnologia, IA & Automação" },
  { name: "Smart Squad",               price: "BRL 9.880 /mês",         note: "Evolução contínua",   optional: true },
  { name: "Smart Pulse",               price: "BRL 3.000 /mês",         note: "Manutenção",          optional: true },
  { name: "Matter Academy · AI Scan",  price: "Gratuito",               note: "Diagnóstico inicial" },
  { name: "Matter Academy · AI Shift", price: "BRL 980 /pessoa",        note: "20 part. = BRL 19.600" },
  { name: "Matter Academy · AI Next",  price: "BRL 250 /pessoa/mês",    note: "20 part. = BRL 5.000/mês" },
];

export function Resumo() {
  const mandatory = incorpeItems.filter(i => !i.optional);
  const optional  = incorpeItems.filter(i => i.optional);

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="rounded-3xl border border-border bg-card p-8 md:p-14 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl" />
        <div className="relative flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="w-20 h-20 rounded-2xl bg-white p-2 flex items-center justify-center shrink-0">
            <img src={incorpeLogo} alt="INCORPE" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="text-center md:text-left">
            <Badge className="bg-primary text-primary-foreground mb-4">Resumo Estratégico</Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Proposta <span className="text-gradient-gold">INCORPE</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Eficiência operacional, tecnologia, escala e inteligência empresarial — construída para a próxima década do grupo.
            </p>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Card className="p-6 bg-card border-border flex items-start gap-3">
          <Layers className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Módulos</p>
            <p className="text-3xl font-bold text-gradient-gold">4</p>
            <p className="text-xs text-muted-foreground mt-1">Smart Route · Code · Squad · Academy</p>
          </div>
        </Card>
        <Card className="p-6 bg-card border-border flex items-start gap-3">
          <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Duração</p>
            <p className="text-3xl font-bold text-gradient-gold">10+</p>
            <p className="text-xs text-muted-foreground mt-1">Meses de transformação</p>
          </div>
        </Card>
        <Card className="p-6 bg-card border-border flex items-start gap-3">
          <DollarSign className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Investimento de entrada</p>
            <p className="text-2xl font-bold text-gradient-gold">BRL 28.880</p>
            <p className="text-xs text-muted-foreground mt-1">Modelo 1+4</p>
          </div>
        </Card>
      </div>

      {/* Investment table */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Mandatory modules */}
        <Card className="p-7 bg-card border-border">
          <div className="flex items-center gap-2 mb-5">
            <Sparkles className="w-4 h-4 text-primary" />
            <h3 className="font-bold uppercase tracking-wider text-xs">Módulos principais</h3>
          </div>
          <ul className="space-y-2">
            {mandatory.map((i) => (
              <li key={i.name} className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border hover:border-primary/40 transition-colors">
                <div>
                  <p className="font-semibold text-sm">{i.name}</p>
                  {i.note && <p className="text-xs text-muted-foreground mt-0.5">{i.note}</p>}
                </div>
                <p className="font-bold text-primary text-sm ml-4 text-right">{i.price}</p>
              </li>
            ))}
          </ul>
        </Card>

        {/* Optional modules */}
        <Card className="p-7 bg-card border-border">
          <div className="flex items-center gap-2 mb-5">
            <DollarSign className="w-4 h-4 text-primary" />
            <h3 className="font-bold uppercase tracking-wider text-xs">Módulos opcionais</h3>
          </div>
          <ul className="space-y-2">
            {optional.map((i) => (
              <li key={i.name} className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-primary/20 hover:border-primary/40 transition-colors">
                <div>
                  <p className="font-semibold text-sm">{i.name}</p>
                  {i.note && <p className="text-xs text-muted-foreground mt-0.5">{i.note}</p>}
                </div>
                <p className="font-bold text-primary text-sm ml-4 text-right">{i.price}</p>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
            Módulos ativados após entrega do Smart Code.
          </p>
        </Card>
      </div>

      {/* Bottom highlight card */}
      <Card className="p-8 md:p-12 bg-gradient-gold text-primary-foreground border-0 shadow-gold">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <p className="text-sm font-mono uppercase tracking-widest opacity-70 mb-2">Por que Matter&Co.</p>
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              Uma solução integrada para a próxima escala da INCORPE
            </h3>
            <p className="opacity-80 leading-relaxed">
              Estratégia, tecnologia e inteligência operando juntos — do diagnóstico ao produto digital proprietário,
              com um squad dedicado sustentando a evolução contínua do negócio.
            </p>
          </div>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-primary-foreground/10 backdrop-blur">
              <p className="text-xs uppercase tracking-wider opacity-70">Total de módulos</p>
              <p className="text-3xl font-bold">4</p>
            </div>
            <div className="p-4 rounded-xl bg-primary-foreground/10 backdrop-blur">
              <p className="text-xs uppercase tracking-wider opacity-70">Empresas do ecossistema</p>
              <p className="text-3xl font-bold">3</p>
              <p className="text-xs opacity-70 mt-1">Smart · BASE/labs · Matter Academy</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
