import Link from 'next/link';
import { FaHardHat } from 'react-icons/fa';

const ComingSoon = ({
  title,
  message = 'Estamos trabajando en esta sección. Vuelve pronto.',
  backHref = '/',
  backLabel = 'Volver al inicio',
}) => {
  return (
    <section className='px-4 py-16'>
      <div className='mx-auto max-w-lg rounded-xl bg-white p-10 text-center shadow-md'>
        <span className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-4xl text-orange-500'>
          <FaHardHat aria-hidden='true' />
        </span>
        <p className='text-sm font-semibold uppercase tracking-wide text-orange-600'>
          Muy pronto...
        </p>
        <h1 className='mt-2 text-3xl font-bold text-gray-800'>{title}</h1>
        <p className='mt-3 text-gray-600'>{message}</p>
        <Link
          href={backHref}
          className='mt-8 inline-block rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800'
        >
          {backLabel}
        </Link>
      </div>
    </section>
  );
};

export default ComingSoon;
