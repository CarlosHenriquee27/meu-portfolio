"use client";

import Image from "next/image";
import ProjetosGitHub from "@/components/ProjetosGitHub";

export default function Projetos() {
  const projetos = [
    {
      titulo: "Urbanize",
      descricao:
        "Urbanize é um aplicativo de monitoramento urbano que visa tornar a cidade mais segura e organizada. Ele permite que os usuários registrem ocorrências, visualizem mapas de serviços públicos, e acompanhem a situação de cada denúncia. Desenvolvido com foco em acessibilidade e experiência do usuário, o protótipo inicial foi criado em Figma e a implementação web garante uma interface moderna e responsiva.",
      imagem: "/urbanize.png",
      link: "https://github.com/CarlosHenriquee27/urbanize-web",
    },
  ];

  return (
    <div className="container section">
      {/* Título principal */}
      <h1 className="title text-center mb-12 text-black font-bold">
        Projetos Desenvolvidos
      </h1>

      {/* Projetos próprios */}
      <div className="flex flex-col gap-6 mb-12">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="card flex flex-col md:flex-row items-start gap-6 p-6 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition"
          >
            {/* Imagem */}
            <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 relative rounded-lg overflow-hidden">
              <Image
                src={projeto.imagem}
                alt={projeto.titulo}
                fill
                className="object-cover"
              />
            </div>

            {/* Texto */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-black mb-1">{projeto.titulo}</h3>
              <p className="text-gray-800 leading-relaxed mb-3">{projeto.descricao}</p>
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition text-sm font-medium w-max"
              >
                Ver projeto
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Projetos do GitHub */}
      <ProjetosGitHub />
    </div>
  );
}
