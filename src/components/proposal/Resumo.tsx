import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Clock, Layers, Sparkles } from "lucide-react";

type Item = { name: string; price: string; note?: string; optional?: boolean };

const incorpeItems: Item[] = [
  { name: "AI Scan",                   price: "BRL 19.880",             note: "Diagnóstico inicial · 4x BRL 4.970" },
  { name: "Smart Route",               price: "BRL 130.000",            note: "Fundação estratégica · 4 parcelas (dez/26, mar/27, jun/27, set/27)" },
  { name: "Smart Code",                price: "BRL 30.000",             note: "Tecnologia, IA & Automação" },
  { name: "Smart Squad",               price: "BRL 9.880 /mês",         note: "1 área por mês — Engenharia, Financeiro, Contabilidade, Compras, Obras, Cobrança, Orçamento" },
  { name: "Matter Learn · AI Shift",   price: "BRL 800 /pessoa",        note: "15 part. = BRL 12.000 (4x BRL 3.000)" },
  { name: "Matter Learn · AI Next",    price: "BRL 250 /pessoa-mês",    note: "15 part. = BRL 3.750/mês por 12 meses" },
  { name: "Smart Pulse",               price: "BRL 3.000 /mês",         note: "Manutenção adicional do Smart Squad", optional: true },
];

type OptionTotal = {
  label: string;
  title: string;
  setupTotal: string;
  setupItems: string[];
  recurringTotal: string;
  recurringItems: string[];
  addOn?: string;
  footnote: string;
};

const optionTotals: OptionTotal[] = [
  {
    label: "Opção A · Sob Demanda",
    title: "AI Scan + Smart Squad",
    setupTotal: "BRL 19.880",
    setupItems: ["AI Scan — BRL 19.880 (diagnóstico inicial)"],
    recurringTotal: "BRL 9.880 /mês",
    recurringItems: ["Smart Squad — BRL 9.880/mês (contínuo, 1 área por mês)"],
    addOn: "+ Smart Pulse (opcional): BRL 3.000/mês",
    footnote: "AI Scan e Smart Squad começam simultaneamente no Mês 1. O Smart Squad continua enquanto o contrato estiver vigente.",
  },
  {
    label: "Opção B-1 · Escopo completo",
    title: "Matter Learn + AI Scan + Smart Route + Smart Code + Smart Squad",
    setupTotal: "BRL 191.880",
    setupItems: [
      "AI Scan — BRL 19.880 (4x BRL 4.970)",
      "Smart Route — BRL 130.000 (4 parcelas)",
      "Smart Code — BRL 30.000",
      "Matter Learn · AI Shift — BRL 12.000 (15 pessoas)",
    ],
    recurringTotal: "BRL 13.630 /mês",
    recurringItems: [
      "Smart Squad — BRL 9.880/mês (contínuo, 1 área por mês)",
      "Matter Learn · AI Next — BRL 3.750/mês (12 meses, 15 pessoas)",
    ],
    addOn: "+ Smart Pulse (opcional): BRL 3.000/mês",
    footnote: "AI Scan, Smart Route, Smart Code, Smart Squad e Matter Learn começam simultaneamente no Mês 1. O AI Next segue ativo por 12 meses; o Smart Squad continua enquanto o contrato estiver vigente.",
  },
  {
    label: "Opção B-2 · Matter Learn",
    title: "Matter Learn (AI Shift + AI Next)",
    setupTotal: "BRL 12.000",
    setupItems: ["Matter Learn · AI Shift — BRL 12.000 (15 pessoas, 1 dia de imersão)"],
    recurringTotal: "BRL 3.750 /mês",
    recurringItems: ["Matter Learn · AI Next — BRL 3.750/mês (12 meses, 15 pessoas)"],
    footnote: "AI Shift e AI Next começam simultaneamente no Mês 1. O AI Next segue ativo por 12 meses.",
  },
];

const consolidatedItems = [
  { name: "AI Scan",     calc: "4 parcelas de BRL 4.970",                                         total: "BRL 19.880" },
  { name: "AI Shift",    calc: "15 participantes x BRL 800 = BRL 12.000, em 4x BRL 3.000",        total: "BRL 12.000" },
  { name: "AI Next",     calc: "12 mensalidades de BRL 3.750",                                    total: "BRL 45.000" },
  { name: "Smart Route", calc: "Dez/26 BRL 50.000, mar/27 BRL 30.000, jun/27 e set/27 BRL 25.000", total: "BRL 130.000" },
];

const consolidatedPremises = [
  "AI Scan: preservado o valor original de BRL 19.880.",
  "AI Shift: preço por participante reduzido de BRL 980 para BRL 800 (BRL 2.700 a menos no grupo de 15).",
  "Smart Route: proposta original de BRL 144.400 ajustada para BRL 130.000 (redução de BRL 14.400, aproximadamente 9,97%).",
  "AI Next: mensalidade de BRL 3.750 por 12 meses, de dez/26 a nov/27.",
  "Smart Squad e Smart Code não integram este total; eventual contratação dependerá de avaliação posterior ao AI Scan.",
];

// [mês, AI Scan, AI Shift, AI Next, Smart Route] em BRL
const disbursements: [string, number, number, number, number][] = [
  ["Dez/26", 4970, 3000, 3750, 50000],
  ["Jan/27", 4970, 3000, 3750, 0],
  ["Fev/27", 4970, 3000, 3750, 0],
  ["Mar/27", 4970, 3000, 3750, 30000],
  ["Abr/27", 0, 0, 3750, 0],
  ["Mai/27", 0, 0, 3750, 0],
  ["Jun/27", 0, 0, 3750, 25000],
  ["Jul/27", 0, 0, 3750, 0],
  ["Ago/27", 0, 0, 3750, 0],
  ["Set/27", 0, 0, 3750, 25000],
  ["Out/27", 0, 0, 3750, 0],
  ["Nov/27", 0, 0, 3750, 0],
];

const fmt = (v: number) => (v === 0 ? "–" : v.toLocaleString("pt-BR"));

function ConsolidatedProposal() {
  const columnTotals = [1, 2, 3, 4].map((c) => disbursements.reduce((s, r) => s + (r[c] as number), 0));
  const grandTotal = columnTotals.reduce((s, v) => s + v, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <DollarSign className="w-4 h-4 text-primary" />
        <h3 className="font-bold uppercase tracking-wider text-xs">Proposta consolidada · racional financeiro</h3>
      </div>

      <Card className="p-7 md:p-10 bg-card border-border">
        <p className="text-xs text-primary font-mono uppercase tracking-widest mb-1">Composição do investimento</p>
        <h4 className="text-lg font-bold mb-1">AI Scan + AI Shift + AI Next + Smart Route</h4>
        <p className="text-xs text-muted-foreground mb-6">Formalização prevista: novembro de 2026. Pagamentos de dezembro de 2026 a novembro de 2027.</p>
        <ul className="space-y-2">
          {consolidatedItems.map((i) => (
            <li key={i.name} className="flex items-center justify-between gap-4 p-4 rounded-xl bg-background/50 border border-border">
              <div>
                <p className="font-semibold text-sm">{i.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{i.calc}</p>
              </div>
              <p className="font-bold text-primary text-sm text-right shrink-0">{i.total}</p>
            </li>
          ))}
        </ul>
        <div className="mt-4 p-6 rounded-2xl bg-gradient-gold text-primary-foreground flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs uppercase tracking-wider opacity-80">Investimento total</p>
          <p className="text-3xl md:text-4xl font-bold">BRL {grandTotal.toLocaleString("pt-BR")}</p>
        </div>
      </Card>

      <Card className="p-7 md:p-10 bg-card border-border">
        <p className="text-xs text-primary font-mono uppercase tracking-widest mb-4">Concessões e premissas comerciais</p>
        <ul className="space-y-2">
          {consolidatedPremises.map((p) => (
            <li key={p} className="flex gap-3 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="p-7 md:p-10 bg-card border-border">
        <p className="text-xs text-primary font-mono uppercase tracking-widest mb-4">Cronograma mensal de desembolsos (BRL)</p>
        <div className="overflow-x-auto -mx-2">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
                <th className="text-left font-semibold py-3 px-2">Mês</th>
                <th className="text-right font-semibold py-3 px-2">AI Scan</th>
                <th className="text-right font-semibold py-3 px-2">AI Shift</th>
                <th className="text-right font-semibold py-3 px-2">AI Next</th>
                <th className="text-right font-semibold py-3 px-2">Smart Route</th>
                <th className="text-right font-semibold py-3 px-2">Total</th>
              </tr>
            </thead>
            <tbody className="font-mono tabular-nums">
              {disbursements.map(([month, ...values]) => {
                const total = values.reduce((s, v) => s + v, 0);
                return (
                  <tr key={month} className="border-b border-border/60">
                    <td className="py-2.5 px-2 font-sans font-semibold">{month}</td>
                    {values.map((v, idx) => (
                      <td key={idx} className="py-2.5 px-2 text-right text-muted-foreground">{fmt(v)}</td>
                    ))}
                    <td className="py-2.5 px-2 text-right font-bold text-primary">{fmt(total)}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="font-mono tabular-nums">
              <tr>
                <td className="pt-4 px-2 font-sans font-bold">Total</td>
                {columnTotals.map((v, idx) => (
                  <td key={idx} className="pt-4 px-2 text-right font-bold">{fmt(v)}</td>
                ))}
                <td className="pt-4 px-2 text-right font-bold text-primary">{fmt(grandTotal)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-6">
          Primeiro desembolso de BRL 61.720 em dez/26, parcelas extraordinárias do Smart Route em mar/27, jun/27 e set/27,
          e encerramento dos pagamentos em nov/27. Escopos, datas de execução, entregáveis e demais condições constarão dos instrumentos contratuais.
        </p>
      </Card>
    </div>
  );
}

export function Resumo() {
  const mandatory = incorpeItems.filter(i => !i.optional);
  const optional  = incorpeItems.filter(i => i.optional);

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="rounded-3xl border border-border bg-card p-8 md:p-14 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl" />
        <div className="relative">
          <div>
            <Badge className="bg-primary text-primary-foreground mb-4">Resumo Estratégico</Badge>
            <h1 className="flex flex-wrap items-baseline gap-x-3 text-4xl md:text-5xl font-bold leading-tight mb-4">
              <span>Proposta</span>
              <span className="text-gradient-gold">INCORPE</span>
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
            <p className="text-3xl font-bold text-gradient-gold">5</p>
            <p className="text-xs text-muted-foreground mt-1">AI Scan · Smart Route · Code · Squad · Matter Learn</p>
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
            <p className="text-2xl font-bold text-gradient-gold">BRL 19.880</p>
            <p className="text-xs text-muted-foreground mt-1">AI Scan · 4x BRL 4.970</p>
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
            Smart Pulse é um reforço opcional de manutenção contínua do Smart Squad.
          </p>
        </Card>
      </div>

      {/* Total investment per option */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-primary" />
          <h3 className="font-bold uppercase tracking-wider text-xs">Valor total do projeto — por opção</h3>
        </div>

        {optionTotals.map((opt) => (
          <Card key={opt.label} className="p-7 md:p-10 bg-card border-border">
            <p className="text-xs text-primary font-mono uppercase tracking-widest mb-1">{opt.label}</p>
            <h4 className="text-lg font-bold mb-6">{opt.title}</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gradient-gold text-primary-foreground">
                <p className="text-xs uppercase tracking-wider opacity-80 mb-1">Investimento único (setup)</p>
                <p className="text-3xl md:text-4xl font-bold mb-3">{opt.setupTotal}</p>
                <ul className="space-y-1 text-sm opacity-90">
                  {opt.setupItems.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-background/50 border border-border">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Investimento recorrente (mensal)</p>
                <p className="text-3xl md:text-4xl font-bold text-gradient-gold mb-3">{opt.recurringTotal}</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {opt.recurringItems.map((i) => <li key={i}>{i}</li>)}
                </ul>
                {opt.addOn && <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border">{opt.addOn}</p>}
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-6">{opt.footnote}</p>
          </Card>
        ))}
      </div>

      <ConsolidatedProposal />

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
              <p className="text-3xl font-bold">5</p>
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
