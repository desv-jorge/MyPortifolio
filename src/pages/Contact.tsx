import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"; // Você precisará instalar react-icons

// Configuração de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section className="min-h-screen container mx-auto px-6 py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-extrabold text-white mb-10 border-b-2 border-indigo-400 pb-2 inline-block"
        >
          Entre em <span className="text-indigo-400">Contato</span>
        </motion.h2>

        {/* Informações Diretas de Contato (Baseado no CV) */}
        <motion.div variants={itemVariants} className="mb-12 p-6 bg-gray-800/50 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-indigo-300 mb-4">
            Me Encontre Diretamente
          </h3>
          <ul className="space-y-3 text-lg text-gray-300">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-400 shrink-0" size={20} />
              <a href="mailto:nathanael.jorge@aluno.uepb.edu.br" className="hover:text-indigo-400 transition">
                nathanael.jorge@aluno.uepb.edu.br 
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-indigo-400 shrink-0" size={20} />
              <span className="text-gray-300">(83) 9 3300-9564 </span>
            </li>
          </ul>
        </motion.div>

        {/* Conexão Social */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-semibold text-indigo-300 mb-4">
            Conecte-se nas Redes
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            Acompanhe meu trabalho, contribuições e minha jornada profissional:
          </p>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/desv-jorge" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-700 hover:bg-indigo-600 transition text-white font-semibold"
            >
              <FaGithub size={20} /> GitHub 
            </a>
            <a 
              href="https://www.linkedin.com/in/jorge-nathanael" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-400 text-white hover:border-indigo-400 hover:text-indigo-400 transition font-semibold"
            >
              <FaLinkedin size={20} /> LinkedIn 
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}