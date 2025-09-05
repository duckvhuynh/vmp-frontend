import { setRequestLocale } from 'next-intl/server';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
