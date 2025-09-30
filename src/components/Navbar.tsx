import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#0f172a] border-b border-gray-700 px-6 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-400">Nathanael Jorge</h1>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-indigo-400 transition">Início</Link>
          <Link to="/about" className="hover:text-indigo-400 transition">Sobre</Link>
          <Link to="/projects" className="hover:text-indigo-400 transition">Projetos</Link>
          <Link to="/contact" className="hover:text-indigo-400 transition">Contato</Link>
        </div>
      </div>
    </nav>
  );
}
