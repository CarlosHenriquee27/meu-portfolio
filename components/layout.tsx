
interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <section className="flex flex-col items-center sm:items-start max-w-5xl mx-auto py-20 px-6 text-center sm:text-left">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 border-b-4 border-blue-500 pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}
