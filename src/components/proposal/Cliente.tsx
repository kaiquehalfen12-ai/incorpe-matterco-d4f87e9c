import incorpeLogo from "@/assets/incorpe-logo.png";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Target, Award, TrendingUp, Building2, MapPin, CheckCircle2 } from "lucide-react";

// ─────────────────────────────────────────────
// INCORPE
// ─────────────────────────────────────────────
export function ClienteIncorpe() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-12">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative flex flex-col md:flex-row gap-6 items-start">
          <div className="w-24 h-24 rounded-2xl bg-white p-3 flex items-center justify-center shrink-0">
            <img src={incorpeLogo} alt="INCORPE" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-primary font-mono uppercase tracking-widest mb-2">Cliente · Setor Imobiliário</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">INCORPE</h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Empresa do setor imobiliário focada no desenvolvimento de loteamentos e bairros planejados, com atuação voltada para a realização do sonho da casa própria e valorização patrimonial.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <a href="https://www.incorpe.com.br/" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline">
                <Globe className="w-3.5 h-3.5" /> incorpe.com.br
              </a>
              <Badge variant="outline" className="border-primary/30 text-primary">Setor Imobiliário</Badge>
              <Badge variant="outline" className="border-border">Bairros Planejados</Badge>
              <Badge variant="outline" className="border-border">Loteamentos</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Info cards row */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Card className="p-5 bg-card border-border flex items-start gap-3">
          <Building2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Segmento</p>
            <p className="font-semibold">Incorporação Imobiliária</p>
          </div>
        </Card>
        <Card className="p-5 bg-card border-border flex items-start gap-3">
          <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Atuação</p>
            <p className="font-semibold">Bairros planejados & loteamentos</p>
          </div>
        </Card>
        <Card className="p-5 bg-card border-border flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Certificações</p>
            <p className="font-semibold">ISO 9001 · PBQPH</p>
          </div>
        </Card>
      </div>

      {/* Sections */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-7 bg-card border-border">
          <Section icon={Target} title="Posicionamento" items={[
            "Desenvolvimento de bairros planejados e loteamentos residenciais",
            "Foco em qualidade de vida, segurança e valorização imobiliária",
            "Apelo emocional ligado à conquista do patrimônio familiar",
            "Atuação pautada em transparência, inovação e compromisso",
          ]} />
        </Card>

        <Card className="p-7 bg-card border-border">
          <Section icon={Award} title="Diferenciais Competitivos" items={[
            "Infraestrutura completa nos empreendimentos",
            "Documentação regularizada e segurança jurídica",
            "Certificações ISO 9001 e PBQPH",
            "Programas habitacionais (Minha Casa Minha Vida)",
            "Atendimento consultivo pré e pós-venda",
          ]} />
        </Card>
      </div>

      <Card className="p-7 bg-card border-border">
        <Section icon={TrendingUp} title="Objetivos Estratégicos" items={[
          "Fortalecer autoridade e credibilidade no mercado imobiliário",
          "Gerar percepção de confiança e segurança",
          "Potencializar geração de leads qualificados",
          "Ampliar presença digital e posicionamento institucional",
        ]} />
      </Card>
    </div>
  );
}

// ─────────────────────────────────────────────
// shared
// ─────────────────────────────────────────────
function Section({ icon: Icon, title, items }: { icon: typeof Target; title: string; items: string[] }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4 text-primary" />
        <h3 className="font-bold uppercase tracking-wider text-xs">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i} className="flex gap-3 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
