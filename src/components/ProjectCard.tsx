import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Você precisará instalar react-icons (npm install react-icons)

// Tipagem atualizada para o componente
type Props = {
  title: string;
  description: string;
  tags: string[]; // Novo: Array de tecnologias
  githubUrl: string; // Novo: Link obrigatório para o GitHub
  liveUrl?: string; // Novo: Link opcional para demo ao vivo
};

export default function ProjectCard({ title, description, tags, githubUrl, liveUrl }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }} // Animação mais suave
      className="bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-700 hover:border-indigo-500 transition-all flex flex-col h-full"
    >
      <h3 className="text-2xl font-bold text-indigo-400 mb-2">{title}</h3>
      <p className="text-gray-300 mt-2 flex-grow">{description}</p>
      
      {/* Seção de Tags/Tecnologias */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium bg-indigo-900/50 text-indigo-200 px-3 py-1 rounded-full shadow-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Seção de Links/Ações */}
      <div className="mt-6 pt-4 border-t border-gray-700 flex justify-end gap-4">
        
        {/* Link para o GitHub (Sempre presente) */}
        <a 
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Ver Código no GitHub"
          className="p-3 rounded-full bg-gray-700 text-white hover:bg-indigo-600 transition"
        >
          <FaGithub size={20} />
        </a>

        {/* Link para o Projeto Online (Opcional) */}
        {liveUrl && (
          <a 
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Ver Projeto Online"
            className="p-3 rounded-full bg-gray-700 text-white hover:bg-indigo-600 transition"
          >
            <FaExternalLinkAlt size={20} />
          </a>
        )}
      </div>
    </motion.div>
  );
}