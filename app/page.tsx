"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, FileText, Shield, Wrench, Image as ImageIcon, Mail, Phone, MapPin, ClipboardList, Building2, MessageSquare } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useState } from "react";

const CLIENT_LOGOS = [
  "/assets/clients/belive.png",
  "/assets/clients/bembrasil.png",
  "/assets/clients/bravo.png",
  "/assets/clients/certrim.jpeg",
  "/assets/clients/elephant.jpeg",
  "/assets/clients/gerolin.jpeg",
  "/assets/clients/limpaentulho.jpeg",
  "/assets/clients/logum.png"
];

export default function Page() {
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as any;
    const payload = {
      name: form.nome.value,
      email: form.email.value,
      message: form.mensagem.value,
      honeypot: form.company?.value || ""
    };
    setSending(true);
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (res.ok) setOk(true);
      const wa = buildWhatsAppLink("5534991709857", `Olá, sou ${payload.name}. Acabei de enviar pelo site e gostaria de falar sobre: ${payload.message}`);
      window.open(wa, "_blank");
      form.reset();
    } catch (e) {
      console.error(e);
    } finally {
      setSending(false);
    }
  }

  const Pill = ({ children }: any) => (<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm text-white/80">{children}</span>);
  const Section = ({ id, children, className = "" }: any) => (<section id={id} className={`max-w-7xl mx-auto px-6 md:px-8 ${className}`}>{children}</section>);

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Header />

      <Section id="hero" className="pt-16 md:pt-24 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Pill><Shield className="h-4 w-4" /> Engenharia de Segurança para obras e indústria</Pill>
            <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
              Segurança que acelera a sua obra —
              <span className="block text-emerald-400">compliance sem fricção</span>
            </h1>
            <p className="mt-4 text-white/70 max-w-xl">
              Consultoria completa em SST: checklists NR, homologação de terceiros, PGR, PT digital, treinamentos e indicadores. Tudo organizado para você focar na execução.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contato" className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-medium hover:bg-emerald-400">Falar com especialista <ArrowRight className="h-4 w-4" /></a>
              <a href="#clientes" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 text-sm hover:bg-white/5">Ver quem confia</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-xs text-white/60">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Atendimento Brasil</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Foco em NR‑18, NR‑12, NR‑33, NR‑35</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-emerald-700/20 to-transparent blur-2xl"></div>
            <div className="relative aspect-[4/3] w-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4 grid place-items-center">
              <img src="/assets/logo-oliveira.png" alt="Logo Oliveira" className="max-h-full object-contain rounded-2xl" />
            </div>
          </div>
        </div>
      </Section>

      <Section id="servicos" className="py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Homologação de Terceiros", desc: "Portal de envio e validação de documentação (ASO, treinamentos, PGR, OS).", icon: FileText },
            { title: "Checklists e Auditorias NR", desc: "NR‑18, NR‑12, NR‑33, NR‑35 com evidências fotográficas e plano de ação.", icon: ClipboardList },
            { title: "Treinamentos & Capacitações", desc: "Conteúdo prático com emissão de certificados e controle de validade.", icon: Wrench },
            { title: "PT Digital e RDO", desc: "Formulários responsivos, assinaturas e exportação PDF/Excel.", icon: Shield },
            { title: "Implantação em Canteiro", desc: "Layout, sinalização, kits de emergência e rotinas de inspeção.", icon: Building2 },
            { title: "Indicadores e KPIs", desc: "Dashboards com metas, status e evidências para gestão executiva.", icon: CheckCircle2 },
          ].map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-white/10 bg-black/60 p-2"><Icon className="h-5 w-5" /></div>
                <h3 className="font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="normas" className="py-16 md:py-24">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Normas que dominamos</h2>
          <Pill><ImageIcon className="h-4 w-4" /> Atualizadas 2025</Pill>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {["NR‑01 — Disposições Gerais","NR‑05 — CIPA","NR‑06 — EPI","NR‑10 — Eletricidade","NR‑12 — Máquinas e Equipamentos","NR‑18 — Canteiro de Obras","NR‑33 — Espaços Confinados","NR‑35 — Trabalho em Altura"]
            .sort((a,b)=>parseInt(a.replace(/[^0-9]/g,'')) - parseInt(b.replace(/[^0-9]/g,''))).map((n) => (
            <div key={n} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">{n}</div>
          ))}
        </div>
      </Section>

      <Section id="clientes" className="py-16 md:py-24">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Nossos Clientes</h2>
          <span className="text-sm text-white/60">Logos em rolagem contínua</span>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="animate-[marquee_25s_linear_infinite] flex items-center gap-10 min-w-max">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((src, idx) => (
              <div key={idx} className="h-12 w-36 grid place-items-center opacity-90 hover:opacity-100 transition">
                <img src={src} alt={`Cliente ${idx + 1}`} className="max-h-10 object-contain grayscale brightness-125 contrast-110 hover:grayscale-0 transition" />
              </div>
            ))}
          </div>
          <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
        </div>
      </Section>

      <Section id="contato" className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Fale com a gente</h2>
            <p className="mt-2 text-white/70">Envie uma mensagem e retornamos ainda hoje (horário comercial).</p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a className="hover:underline" href="mailto:leopoldo.oliveira@gmail.com">leopoldo.oliveira@gmail.com</a></div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> <a className="hover:underline" href="tel:+5534991709857">(34) 99170‑9857</a></div>
              <div className="flex items-center gap-2"><MessageSquare className="h-4 w-4" /> <a className="hover:underline" href={buildWhatsAppLink("5534991709857","Olá! Quero um orçamento.")} target="_blank" rel="noreferrer">WhatsApp direto</a></div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> São Paulo • Atuação Brasil</div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 grid gap-4">
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid gap-2">
              <label htmlFor="nome" className="text-sm text-white/80">Nome</label>
              <input id="nome" name="nome" className="rounded-xl bg-black/50 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Seu nome" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm text-white/80">E‑mail</label>
              <input id="email" name="email" type="email" className="rounded-xl bg-black/50 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="voce@empresa.com" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="mensagem" className="text-sm text-white/80">Mensagem</label>
              <textarea id="mensagem" name="mensagem" rows={4} className="rounded-xl bg-black/50 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Conte rapidamente o que você precisa" />
            </div>
            <button disabled={sending} type="submit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-medium hover:bg-emerald-400 disabled:opacity-60">
              {sending ? "Enviando..." : "Enviar interesse"}
            </button>
            {ok && <p className="text-xs text-emerald-400">Mensagem enviada! Vamos falar com você.</p>}
            <p className="text-xs text-white/50">*Formulário: envia e-mail (Resend) e abre WhatsApp com sua mensagem.</p>
          </form>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
