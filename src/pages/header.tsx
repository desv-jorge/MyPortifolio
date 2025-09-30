// src/components/Header.tsx
export default function Header() {
  return (
    <header className="flex justify-between items-center py-6">
      <h1 className="text-xl font-bold">Nathanael Jorge</h1>
      <nav className="flex gap-6">
        <a href="#about" className="hover:text-indigo-400">Sobre</a>
        <a href="#projects" className="hover:text-indigo-400">Projetos</a>
        <a href="#contact" className="hover:text-indigo-400">Contato</a>
      </nav>
    </header>
  );
}
