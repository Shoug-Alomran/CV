export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center px-5 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Shoug Alomran home">
          <span className="glow-dot" aria-hidden="true" />
          <span className="text-base font-bold text-white">S. Alomran</span>
        </a>
      </nav>
    </header>
  );
}
