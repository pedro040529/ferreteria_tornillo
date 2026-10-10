import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import categories from '@/app/data/categories.json';

const ProductFilters = ({ q = '', categoria = '' }) => {
  const hasFilters = q || categoria;

  return (
    <form
      action='/catalogo'
      className='mb-6 flex flex-col gap-3 rounded-xl bg-white p-4 shadow-md md:flex-row'
    >
      <input
        type='search'
        name='q'
        defaultValue={q}
        placeholder='Busca por nombre, marca, código o descripción...'
        aria-label='Buscar productos'
        className='w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:border-blue-600 focus:outline-none'
      />

      <select
        name='categoria'
        defaultValue={categoria}
        aria-label='Filtrar por categoría'
        className='rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 focus:border-blue-600 focus:outline-none md:w-64'
      >
        <option value=''>Todas las categorías</option>
        {categories.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>

      <div className='flex gap-3'>
        <button
          type='submit'
          className='flex flex-1 items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-2 font-semibold text-white hover:bg-orange-600 md:flex-none'
        >
          <FaSearch aria-hidden='true' />
          Buscar
        </button>
        {hasFilters && (
          <Link
            href='/catalogo'
            className='flex items-center rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100'
          >
            Limpiar
          </Link>
        )}
      </div>
    </form>
  );
};

export default ProductFilters;
