import Image from 'next/image';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className='relative overflow-hidden bg-blue-800'>
      <Image
        src='/ferreteria_pc1.avif'
        alt=''
        fill
        priority
        sizes='100vw'
        className='object-cover object-right'
      />
      {}
      <div className='absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent' />

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28'>
        <div className='max-w-2xl'>
          <h1 className='mt-4 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
            Todo para tu obra en un solo lugar
          </h1>
          <p className='mt-4 text-xl text-blue-100'>
            Herramientas, materiales eléctricos, gasfitería, pinturas y construcción.
            Mira precios y stock, y arma tu cotización sin llamar.
          </p>

          <div className='mt-6 flex flex-wrap gap-3'>
            <Link
              href='/catalogo'
              className='rounded-lg bg-white px-6 py-3 font-semibold text-blue-800 hover:bg-blue-50'
            >
              Ver catálogo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
