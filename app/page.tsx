"use client";

import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-20 text-gray-900">

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
        {/* FOTO */}
        <div className="relative w-72 h-72 lg:w-72 lg:h-72 rounded-full shadow-xl border-4 border-white overflow-hidden">
          <Image
            src="/perfil.jpg"
            alt="Foto de perfil de Carlos Henrique"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* TEXTO */}
        <div className="flex flex-col space-y-6 lg:space-y-10 max-w-2xl">
          {/* TÍTULO */}
          <h1 className="font-bold text-4xl sm:text-5xl">
            Olá{" "}
            <span className="text-5xl sm:text-6xl inline-block origin-bottom-right animate-waving-hand">
              👋
            </span>
            , eu sou Carlos Henrique
          </h1>

          {/* SUBTÍTULO ANIMADO */}
          <h2 className="text-xl sm:text-2xl text-gray-700">
            <Typewriter
              words={[
                "Estudante de Sistemas para Internet",
                "Apaixonado por tecnologia",
                "Futuro Desenvolvedor Web",
                "Em busca de inovação",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </h2>

          {/* DESCRIÇÃO */}
          <p className="text-gray-700 leading-relaxed text-justify text-lg sm:text-xl">
            Tenho paixão por criar soluções modernas e funcionais. Estou sempre aprendendo, evoluindo e buscando transformar boas ideias em projetos reais.
            <span className="block mt-2 font-normal text-gray-900">
               Sempre buscando inovação e impacto positivo.💻
            </span>
          </p>

          {/* BOTÃO SAIBA MAIS */}
          <Link
            href="/sobre"
            className="mt-4 px-7 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition text-lg w-max"
          >
            Saiba mais sobre mim
          </Link>
        </div>
      </div>

      {/* RODAPÉ */}
      <footer className="mt-20 text-center text-gray-600 text-sm">
      </footer>
    </main>
  );
}
