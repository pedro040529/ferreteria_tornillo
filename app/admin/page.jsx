import Image from 'next/image';
import connectDB from '@/config/database';
import Product from '@/models/Product';

export const dynamic = 'force-dynamic';

const AdminPage = async () => {
  await connectDB();
  const productos = JSON.parse(
    JSON.stringify(await Product.find().sort({ codigo: 1 }).lean())
  );

  return (
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        <div className='mb-6 flex flex-wrap items-center justify-between gap-4'>
          <div>
            <h1 className='text-3xl font-bold text-gray-800'>Panel administrativo</h1>
            <p className='text-gray-500'>{productos.length} productos registrados</p>
          </div>
          <button
            type='button'
            className='rounded-lg bg-blue-700 px-5 py-2 font-semibold text-white hover:bg-blue-800'
          >
            Agregar producto
          </button>
        </div>

        <ul className='divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-md'>
          {productos.map((producto) => (
            <li
              key={producto._id}
              className='flex items-center gap-4 p-4 hover:bg-gray-50'
            >
              <div className='relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-white'>
                <Image
                  src={`/images/catalogo/${producto.imagen}`}
                  alt={producto.nombre}
                  fill
                  sizes='64px'
                  className='object-contain p-1'
                />
              </div>

              <div className='min-w-0 flex-1'>
                <h2 className='truncate font-semibold text-gray-800'>{producto.nombre}</h2>
                <p className='truncate text-sm text-gray-500'>
                  {producto.codigo} · {producto.categoria} · {producto.marca}
                </p>
              </div>

              <div className='hidden text-right sm:block'>
                <p className='font-bold text-blue-800'>S/ {producto.precio.toFixed(2)}</p>
                {producto.stock === 0 ? (
                  <p className='text-sm font-semibold text-red-600'>Agotado</p>
                ) : (
                  <p className='text-sm text-green-700'>{producto.stock} en stock</p>
                )}
              </div>

              <div className='flex gap-2'>
                <button
                  type='button'
                  className='rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600'
                >
                  Editar
                </button>
                <button
                  type='button'
                  className='rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700'
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AdminPage;
