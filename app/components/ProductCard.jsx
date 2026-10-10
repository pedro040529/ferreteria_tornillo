import Image from 'next/image';
import Link from 'next/link';
import { FaTag, FaBoxes, FaCertificate } from 'react-icons/fa';

const ProductCard = ({ producto, priority = false }) => {
  const agotado = producto.stock === 0;

  return (
    <div className='flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg'>
      {/* Imagen con proporción fija para que todas las tarjetas queden parejas */}
      <div className='relative aspect-square border-b border-gray-100 bg-white'>
        <Image
          src={`/images/catalogo/${producto.imagen}`}
          alt={producto.nombre}
          fill
          sizes='(min-width: 1280px) 25vw, (min-width: 640px) 33vw, 100vw'
          priority={priority}
          className={`object-contain p-4 ${agotado ? 'grayscale opacity-60' : ''}`}
        />
        {agotado && (
          <span className='absolute left-3 top-3 rounded-lg bg-red-600 px-3 py-1 text-sm font-bold text-white'>
            Agotado
          </span>
        )}
      </div>

      <div className='flex flex-1 flex-col p-4'>
        <span className='text-xs font-semibold uppercase tracking-wide text-orange-600'>
          {producto.categoria}
        </span>
        <h3 className='mt-1 line-clamp-2 min-h-14 text-lg font-bold text-gray-800'>
          {producto.nombre}
        </h3>

        <div className='mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500'>
          <span className='flex items-center gap-1'>
            <FaCertificate aria-hidden='true' /> {producto.marca}
          </span>
          <span className='flex items-center gap-1'>
            <FaTag aria-hidden='true' /> {producto.codigo}
          </span>
        </div>

        <p className='mt-3 line-clamp-2 text-sm text-gray-600'>
          {producto.descripcion}
        </p>

        {/* Precio, stock y botón siempre al fondo de la tarjeta */}
        <div className='mt-auto pt-4'>
          <div className='mb-3 flex items-end justify-between'>
            <span className='text-2xl font-bold text-blue-800'>
              S/ {producto.precio.toFixed(2)}
            </span>
            <span
              className={`flex items-center gap-1 text-sm font-semibold ${
                agotado ? 'text-red-600' : 'text-green-700'
              }`}
            >
              <FaBoxes aria-hidden='true' />
              {agotado ? 'Sin stock' : `${producto.stock} en stock`}
            </span>
          </div>
          <Link
            href='/muy-pronto'
            className='block w-full rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-800'
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
