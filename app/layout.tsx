import Navbar from '@/app/components/Navbar';
import './globals.css';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'Ferretería El Tornillo',
  description: 'Herramientas, materiales y asesoría para tu proyecto.',
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='es'>
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
