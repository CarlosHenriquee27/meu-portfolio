"use client";

import Image from "next/image";

export default function ExperienciaAcademica() {
  const experiencias = [
    {
      instituicao: "Universidade Católica de Pernambuco (UNICAP)",
      curso: "Sistemas para Internet",
      periodo: "2023 - Atual",
      descricao:
        "Atualmente estou cursando a graduação, adquirindo conhecimentos em desenvolvimento web, bancos de dados, experiência do usuário e infraestrutura de redes, com foco em aplicar o aprendizado em projetos práticos e inovadores.",
      logo: "/unicap.png", // imagem na pasta public
    },
  ];

  return (
    <div className="container section">

      {/* Título principal */}
      <h1 className="title text-center mb-12 text-gray-900">Experiência Acadêmica</h1>

      {/* Cards de experiência */}
      <div className="flex flex-col gap-8">
        {experiencias.map((item, index) => (
          <div
            key={index}
            className="card flex flex-col md:flex-row items-start gap-6 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              {item.logo && (
                <Image
                  src={item.logo}
                  alt={`Logo de ${item.instituicao}`}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              )}
            </div>

            {/* Texto */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-1 text-gray-900">{item.instituicao}</h2>
              <p className="text-gray-900 font-semibold mb-1">{item.curso}</p> {/* Negrito, sem azul */}
              <p className="text-gray-500 text-sm mb-2">{item.periodo}</p>
              <p className="text-slate-700 leading-relaxed">{item.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
