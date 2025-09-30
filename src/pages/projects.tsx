import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard"; // Certifique-se de que este componente aceita o objeto de projeto completo

// Tipagem básica para um projeto (assumindo TSX)
interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string; // Opcional
}

// Configuração de animação para os cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Atraso entre os cards
      delayChildren: 0.5, // Atraso para iniciar após o título
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Dados ricos dos seus principais projetos (Baseado no CV)
const projectsData: Project[] = [
  {
    title: "Assistente de IA 'Davince'",
    description: "Chatbot de IA conversacional focado em suporte técnico, utilizando Geração Aumentada por Recuperação (RAG) para consultas semânticas.",
    tags: ["FastAPI", "Python", "LangChain", "MongoDB Atlas (Vector Store)", "RAG", "Redis Cloud", "Microsserviços"],
    githubUrl: "https://github.com/Fyzz-Tech/Davince", // 
    liveUrl: undefined, // Se não tiver demo ao vivo
  },
  {
    title: "Sistema de Gerenciamento para Loja de Celulares",
    description: "MVP FullStack desenvolvido com metodologia Scrum, focado em gestão e vendas, incluindo autenticação segura e otimização de cache.",
    tags: ["React", "TailwindCSS", "FastAPI", "MongoDB", "JWT", "Scrum Master", "Otimização de Cache"],
    githubUrl: "https://github.com/desv-jorge/Management-System", // 
    liveUrl: undefined,
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="min-h-screen container mx-auto px-6 py-20">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-white mb-12 border-b-2 border-indigo-400 pb-2 inline-block"
      >
        Projetos em <span className="text-indigo-400">Destaque</span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projectsData.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectCard 
              title={project.title} 
              description={project.description} 
              tags={project.tags} // Certifique-se de que ProjectCard renderiza as tags
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-16 text-center"
      >
        <p className="text-lg text-gray-400">
          Para ver o código completo e mais projetos, visite meu GitHub.
        </p>
        <a 
          href="https://github.com/desv-jorge" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block mt-4 px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-semibold text-lg shadow-xl"
        >
          Ver Todos no GitHub
        </a>
      </motion.div>
    </section>
  );
}

// NOTA: Você precisará atualizar o seu componente ProjectCard.jsx para aceitar 
// 'tags', 'githubUrl' e 'liveUrl' e exibi-los.