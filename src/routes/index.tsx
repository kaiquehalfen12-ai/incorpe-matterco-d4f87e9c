import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import matterLogo from "@/assets/matter-logo.png";
import { SobreMatter } from "@/components/proposal/SobreMatter";
import { ClienteIncorpe } from "@/components/proposal/Cliente";
import { PropostaIncorpe } from "@/components/proposal/PropostaIncorpe";
import { Resumo } from "@/components/proposal/Resumo";
import {
  SmartRoutePrototype, SmartCodePrototype, SmartSquadPrototype,
  MatterAcademyPrototype,
} from "@/components/proposal/Prototypes";
import { Menu, X, ChevronRight, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Matter&Co. · Proposta INCORPE" },
      { name: "description", content: "Proposta estratégica Matter&Co. para INCORPE — eficiência operacional, tecnologia, escala e inteligência empresarial." },
      { property: "og:title", content: "Matter&Co. · Proposta INCORPE" },
      { property: "og:description", content: "Proposta estratégica Matter&Co. para INCORPE — eficiência operacional, tecnologia, escala e inteligência empresarial." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

type TabId =
  | "sobre" | "cliente-incorpe" | "incorpe" | "resumo"
  | "p-route" | "p-code" | "p-squad" | "p-academy";

const tabs: { id: TabId; label: string; group: string }[] = [
  { id: "sobre",           label: "Sobre a Matter",    group: "Institucional"   },
  { id: "cliente-incorpe", label: "INCORPE",            group: "Cliente"         },
  { id: "incorpe",         label: "Proposta",           group: "Proposta"        },
  { id: "resumo",          label: "Resumo Estratégico", group: "Proposta"        },
  { id: "p-route",         label: "Smart Route",        group: "Produtos Matter" },
  { id: "p-code",          label: "Smart Code",         group: "Produtos Matter" },
  { id: "p-squad",         label: "Smart Squad",        group: "Produtos Matter" },
  { id: "p-academy",       label: "Matter Academy",     group: "Produtos Matter" },
];

function Index() {
  const [active, setActive] = useState<TabId>("sobre");
  const [navOpen, setNavOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("proposal-theme");
    if (savedTheme === "light") setTheme("light");
  }, []);

  const groups = Array.from(new Set(tabs.map(t => t.group)));

  const handleTabClick = (id: TabId) => {
    setActive(id);
    setNavOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("proposal-theme", nextTheme);
  };

  return (
    <div className={`${theme} flex min-h-screen bg-background text-foreground`}>
      {/* Mobile backdrop */}
      {navOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setNavOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`proposal-sidebar fixed inset-y-0 left-0 z-50 w-64 flex flex-col border-r backdrop-blur-xl transition-transform duration-300 ease-in-out ${navOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="p-5 border-b border-border shrink-0">
          <img src={matterLogo} alt="Matter&Co." className="h-7" />
          <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mt-2 leading-relaxed">
            Proposta · INCORPE
          </p>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav flex-1 overflow-y-auto py-5 px-3 space-y-5">
          {groups.map((g) => (
            <div key={g}>
              <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mb-1.5 px-2">{g}</p>
              <div className="space-y-0.5">
                {tabs.filter(t => t.group === g).map(t => (
                  <button
                    key={t.id}
                    onClick={() => handleTabClick(t.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-between group ${
                      active === t.id
                        ? "bg-primary text-primary-foreground shadow-gold"
                        : "text-muted-foreground hover:text-foreground hover:bg-border/20"
                    }`}
                  >
                    <span>{t.label}</span>
                    {active === t.id && <ChevronRight className="w-3.5 h-3.5 shrink-0" />}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Sidebar footer */}
        <div className="p-4 border-t border-border shrink-0">
          <Button
            variant="ghost"
            className="mb-3 w-full justify-start gap-2"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
            title={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            {theme === "dark" ? "Tema claro" : "Tema escuro"}
          </Button>
          <p className="text-[10px] text-muted-foreground font-mono">Proposta · 10.09.2026</p>
          <p className="text-[10px] text-muted-foreground font-mono mt-0.5 opacity-60">© 2026 Matter&Co.</p>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Mobile top bar */}
        <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl lg:hidden shrink-0">
          <div className="px-4 h-14 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img src={matterLogo} alt="Matter&Co." className="h-6" />
              <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
                {tabs.find(t => t.id === active)?.label}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="shrink-0"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
                title={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="shrink-0"
                onClick={() => setNavOpen(!navOpen)}
                aria-label="Menu"
              >
                {navOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 md:px-10 py-10 md:py-14 w-full max-w-[1100px]">
          {active === "sobre"           && <SobreMatter />}
          {active === "cliente-incorpe" && <ClienteIncorpe />}
          {active === "incorpe"         && <PropostaIncorpe />}
          {active === "resumo"          && <Resumo />}
          {active === "p-route"         && <SmartRoutePrototype />}
          {active === "p-code"          && <SmartCodePrototype />}
          {active === "p-squad"         && <SmartSquadPrototype />}
          {active === "p-academy"       && <MatterAcademyPrototype />}
        </main>

        <footer className="border-t border-border bg-card/30 py-8 mt-10">
          <div className="px-4 md:px-10 max-w-[1100px] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={matterLogo} alt="Matter&Co." className="h-6 opacity-70" />
              <span className="text-xs text-muted-foreground">© 2026 Matter&Co. — Inteligência de negócios.</span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">Proposta 10.09.2026</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
