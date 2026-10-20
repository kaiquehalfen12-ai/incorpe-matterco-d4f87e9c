import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, CalendarDays, Handshake, FileText } from "lucide-react";

type Composicao = { solucao: string; memoria: string; valor: string; total?: boolean };

const composicao: Composicao[] = [
  { solucao: "AI Scan",    memoria: "4 parcelas de R$ 4.970,00",                                              valor: "R$ 19.880,00"  },
  { solucao: "AI Shift",   memoria: "15 participantes × R$ 800,00 = R$ 12.000,00; 4 × R$ 3.000,00",           valor: "R$ 12.000,00"  },
  { solucao: "AI Next",    memoria: "12 mensalidades × R$ 3.750,00",                                          valor: "R$ 45.000,00"  },
  { solucao: "Smart Route", memoria: "Dez/26: R$ 50.000 · mar/27: R$ 30.000 · jun/27: R$ 25.000 · set/27: R$ 25.000", valor: "R$ 130.000,00" },
  { solucao: "TOTAL",      memoria: "19.880 + 12.000 + 45.000 + 130.000",                                     valor: "R$ 206.880,00", total: true },
];

const concessoes: string[] = [
  "AI Scan: preservado o valor original de R$ 19.880,00, sem o desconto solicitado.",
  "AI Shift: preço por participante reduzido de R$ 980,00 para R$ 800,00 (redução de R$ 180,00 por pessoa; R$ 2.700,00 no grupo de 15).",
  "Smart Route: proposta original de R$ 144.400,00 ajustada para R$ 130.000,00 (redução de R$ 14.400,00, aproximadamente 9,97%). Valor R$ 5.000,00 acima da contraproposta de R$ 125.000,00.",
  "AI Next: mensalidade de R$ 3.750,00 por 12 meses, de dez/26 a nov/27.",
  "Smart Squad e Smart Code: não integram este total; eventual contratação dependerá de avaliação posterior ao AI Scan.",
];

type Mes = { mes: string; scan: string; shift: string; next: string; route: string; total: string; bold?: boolean };

const cronograma: Mes[] = [
  { mes: "Dez/26", scan: "4.970",  shift: "3.000", next: "3.750", route: "50.000", total: "61.720" },
  { mes: "Jan/27", scan: "4.970",  shift: "3.000", next: "3.750", route: "—",      total: "11.720" },
  { mes: "Fev/27", scan: "4.970",  shift: "3.000", next: "3.750", route: "—",      total: "11.720" },
  { mes: "Mar/27", scan: "4.970",  shift: "3.000", next: "3.750", route: "30.000", total: "41.720" },
  { mes: "Abr/27", scan: "—",      shift: "—",     next: "3.750", route: "—",      total: "3.750"  },
  { mes: "Mai/27", scan: "—",      shift: "—",     next: "3.750", route: "—",      total: "3.750"  },
  { mes: "Jun/27", scan: "—",      shift: "—",     next: "3.750", route: "25.000", total: "28.750" },
  { mes: "Jul/27", scan: "—",      shift: "—",     next: "3.750", route: "—",      total: "3.750"  },
  { mes: "Ago/27", scan: "—",      shift: "—",     next: "3.750", route: "—",      total: "3.750"  },
  { mes: "Set/27", scan: "—",      shift: "—",     next: "3.750", route: "25.000", total: "28.750" },
  { mes: "Out/27", scan: "—",      shift: "—",     next: "3.750", route: "—",      total: "3.750"  },
  { mes: "Nov/27", scan: "—",      shift: "—",     next: "3.750", route: "—",      total: "3.750"  },
  { mes: "Dez/27", scan: "—",      shift: "—",     next: "—",     route: "—",      total: "—"      },
  { mes: "TOTAL",  scan: "19.880", shift: "12.000", next: "45.000", route: "130.000", total: "206.880", bold: true },
];

export function Resumo() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="rounded-3xl border border-border bg-card p-8 md:p-14 relative overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl" />
        <div className="relative">
          <Badge className="bg-primary text-primary-foreground mb-4">Resumo Estratégico</Badge>
          <h1 className="flex flex-wrap items-baseline gap-x-3 text-4xl md:text-5xl font-bold leading-tight mb-4">
            <span>Proposta</span>
            <span className="text-gradient-gold">Incorpe</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Racional financeiro e desembolsos — formalização prevista para novembro de 2026, com pagamentos de dezembro de 2026 a novembro de 2027.
          </p>
        </div>
      </section>

      {/* Total highlight */}
      <Card className="p-7 md:p-10 bg-gradient-gold text-primary-foreground border-0 shadow-gold">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-sm font-mono uppercase tracking-widest opacity-70 mb-2">Investimento total</p>
            <p className="text-4xl md:text-5xl font-bold">R$ 206.880,00</p>
            <p className="opacity-80 mt-2 text-sm">AI Scan · AI Shift · AI Next · Smart Route</p>
          </div>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-primary-foreground/10 backdrop-blur">
              <p className="text-xs uppercase tracking-wider opacity-70">Primeiro desembolso</p>
              <p className="text-2xl font-bold">R$ 61.720</p>
              <p className="text-xs opacity-70 mt-1">Dezembro/2026</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Composição do investimento */}
      <Card className="p-7 bg-card border-border">
        <div className="flex items-center gap-2 mb-5">
          <DollarSign className="w-4 h-4 text-primary" />
          <h3 className="font-bold uppercase tracking-wider text-xs">Composição do investimento</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
                <th className="py-3 pr-4 font-semibold">Solução</th>
                <th className="py-3 pr-4 font-semibold">Memória de cálculo</th>
                <th className="py-3 font-semibold text-right">Investimento</th>
              </tr>
            </thead>
            <tbody>
              {composicao.map((c) => (
                <tr key={c.solucao} className={c.total ? "border-t-2 border-primary/40 font-bold" : "border-b border-border/60"}>
                  <td className={`py-3.5 pr-4 ${c.total ? "text-gradient-gold" : "font-semibold"}`}>{c.solucao}</td>
                  <td className="py-3.5 pr-4 text-muted-foreground">{c.memoria}</td>
                  <td className={`py-3.5 text-right ${c.total ? "text-gradient-gold text-base" : "text-primary font-bold"}`}>{c.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Concessões e premissas */}
      <Card className="p-7 bg-card border-border">
        <div className="flex items-center gap-2 mb-5">
          <Handshake className="w-4 h-4 text-primary" />
          <h3 className="font-bold uppercase tracking-wider text-xs">Concessões e premissas comerciais</h3>
        </div>
        <ul className="space-y-3">
          {concessoes.map((c) => (
            <li key={c} className="flex gap-3 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Cronograma de desembolsos */}
      <Card className="p-7 bg-card border-border">
        <div className="flex items-center gap-2 mb-5">
          <CalendarDays className="w-4 h-4 text-primary" />
          <h3 className="font-bold uppercase tracking-wider text-xs">Cronograma mensal de desembolsos</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
                <th className="py-3 pr-4 font-semibold">Mês</th>
                <th className="py-3 pr-4 font-semibold text-right">AI Scan</th>
                <th className="py-3 pr-4 font-semibold text-right">AI Shift</th>
                <th className="py-3 pr-4 font-semibold text-right">AI Next</th>
                <th className="py-3 pr-4 font-semibold text-right">Smart Route</th>
                <th className="py-3 font-semibold text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {cronograma.map((m) => (
                <tr key={m.mes} className={m.bold ? "border-t-2 border-primary/40 font-bold" : "border-b border-border/60"}>
                  <td className={`py-3 pr-4 ${m.bold ? "text-gradient-gold" : "font-semibold"}`}>{m.mes}</td>
                  <td className="py-3 pr-4 text-right text-muted-foreground">{m.scan}</td>
                  <td className="py-3 pr-4 text-right text-muted-foreground">{m.shift}</td>
                  <td className="py-3 pr-4 text-right text-muted-foreground">{m.next}</td>
                  <td className="py-3 pr-4 text-right text-muted-foreground">{m.route}</td>
                  <td className={`py-3 text-right ${m.bold ? "text-gradient-gold" : "text-primary font-bold"}`}>{m.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-5 pt-4 border-t border-border">
          Leitura do fluxo: primeiro desembolso de R$ 61.720,00 em dez/26; parcelas extraordinárias do Smart Route em mar/27, jun/27 e set/27; encerramento dos pagamentos em nov/27. Dez/27 não possui desembolso previsto.
        </p>
      </Card>

      {/* Nota */}
      <Card className="p-6 bg-card border-border flex gap-3">
        <FileText className="w-4 h-4 text-primary shrink-0 mt-0.5" />
        <p className="text-xs text-muted-foreground leading-relaxed">
          Este resumo consolida as condições financeiras propostas para negociação. Escopos, datas de execução, entregáveis e demais condições constarão dos instrumentos contratuais.
        </p>
      </Card>
    </div>
  );
}
