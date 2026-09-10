import { useState } from "react";
import { ProposalHeader } from "./ProposalHeader";
import { ModuleCard, type Module } from "./ModuleCard";
import { Card } from "@/components/ui/card";
import {
  Compass, Cpu, Users, GraduationCap, Calendar, Zap, BookOpen, Scan,
  Building2, Wallet, Calculator, ShoppingCart, HardHat, BellRing, FileSpreadsheet,
  CalendarClock, CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

function aiScanModule(number: string): Module {
  return {
    number,
    name: "AI Scan",
    subtitle: "Escaneamento de Maturidade em IA",
    icon: Scan,
    description: "Escaneamento de maturidade de IA da empresa, avaliando ferramentas, pessoas, cultura, processos e governança.",
    objective: [
      "Mapear a maturidade atual em IA",
      "Identificar gaps e oportunidades de aplicação",
      "Desenhar plano de evolução para níveis avançados de IA",
    ],
    deliverables: [
      "Avaliação de ferramentas de IA em uso e disponíveis",
      "Diagnóstico de maturidade das pessoas e da cultura em relação à IA",
      "Mapeamento de processos e oportunidades de aplicação de IA",
      "Avaliação da governança de dados e de IA",
      "Score de maturidade por dimensão",
      "Plano de ação para evolução a níveis mais avançados de IA",
    ],
    duration: "4 semanas",
    investment: "BRL 19.880",
    investmentNote: "100% de desconto ao contratar Smart Route ou Smart Code",
    badge: "Diagnóstico",
  };
}

function smartRouteModule(): Module {
  return {
    number: "03",
    name: "Smart Route",
    subtitle: "Plano Estratégico de Escala e Eficiência",
    icon: Compass,
    description: "Planejamento estratégico e inteligência comercial potencializada por IA para acelerar vendas e conquistar novos mercados.",
    objective: [
      "Organizar o próximo ciclo de crescimento",
      "Estruturar a arquitetura de gestão",
      "Mapear gargalos operacionais",
      "Desenhar a nova camada tecnológica",
      "Estruturar indicadores",
      "Construir a lógica de eficiência operacional do grupo",
    ],
    deliverables: [
      "Diagnóstico executivo",
      "Imersão operacional",
      "Mapeamento da cadeia de valor",
      "Mapeamento de processos",
      "Mapeamento de sistemas",
      "Análise da estrutura organizacional",
      "Análise de KPIs",
      "Análise financeira-operacional",
      "Roadmap tecnológico",
      "Roadmap de IA e automação",
      "Governança",
      "Priorização executiva",
      "Modelo de acompanhamento",
    ],
    duration: "4 meses",
    investment: "1+4 de BRL 28.880",
    investmentNote: "Entrada + 4 parcelas mensais",
    badge: "Fundação",
    highlight: true,
  };
}

function smartCodeModule(): Module {
  return {
    number: "04",
    name: "Smart Code",
    subtitle: "Núcleo de Tecnologia, IA e Automação",
    icon: Cpu,
    description: "Transformar estratégia em produto digital proprietário — do diagnóstico ao MVP em produção.",
    objective: "Transformar a operação em uma operação orientada por inteligência.",
    deliverables: [
      "Integração ERP + BI",
      "Integração WhatsApp + CRM + cobrança",
      "RPA",
      "Automação financeira",
      "Automação de cobrança",
      "Painéis executivos",
      "Monitoramento operacional",
      "Gestão de distratos",
      "Gestão de inadimplência",
      "Gestão da esteira de aprovação",
      "Painéis de engenharia",
      "Painéis de vendas",
      "Painéis de lote",
      "Monitoramento de produtividade",
      "IA para leitura operacional",
      "IA para gestão executiva",
      "Central de indicadores",
      "Motor de alertas operacionais",
    ],
    duration: "4 meses",
    investment: "BRL 30.000",
  };
}

function smartSquadModule(number: string): Module {
  return {
    number,
    name: "Smart Squad",
    subtitle: "Evolução contínua e Operação de Inteligência",
    icon: Users,
    description: "Time dedicado de IA aplicada operando por área da Incorpe — uma frente operacional por mês, com agentes, automações e mapeamento de evolução para cada setor.",
    objective: [
      "Evoluir sistemas",
      "Desenvolver melhorias",
      "Criar automações",
      "Implementar IA",
      "Acompanhar indicadores",
      "Melhorar eficiência",
      "Manter o roadmap tecnológico vivo",
    ],
    deliverables: [
      "Squad contínuo — Time dedicado de IA aplicada",
      "Sustentação tecnológica",
      "Novos casos de uso de IA por área",
      "Consultoria estratégica recorrente ao CTO e liderança",
      "Aceleração de IA — Replicação por novas áreas",
      "Pilotos de inovação contínuos",
    ],
    duration: "7 meses — 1 área por mês",
    investment: "BRL 9.880 /mês",
    optionalAddons: [
      { name: "Smart Pulse", value: "BRL 3.000 /mês" },
    ],
  };
}

const squadStages: { month: number; area: string; icon: LucideIcon; items: string[] }[] = [
  {
    month: 1, area: "Engenharia", icon: Building2,
    items: ["Propostas", "Projetos", "Aprovações", "Conferências", "Mapeamento de desenvolvimento do setor"],
  },
  {
    month: 2, area: "Financeiro", icon: Wallet,
    items: ["Controle de fluxo de caixa", "Controle de IPTUs", "Agentes para tarefas repetitivas", "Mapeamento de desenvolvimento do setor"],
  },
  {
    month: 3, area: "Contabilidade", icon: Calculator,
    items: ["Consolidação automática de dados", "Agentes para tarefas repetitivas", "Mapeamento de desenvolvimento do setor"],
  },
  {
    month: 4, area: "Compras", icon: ShoppingCart,
    items: ["Mapas de cotações automáticos", "Solicitações e compras automáticas", "Mapeamento de desenvolvimento do setor", "Agentes para tarefas repetitivas"],
  },
  {
    month: 5, area: "Obras", icon: HardHat,
    items: ["Automação de cronogramas", "Pedidos automáticos conforme avanço de obra", "Agentes para tarefas repetitivas"],
  },
  {
    month: 6, area: "Cobrança", icon: BellRing,
    items: ["Relatórios", "Controle de notificações", "Automação de notificações", "Automação de distratos", "Agentes para tarefas repetitivas"],
  },
  {
    month: 7, area: "Orçamento", icon: FileSpreadsheet,
    items: ["Elaboração prévia automática conforme projetos", "Apropriação automática", "Relatórios de conferência e desvios"],
  },
];

function SquadStagesTimeline() {
  return (
    <Card className="p-6 md:p-8 bg-card border-border">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
          <CalendarClock className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Smart Squad — roadmap por área</h3>
          <p className="text-xs text-muted-foreground">Uma frente operacional por mês, com agentes de IA e automações dedicadas a cada setor.</p>
        </div>
      </div>
      <div className="space-y-3">
        {squadStages.map((s) => (
          <div key={s.month} className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 rounded-2xl bg-background/50 border border-border">
            <div className="flex items-center gap-3 sm:w-44 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">Mês {s.month}</p>
                <p className="font-bold text-sm">{s.area}</p>
              </div>
            </div>
            <ul className="flex-1 grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
              {s.items.map((i) => (
                <li key={i} className="text-xs text-muted-foreground flex gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />{i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
}

type TimelineTrack = { name: string; months: number; note?: string };

function ProjectTimeline({ tracks, totalMonths }: { tracks: TimelineTrack[]; totalMonths: number }) {
  return (
    <Card className="p-6 md:p-8 bg-card border-border">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
          <CalendarClock className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Cronograma do projeto</h3>
          <p className="text-xs text-muted-foreground">Todas as frentes começam simultaneamente, no mesmo período — Mês 1.</p>
        </div>
      </div>
      <div className="space-y-4 mt-6">
        {tracks.map((t) => (
          <div key={t.name} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <div className="sm:w-48 shrink-0">
              <p className="text-sm font-semibold">{t.name}</p>
              {t.note && <p className="text-[11px] text-muted-foreground">{t.note}</p>}
            </div>
            <div className="flex-1 h-3.5 rounded-full bg-background/60 border border-border relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-gold"
                style={{ width: `${Math.max((t.months / totalMonths) * 100, 6)}%` }}
              />
            </div>
            <span className="sm:w-24 shrink-0 sm:text-right text-xs text-muted-foreground font-mono">
              {t.months} {t.months === 1 ? "mês" : "meses"}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
        <span className="w-2 h-2 rounded-full bg-primary shrink-0" /> Início simultâneo de todas as frentes — Mês 1
      </div>
    </Card>
  );
}

const PARTICIPANTS = 15;

const academy = [
  {
    name: "AI Shift",
    sub: "Imersão Executiva",
    icon: Zap,
    time: "8 horas de imersão",
    price: "BRL 980 /pessoa",
    priceNote: `${PARTICIPANTS} colaboradores · Total BRL 14.700 (de BRL 1.500)`,
    desc: "Programa de formação acessível em IA aplicada ao trabalho e negócios, para profissionais e empresas em transição digital.",
    items: ["Imersão para mínimo 15 participantes", "Estratégia de transformação digital", "Framework de aplicações contextualizado", "Plano de aplicação da IA na organização"],
  },
  {
    name: "AI Next",
    sub: "Formação Contínua",
    icon: BookOpen,
    time: "12 meses · 3 meses por faixa",
    price: "BRL 250 /pessoa-mês",
    priceNote: `${PARTICIPANTS} colaboradores · BRL 3.750 /mês`,
    desc: "Jornada Faixa Branca → Verde → Marrom → Preta. Metodologia TD Matter para construção de cultura de IA.",
    items: ["Jornada por faixas (Branca → Preta)", "Treinamento contínuo (Metodologia TD Matter)", "Construção de cultura IA", "Formação prática em ferramentas de IA", "Certificação Matter Academy"],
  },
];

function MatterLearnCard({ moduleNumber }: { moduleNumber?: string }) {
  return (
    <Card className="bg-card border-border p-8 md:p-10">
      <div className="flex items-start gap-5 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-gold">
          <GraduationCap className="w-7 h-7" />
        </div>
        <div>
          {moduleNumber && <p className="text-xs text-primary font-mono uppercase tracking-widest mb-1">MÓDULO {moduleNumber}</p>}
          <h3 className="text-2xl md:text-3xl font-bold">Matter Learn — Capacitação</h3>
          <p className="text-muted-foreground mt-1">Tirar o medo → Gerar linguagem comum → Destravar decisões</p>
        </div>
      </div>
      <p className="text-foreground/80 mb-8 leading-relaxed">
        Programas premium para líderes e equipes, focados no domínio da IA aplicada à estratégia e ao negócio — dimensionados para {PARTICIPANTS} pessoas.
      </p>
      <div className="grid md:grid-cols-2 gap-5">
        {academy.map((a) => (
          <div key={a.name} className="p-6 rounded-2xl border border-border bg-background/40 hover:border-primary/40 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <a.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-tight">{a.name}</h4>
                  <p className="text-xs text-muted-foreground">{a.sub}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-primary">{a.price}</p>
                {a.priceNote && <p className="text-[11px] text-muted-foreground">{a.priceNote}</p>}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{a.desc}</p>
            <ul className="space-y-1.5 mb-4">
              {a.items.map((i) => (
                <li key={i} className="text-xs text-muted-foreground flex gap-2">
                  <span className="text-primary">▸</span>{i}
                </li>
              ))}
            </ul>
            <div className="text-xs text-muted-foreground pt-3 border-t border-border flex items-center gap-2">
              <Calendar className="w-3 h-3" /> {a.time}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function OptionToggle<T extends string>({
  options, value, onChange,
}: { options: { id: T; label: string }[]; value: T; onChange: (v: T) => void }) {
  return (
    <div className="inline-flex flex-wrap gap-1.5 p-1.5 rounded-full bg-card border border-border">
      {options.map((o) => (
        <button
          key={o.id}
          onClick={() => onChange(o.id)}
          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
            value === o.id
              ? "bg-primary text-primary-foreground shadow-gold"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

type MainOption = "A" | "B";
type SubOption = "B1" | "B2";

export function PropostaIncorpe() {
  const [option, setOption] = useState<MainOption>("A");
  const [subOption, setSubOption] = useState<SubOption>("B1");

  return (
    <div className="space-y-10">
      <ProposalHeader
        eyebrow="Proposta Incorpe"
        title="INCORPE"
        subtitle="Eficiência operacional, tecnologia, escala e inteligência empresarial para a próxima década do grupo."
      />

      <div className="space-y-3">
        <p className="text-xs text-primary font-mono uppercase tracking-widest">Escolha o formato da proposta</p>
        <OptionToggle
          value={option}
          onChange={setOption}
          options={[
            { id: "A", label: "Opção A · Sob Demanda" },
            { id: "B", label: "Opção B · Visão do Roque" },
          ]}
        />
      </div>

      {option === "A" && (
        <div className="space-y-6">
          <ModuleCard m={aiScanModule("01")} />
          <ModuleCard m={smartSquadModule("02")} />
          <SquadStagesTimeline />
          <ProjectTimeline
            totalMonths={7}
            tracks={[
              { name: "AI Scan", months: 1, note: "4 semanas" },
              { name: "Smart Squad", months: 7, note: "1 área por mês, contínuo" },
            ]}
          />
        </div>
      )}

      {option === "B" && (
        <div className="space-y-8">
          <OptionToggle
            value={subOption}
            onChange={setSubOption}
            options={[
              { id: "B1", label: "Opção B-1 · Escopo completo" },
              { id: "B2", label: "Opção B-2 · Matter Learn" },
            ]}
          />

          {subOption === "B1" && (
            <div className="space-y-6">
              <MatterLearnCard moduleNumber="01" />
              <ModuleCard m={aiScanModule("02")} />
              <ModuleCard m={smartRouteModule()} />
              <ModuleCard m={smartCodeModule()} />
              <ModuleCard m={smartSquadModule("05")} />
              <SquadStagesTimeline />
              <ProjectTimeline
                totalMonths={12}
                tracks={[
                  { name: "Matter Learn · AI Shift", months: 1, note: "1 dia · 8 horas de imersão" },
                  { name: "AI Scan", months: 1, note: "4 semanas" },
                  { name: "Smart Route", months: 4, note: "Fundação estratégica" },
                  { name: "Smart Code", months: 4, note: "Tecnologia e automação" },
                  { name: "Smart Squad", months: 7, note: "1 área por mês, contínuo" },
                  { name: "Matter Learn · AI Next", months: 12, note: "Formação contínua por faixas" },
                ]}
              />
            </div>
          )}

          {subOption === "B2" && (
            <div className="space-y-6">
              <MatterLearnCard />
              <ProjectTimeline
                totalMonths={12}
                tracks={[
                  { name: "Matter Learn · AI Shift", months: 1, note: "1 dia · 8 horas de imersão" },
                  { name: "Matter Learn · AI Next", months: 12, note: "Formação contínua por faixas" },
                ]}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
