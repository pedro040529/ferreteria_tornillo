import Link from 'next/link';
import {
  FaHammer,
  FaTools,
  FaBolt,
  FaWrench,
  FaPaintRoller,
  FaHardHat,
} from 'react-icons/fa';
import categories from '@/app/data/categories.json';

const icons = {
  'Herramientas manuales': FaHammer,
  'Herramientas eléctricas': FaTools,
  Electricidad: FaBolt,
  Gasfitería: FaWrench,
  Pinturas: FaPaintRoller,
  Construcción: FaHardHat,
};

const Categories = () => {
  return (
    <section id='categorias' className='container-xl lg:container m-auto px-4 py-10'>
      <div className='mb-6 text-center'>
        <h2 className='text-3xl font-bold text-gray-800'>Explora por categoría</h2>
        <p className='mt-1 text-gray-500'>Encuentra rápido lo que necesitas.</p>
      </div>

      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6'>
        {categories.map((name) => {
          const Icon = icons[name];
          return (
            <Link
              key={name}
              href={`/catalogo?categoria=${encodeURIComponent(name)}`}
              className='flex flex-col items-center gap-3 rounded-xl bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg'
            >
              <span className='flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl text-blue-700'>
                {Icon && <Icon aria-hidden='true' />}
              </span>
              <span className='font-semibold text-gray-800'>{name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
