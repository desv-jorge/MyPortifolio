import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

// Configuração para animação sequencial
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Atraso entre os elementos internos
      delayChildren: 0.3, // Atraso para iniciar a animação
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section className="min-h-screen container mx-auto px-6 py-20">
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-extrabold text-white mb-8 border-b-2 border-indigo-400 pb-2"
        >
          Sobre <span className="text-indigo-400">Nathanael</span>
        </motion.h2>

        {/* 1. Minha Jornada */}
        <motion.div variants={itemVariants} className="mb-10 p-6 bg-gray-800/50 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-indigo-300 mb-3">
            Minha Jornada Profissional
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Tenho 19 anos e sou um desenvolvedor FullStack em formação, cursando Tecnólogo em Análise e Desenvolvimento de Sistemas na Universidade Estadual da Paraíba (UEPB), com previsão de conclusão em 07/2026. Minha base técnica foi estabelecida no Ensino Médio Técnico em Informática (2021-2023).
          </p>
          <p className="mt-3 text-lg text-gray-300 leading-relaxed">
            Minha transição para o desenvolvimento de software foi impulsionada pela experiência em Suporte Técnico (Samsung/NAGEM e Costa & Serviços), onde aprimorei o diagnóstico e a solução de problemas. Atualmente, atuo como Estagiário de Desenvolvimento Fullstack na Zandir, focando em reestruturar interfaces responsivas e otimizar a performance de sistemas.
          </p>
        </motion.div>

        {/* 2. Foco e Especialização */}
        <motion.div variants={itemVariants} className="mb-10 p-6 bg-gray-800/50 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-indigo-300 mb-3">
            Foco Atual e Expertise
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-300 ml-4">
            <li>
              Desenvolvimento FullStack: Expertise no frontend com React, Next.js e TypeScript, e no backend com Node.js (Nest.js), Python (FastAPI, Django) e APIs REST. Foco na otimização de APIs legadas e interfaces com estratégias de cache.
            </li>
            <li>
              Engenharia de IA: Experiência prática na criação de assistentes de IA com Geração Aumentada por Recuperação (RAG). Proficiência em orquestração de lógica de IA com LangChain e busca vetorial, utilizando MongoDB Atlas como Vector Store e Sentence Transformers.
            </li>
            <li>
              Infraestrutura e Dados: Proficiência em bancos de dados PostgreSQL, MySQL e NoSQL (MongoDB, Firebase). Fundamentos sólidos em Cloud Computing e deployment com AWS (EC2, S3, IAM, RDS, Lambda) e Docker (básico).
            </li>
          </ul>
        </motion.div>

        {/* 3. Missão e Valores */}
        <motion.div variants={itemVariants} className="mb-10 p-6 bg-gray-800/50 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-indigo-300 mb-3">
            Missão e Cultura de Trabalho
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Minha missão é desenvolver soluções escaláveis e eficientes, sempre priorizando a experiência do usuário e a conformidade com as diretrizes de engenharia.
          </p>
          <p className="mt-3 text-lg text-gray-300 leading-relaxed">
            Trabalho com metodologias ágeis (Scrum), atuando tanto como desenvolvedor quanto como Scrum Master na coordenação de sprints. Sou um profissional proativo e entusiasta por projetos desafiadores nas áreas de FullStack, Cloud Computing e IA. Mantenho-me atualizado através da participação ativa na Escola da Nuvem e em comunidades de tecnologia.
          </p>
        </motion.div>

        {/* Chamada para Ação (CTA) */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
            <h3 className="text-xl font-bold text-gray-100 mb-4">
                Quer saber mais sobre meus projetos ou colaborar?
            </h3>
            <Link 
                to="/contact" 
                className="inline-block px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-semibold text-lg shadow-xl"
            >
                Entre em Contato
            </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}