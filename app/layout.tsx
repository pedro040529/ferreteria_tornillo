import Navbar from '@/app/components/Navbar';
import './globals.css';
import Footer from '@/app/components/Footer';
import getUser from '@/lib/getUser';

export const metadata = {
  title: 'Ferretería El Tornillo',
  description: 'Herramientas, materiales y asesoría para tu proyecto.',
};

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUser();

  return (
    <html lang='es'>
      <body>
        <Navbar user={user} />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
