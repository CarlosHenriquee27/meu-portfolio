"use client";

import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
}

export default function ProjetosGitHub() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const username = "CarlosHenriquee27"; // Seu usuário do GitHub

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
      })
      .catch((err) => console.error("Erro ao buscar repositórios:", err));
  }, []);

  return (
    <div>
      <h2 className="title text-center mb-8 text-black font-bold">
        Repositórios do GitHub
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="card p-6 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition flex flex-col"
          >
            <h3 className="text-xl font-bold text-black mb-2">{repo.name}</h3>
            <p className="text-gray-800 leading-relaxed mb-4">
              {repo.description || "Sem descrição"}
            </p>
            <p className="text-gray-700 mb-3">
              Linguagem: {repo.language || "Não especificada"}
            </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition text-sm font-medium w-max"
            >
              Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
