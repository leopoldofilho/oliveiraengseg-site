export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/assets/symbol-oliveira.png" alt="Oliveira símbolo" width={24} height={24} className="h-6 w-6 rounded-lg object-contain" />
          <div className="text-xs text-white/70">© {new Date().getFullYear()} Oliveira — Consultoria • Treinamento • Projetos</div>
        </div>
        <div className="flex items-center gap-4 text-xs text-white/60">
          <a href="#" className="hover:text-white">Política de Privacidade</a>
          <a href="#" className="hover:text-white">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}
