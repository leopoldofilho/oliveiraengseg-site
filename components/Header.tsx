"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 backdrop-blur bg-black/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8 py-4">
        <a href="#hero" className="flex items-center gap-3">
          <img src="/assets/symbol-oliveira.png" alt="Oliveira símbolo" width={36} height={36} className="h-9 w-9 rounded-xl object-contain" />
          <div className="leading-tight">
            <div className="font-semibold tracking-wide">OLIVEIRA</div>
            <div className="text-[10px] md:text-xs text-white/70">CONSULTORIA • TREINAMENTO • PROJETOS</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm md:text-base text-white/80 hover:text-white" href="#servicos">Serviços</a>
          <a className="text-sm md:text-base text-white/80 hover:text-white" href="#normas">Normas</a>
          <a className="text-sm md:text-base text-white/80 hover:text-white" href="#clientes">Nossos Clientes</a>
          <a className="text-sm md:text-base text-white/80 hover:text-white" href="#sobre">Sobre</a>
          <a className="text-sm md:text-base text-white/80 hover:text-white" href="#contato">Contato</a>
          <a href="#contato" className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-4 py-2 text-sm font-medium hover:bg-emerald-400">
            Solicitar proposta <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
        <button className="md:hidden rounded-xl border border-white/10 p-2" onClick={() => setOpen(v => !v)} aria-label="Abrir menu">
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/95">
          <div className="mx-auto max-w-7xl px-6 py-4 grid gap-4">
            <a className="text-white/80" href="#servicos">Serviços</a>
            <a className="text-white/80" href="#normas">Normas</a>
            <a className="text-white/80" href="#clientes">Nossos Clientes</a>
            <a className="text-white/80" href="#sobre">Sobre</a>
            <a className="text-white/80" href="#contato">Contato</a>
            <a href="#contato" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium hover:bg-emerald-400">
              Solicitar proposta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
