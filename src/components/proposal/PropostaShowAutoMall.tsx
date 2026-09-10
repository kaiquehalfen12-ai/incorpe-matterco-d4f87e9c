import { ProposalHeader } from "./ProposalHeader";
import { ModuleCard, type Module } from "./ModuleCard";
import { Compass, Palette, Cpu, Rocket } from "lucide-react";

const modules: Module[] = [
  {
    number: "01",
    name: "Smart Route",
    subtitle: "Plano Estratégico do Shopping",
    icon: Compass,
    description: "Planejamento estratégico e inteligência comercial potencializada por IA para acelerar vendas e conquistar novos mercados.",
    objective: "Reposicionamento estratégico do Shopping Auto Mall.",
    deliverables: [
      "Diagnóstico",
      "Mapeamento comercial",
      "Análise de jornada",
      "Benchmark",
      "Estratégia de posicionamento",
      "Estratégia de tráfego",
      "Estratégia de dominância regional",
      "Modelo de aquisição",
      "Modelo de relacionamento",
      "Plano de crescimento",
      "Governança comercial",
      "Modelo de ativação e eventos",
    ],
    duration: "4 meses",
    investment: "1+4 de BRL 28.880",
    investmentNote: "Entrada + 4 parcelas mensais",
    badge: "Fundação",
    highlight: true,
  },
  {
    number: "02",
    name: "Almabrands",
    subtitle: "Branding e Posicionamento",
    icon: Palette,
    description: "Reposicionamento de marca para transformar o Shopping Auto Mall no principal polo automotivo da região.",
    objective: "Transformar o Shopping Auto Mall no principal polo automotivo da região.",
    deliverables: [
      "Reposicionamento",
      "Branding",
      "Território de marca",
      "Comunicação",
      "Campanhas",
      "Sinalização",
      "Fachada",
      "Experiência física",
      "Narrativa",
      "Campanhas institucionais",
      "Arquitetura de comunicação",
    ],
    duration: "2 meses",
    investment: "BRL 40.000",
  },
  {
    number: "03",
    name: "Smart Code",
    subtitle: "CRM e Inteligência Comercial",
    icon: Cpu,
    description: "Construção de um CRM próprio para o shopping — transformar estratégia em produto digital proprietário, do diagnóstico ao MVP em produção.",
    objective: "Construção de um CRM próprio para o shopping.",
    deliverables: [
      "Gestão centralizada de leads",
      "Tracking completo",
      "Automação de relacionamento",
      "Integração WhatsApp",
      "Distribuição inteligente",
      "Ranking de lojistas",
      "Indicadores e funil",
      "NPS",
      "CRM proprietário",
      "Dashboard executivo",
      "Campanhas automáticas",
      "Motor de relacionamento",
      "Base de clientes do shopping",
      "Remarketing",
      "Dados comportamentais",
    ],
    duration: "4 meses",
    investment: "BRL 30.000",
    optionalAddons: [
      { name: "Smart Squad", value: "BRL 9.880 /mês" },
      { name: "Smart Pulse", value: "BRL 3.000 /mês" },
    ],
  },
  {
    number: "04",
    name: "Growth Machine",
    subtitle: "Operação de Crescimento e Performance",
    icon: Rocket,
    description: "Operação completa de growth — tráfego, conversão, campanhas, eventos, parcerias, mídia, ativação, dados e acompanhamento comercial.",
    objective: [
      "Gerar tráfego",
      "Melhorar conversão",
      "Estruturar campanhas e eventos",
      "Parcerias e mídia",
      "Ativação e dados",
      "Acompanhamento comercial",
    ],
    deliverables: [
      "App de acompanhamento de métricas em tempo real",
      "Jornada do cliente desenhada por tipo",
      "Dashboard de performance comercial com metas",
      "Playbook de vendas em formato de sistema",
    ],
    duration: "6 meses",
    investment: "1+6 de BRL 28.880",
    investmentNote: "Entrada + 6 parcelas mensais",
  },
];


export function PropostaShowAutoMall() {
  return (
    <div className="space-y-12">
      <ProposalHeader
        eyebrow="Proposta Show Auto Mall"
        title="Show Auto Mall BH"
        subtitle="Branding, growth, CRM e inteligência comercial — para consolidar o principal polo automotivo da região."
        accent="danger"
      />

      <div className="space-y-6">
        {modules.map((m) => <ModuleCard key={m.number} m={m} />)}
      </div>
    </div>
  );
}
