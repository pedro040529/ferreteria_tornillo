import connectDB from '@/config/database';
import Product from '@/models/Product';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';

const normalize = (text) =>
  String(text)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

const CatalogoPage = async ({ searchParams }) => {
  const { q = '', categoria = '' } = await searchParams;

  await connectDB();
  const productos = JSON.parse(
    JSON.stringify(await Product.find().sort({ codigo: 1 }).lean())
  );

  const terms = normalize(q).split(/\s+/).filter(Boolean);

  const filtered = productos.filter((producto) => {
    if (categoria && producto.categoria !== categoria) return false;

    const haystack = normalize(
      [
        producto.nombre,
        producto.marca,
        producto.codigo,
        producto.descripcion,
        producto.categoria,
      ].join(' ')
    );
    return terms.every((term) => haystack.includes(term));
  });

  return (
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        <ProductFilters q={q} categoria={categoria} />

        <p className='mb-4 text-gray-600'>
          {filtered.length} {filtered.length === 1 ? 'producto' : 'productos'}
          {categoria && <> en <strong>{categoria}</strong></>}
          {q && <> para “<strong>{q}</strong>”</>}
        </p>

        {filtered.length === 0 ? (
          <p className='rounded-lg bg-gray-100 p-6 text-center text-gray-600'>
            No se encontraron productos con esos filtros.
          </p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {filtered.map((producto, index) => (
              <ProductCard
                key={producto._id}
                producto={producto}
                priority={index < 4}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CatalogoPage;
