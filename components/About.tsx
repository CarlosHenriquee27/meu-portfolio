import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col items-center sm:items-start max-w-3xl mx-auto py-20 px-6 text-center sm:text-left">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
        <Image
          src="/perfil.jpg"
          alt="Foto de perfil de Carlos Henrique"
          width={160}
          height={160}
          className="rounded-full border-4 border-gray-200 dark:border-gray-800 shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Sobre mim
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Olá! Meu nome é <span className="font-medium text-gray-900 dark:text-gray-200">Carlos Henrique</span> e sou estudante de Sistemas para Internet na Universidade Católica de Pernambuco. 
            Tenho paixão por tecnologia, principalmente pelo desenvolvimento web e inovação. 
            Estou sempre em busca de novos desafios, aprendendo e colaborando em projetos práticos.
          </p>
        </div>
      </div>
    </section>
  );
}
