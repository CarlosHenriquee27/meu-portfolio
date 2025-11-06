import Image from "next/image";

export default function Sobre() {
  return (
    <div className="container section">

      {/* Título principal */}
      <h1 className="title text-center mb-12">Sobre mim</h1>

      {/* Card principal */}
      <div className="card flex flex-col md:flex-row items-center gap-10">

        {/* Foto */}
        <div className="flex justify-center">
          <Image
            src="/perfil.jpg"
            alt="Foto de perfil de Carlos Henrique"
            width={220}
            height={220}
            className="profile-photo"
          />
        </div>

        {/* Texto */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">
            Olá! Eu sou Carlos Henrique 👋
          </h2>

          <p className="text-slate-700 leading-relaxed mb-4">
            Sou estudante de Sistemas para Internet na Universidade Católica de Pernambuco
            e tenho grande interesse por tecnologia, desenvolvimento web e soluções que
            realmente impactam a vida das pessoas. Gosto de aprender, criar e transformar
            ideias em algo funcional e útil.
          </p>

          <p className="text-slate-700 leading-relaxed mb-4">
            No meu dia a dia estou sempre em busca de evolução — seja estudando novas
            ferramentas, desenvolvendo pequenos projetos ou entendendo mais sobre o mercado
            de tecnologia. Tenho uma mente curiosa e gosto de estar envolvido em projetos
            práticos onde posso colocar em ação aquilo que venho aprendendo.
          </p>

          <p className="text-slate-700 leading-relaxed">
            Meu objetivo é iniciar minha carreira como desenvolvedor e contribuir
            positivamente em equipes e projetos reais, trazendo dedicação, disciplina
            e vontade de aprender sempre mais.
          </p>
        </div>
      </div>

     {/* Seção de informações pessoais */}
<div className="section">
  <h2 className="text-2xl font-semibold mb-6">Informações de contato</h2>

  <div className="grid md:grid-cols-2 gap-6">

    {/* EMAIL */}
    <div className="card flex items-center gap-4">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-7 h-7 text-blue-600" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.8} 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5A2.25 2.25 0 002.25 6.75m19.5 0L12 12.75 2.25 6.75" />
      </svg>

      <div>
        <h3 className="text-lg font-semibold">Email</h3>
        <p className="text-slate-700">carloshcsouza27@gmail.com</p>
      </div>
    </div>

    {/* LINKEDIN */}
    <a
      href="https://linkedin.com/in/carloshenrique27"
      target="_blank"
      className="card flex items-center gap-4 hover:shadow-lg transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-blue-600"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19 3A2.993 2.993 0 0122 6v12a2.993 2.993 0 01-3 3H5a2.993 2.993 0 01-3-3V6a2.993 2.993 0 013-3h14m-1.5 15V13c0-1.519-.9-2.5-2.25-2.5-1.05 0-1.627.525-1.9 1.1V11H11v7h2.5v-3.75c0-.994.775-1.75 1.75-1.75s1.25.756 1.25 1.75V18H19m-9-7H7.5v7H10v-7m-.75-1.75A1.25 1.25 0 107.5 7.5a1.25 1.25 0 001.75 1.75z" />
      </svg>

      <div>
        <h3 className="text-lg font-semibold">LinkedIn</h3>
        <p className="text-blue-600 hover:underline">
          linkedin.com/in/carloshenrique27
        </p>
      </div>
    </a>

    {/* GITHUB */}
    <a
      href="https://github.com/CarlosHenriquee27"
      target="_blank"
      className="card flex items-center gap-4 hover:shadow-lg transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-gray-800"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.48 2 2 6.72 2 12.36c0 4.52 2.865 8.35 6.84 9.71.5.1.68-.22.68-.48v-1.7c-2.77.63-3.36-1.37-3.36-1.37-.45-1.18-1.12-1.5-1.12-1.5-.91-.65.07-.63.07-.63 1 .08 1.54 1.07 1.54 1.07.9 1.6 2.36 1.14 2.94.87.09-.68.36-1.15.65-1.41-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.38-2.06 1.02-2.78-.1-.25-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.06A9.1 9.1 0 0112 7.6c.85 0 1.72.12 2.52.35 1.9-1.34 2.75-1.06 2.75-1.06.55 1.4.2 2.45.1 2.7.64.72 1.02 1.65 1.02 2.78 0 3.98-2.34 4.85-4.57 5.11.37.34.7 1 .7 2.01v2.98c0 .26.18.57.69.47A10.03 10.03 0 0022 12.36C22 6.72 17.52 2 12 2z"
          clipRule="evenodd"
        />
      </svg>

      <div>
        <h3 className="text-lg font-semibold">GitHub</h3>
        <p className="text-blue-600 hover:underline">
          github.com/CarlosHenriquee27
        </p>
      </div>
    </a>

    {/* LOCALIZAÇÃO */}
    <div className="card flex items-center gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-red-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7m0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z" />
      </svg>

      <div>
        <h3 className="text-lg font-semibold">Localização</h3>
        <p className="text-slate-700">Recife – Pernambuco, Brasil</p>
      </div>
    </div>

  </div>
</div>


      {/* Seção "Minhas características" */}
      <div className="section">
        <h2 className="text-2xl font-semibold mb-6">Um pouco mais sobre mim</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="card text-center">
            <h3 className="text-lg font-semibold mb-2">Perfil</h3>
            <p className="text-slate-700">
              Comunicativo, colaborativo e sempre disposto a aprender algo novo.
            </p>
          </div>

          <div className="card text-center">
            <h3 className="text-lg font-semibold mb-2">Interesses</h3>
            <p className="text-slate-700">
              Desenvolvimento web, Banco de dados, Suporte Tecnico, inovação e tecnologia aplicada.
            </p>
          </div>

          <div className="card text-center">
            <h3 className="text-lg font-semibold mb-2">Objetivos</h3>
            <p className="text-slate-700">
              Conquistar espaço na área e participar de projetos que acelerem meu crescimento.
            </p>
          </div>

        </div>
      </div>
{/* Seção de tecnologias usadas no portfólio */}
      <div className="section mt-8">
        <h2 className="text-2xl font-semibold mb-4">Tecnologias usadas neste portfólio</h2>
        <div className="flex flex-wrap gap-4">
          <span className="px-4 py-2 bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-gray-200 rounded-full font-semibold text-sm">
            Next.js
          </span>
          <span className="px-4 py-2 bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-gray-200 rounded-full font-semibold text-sm">
            React
          </span>
          <span className="px-4 py-2 bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-gray-200 rounded-full font-semibold text-sm">
            Tailwind CSS
          </span>
          <span className="px-4 py-2 bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-gray-200 rounded-full font-semibold text-sm">
            TypeScript
          </span>
        </div>
      </div>
      {/* Card final */}
      <div className="section">
        <div className="card text-center">
          <h2 className="text-2xl font-semibold mb-4">Disponível para oportunidades</h2>
          <p className="text-slate-700 mb-4">
            Caso tenha interesse em entrar em contato para colaborações ou
            oportunidades futuras, será um prazer conversar com você.
          </p>
          <a
            href="carloshcsouza27@gmail.com"
            className="btn-primary"
          >
            Enviar email
          </a>
        </div>
      </div>
    </div>
  );
}
