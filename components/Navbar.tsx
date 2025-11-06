import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600/90 backdrop-blur-sm text-white py-4 shadow-md z-50">
      <ul className="flex justify-center gap-8 text-lg font-medium">
        <li>
          <Link href="/" className="hover:text-gray-200 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/sobre" className="hover:text-gray-200 transition">
            Sobre
          </Link>
        </li>
        <li>
          <Link href="/experiencia-academica" className="hover:text-gray-200 transition">
            Acadêmica
          </Link>
        </li>
        <li>
          <Link href="/experiencia-profissional" className="hover:text-gray-200 transition">
            Profissional
          </Link>
        </li>
        <li>
          <Link href="/projetos" className="hover:text-gray-200 transition">
            Projetos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
