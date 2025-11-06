export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="max-w-5xl mx-auto text-center text-sm">
        <p>© {new Date().getFullYear()} Carlos Henrique. Todos os direitos reservados.</p>
        <p className="mt-2">
          Feito com React e Next.js
        </p>
      </div>
    </footer>
  );
}
