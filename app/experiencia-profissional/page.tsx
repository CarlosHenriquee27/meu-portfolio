"use client";

import Image from "next/image";

export default function ExperienciaProfissional() {
  const experiencias = [
    {
      empresa: "Universidade Católica de Pernambuco (UNICAP)",
      cargo: "Estudante",
      periodo: "2023 - Atual",
      descricao:
        "Participação em projetos práticos voltados para desenvolvimento web, prototipagem de interfaces no Figma e integração de sistemas com bancos de dados. Experiência colaborativa em grupo, aplicando metodologias ágeis.",
      logo: "/unicap.png", // logo da UNICAP na pasta public
    },
    {
      empresa: "Projetos Pessoais",
      cargo: "Desenvolvedor Front-end (em aprendizado)",
      periodo: "2024 - Atual",
      descricao:
        "Criação de sites pessoais e experimentais com HTML, CSS, JavaScript e React. Foco no aprimoramento contínuo e prática de boas práticas de código.",
    },
    {
      empresa: "São José AgroIndustrial",
      cargo: "Jovem Aprendiz",
      periodo: "2023 - 2024",
      descricao:
        "Atuação em atividades operacionais e administrativas, com desenvolvimento de disciplina profissional, trabalho em equipe, responsabilidade e aprendizado contínuo.",
    },
  ];

  return (
    <div className="container section">
      {/* Título principal */}
      <h1 className="title text-center mb-12 text-gray-900">Experiência Profissional</h1>

      {/* Cards de experiência */}
      <div className="flex flex-col gap-8">
        {experiencias.map((item, index) => (
          <div
            key={index}
            className="card flex flex-col md:flex-row items-start gap-6 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            {/* Logo ou placeholder */}
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
              {item.logo ? (
                <Image
                  src={item.logo}
                  alt={`Logo de ${item.empresa}`}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              ) : (
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-700 text-lg">
                  {item.empresa.charAt(0)}
                </div>
              )}
            </div>

            {/* Texto */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1 text-gray-900">{item.empresa}</h3>
              <p className="font-semibold mb-1 text-gray-900">{item.cargo}</p> {/* Negrito, sem azul */}
              <p className="text-gray-500 text-sm mb-2">{item.periodo}</p>
              <p className="text-slate-700 leading-relaxed">{item.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
