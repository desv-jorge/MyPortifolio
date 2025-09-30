import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { DiReact, FaPython, ... } from "react-icons/all"; // Se você usar react-icons

// 1. Defina todas as suas tecnologias em um objeto
const specialties = {
    Backend: [
        { name: "Python", icon: "🐍", color: "bg-blue-600" },
        { name: "FastAPI", icon: "⚡", color: "bg-teal-500" },
        { name: "Node.js", icon: "🟢", color: "bg-green-600" },
        { name: "NestJS", icon: "❤️", color: "bg-pink-600" },
    ],
    IA: [
        { name: "LangChain", icon: "🔗", color: "bg-indigo-600" },
        { name: "LLM Engineering", icon: "🧠", color: "bg-orange-500" },
    ],
    Frontend: [
        { name: "React", icon: "⚛️", color: "bg-sky-500" },
        { name: "Next.js", icon: "⚫", color: "bg-gray-800" },
        { name: "TypeScript", icon: "📘", color: "bg-blue-700" },
        { name: "Tailwind CSS", icon: "💨", color: "bg-cyan-500" },
        { name: "SCSS", icon: "💅", color: "bg-pink-500" },
        { name: "Vite", icon: "🚀", color: "bg-purple-600" },
    ],
    "Banco de Dados": [
        { name: "MySQL", icon: "🐘", color: "bg-blue-800" },
        { name: "PostgreSQL", icon: "💾", color: "bg-blue-600" },
        { name: "MongoDB", icon: "🟢", color: "bg-green-600" },
        { name: "Graph Databases", icon: "🕸️", color: "bg-orange-500" },
        { name: "Vector Embeddings", icon: "📍", color: "bg-pink-500" },
    ],
    DevOps: [
        { name: "AWS", icon: "☁️", color: "bg-orange-400" },
        { name: "Git", icon: "🐙", color: "bg-red-600" },
        { name: "Linux", icon: "🐧", color: "bg-gray-600" },
    ],
};

// 2. Definição do Tipo para as Chaves (Resolve o erro TypeScript)
type SpecialtyCategory = keyof typeof specialties;

// 3. Configuração de animação para os contêineres de categorias
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05, // Atraso pequeno entre os itens
            delayChildren: 0.5, // Atraso para iniciar após o texto principal
        },
    },
};

// 4. Configuração de animação para cada item de tecnologia
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

export default function Home() {
    return (
        <section className="min-h-screen container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-center gap-12">
            
            {/* Bloco de Texto Principal e Botões */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-xl"
            >
                <h1 className="text-5xl font-bold">
                    Olá 👋, eu sou <span className="text-indigo-400">Nathanael</span>
                </h1>
                
                <p className="mt-4 text-lg text-gray-300">
                    Desenvolvedor FullStack e Engenheiro de IA apaixonado por construir soluções escaláveis. Expertise em React, Node.js, Python e sistemas de banco de dados avançados.
                </p>

                <div className="mt-8 flex gap-4"> 
                    <Link to="/projects" className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-semibold shadow-lg">
                        Ver Projetos
                    </Link>
                    <a href="https://github.com/desv-jorge" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-lg border border-gray-400 hover:border-indigo-400 transition font-semibold">
                        GitHub
                    </a>
                    <Link to="/contact" className="px-6 py-2 rounded-lg border border-gray-400 hover:border-indigo-400 transition font-semibold">
                        Contato
                    </Link>
                </div>

                {/* --- Ícones de Habilidades por Categoria --- */}
                <h3 className="mt-12 mb-4 text-2xl font-bold text-gray-100">
                    🛠️ Tecnologias que Utilizo
                </h3>
                
                {/* Mapeia as categorias de tecnologias */}
                {Object.keys(specialties).map((categoryName) => {
                    // **CORREÇÃO TypeScript:** Asserção de tipo
                    const categoryKey = categoryName as SpecialtyCategory;

                    return (
                        <div key={categoryKey} className="mb-6">
                            <h4 className="text-lg font-semibold text-indigo-400 mb-2">{categoryKey}</h4>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex flex-wrap gap-3"
                            >
                                {/* Agora specialties[categoryKey] é tipado corretamente */}
                                {specialties[categoryKey].map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={itemVariants}
                                        // Usa a cor definida no objeto e um hover sutil
                                        className={`px-4 py-1 rounded-full text-sm font-medium text-white shadow-md ${skill.color} transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg`}
                                    >
                                        <span className="mr-1">{skill.icon}</span>
                                        {skill.name}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    );
                })}
                {/* ------------------------------------------- */}
                
            </motion.div>

            {/* Bloco da Imagem */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="shrink-0" // Impede que a imagem encolha em telas pequenas
            >
                <img 
                    src="..\assets\profissional.png" 
                    alt="Minha Foto - Nathanael" 
                    className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-indigo-500 shadow-2xl" 
                /> 
            </motion.div>
        </section>
    );
}