import Link from 'next/link';
import { register } from '@/app/actions/auth';

const RegistroPage = async ({ searchParams }) => {
  const { error } = await searchParams;

  return (
    <section className='px-4 py-12'>
      <form action={register} className='m-auto max-w-md space-y-4 rounded-xl bg-white p-6 shadow-md'>
        <h1 className='text-2xl font-bold text-gray-800'>Crear cuenta</h1>

        {error && <p className='rounded-lg bg-red-100 p-3 text-red-700'>{error}</p>}

        <input
          name='nombre'
          type='text'
          placeholder='Nombre'
          required
          className='w-full rounded-lg border border-gray-300 px-3 py-2'
        />
        <input
          name='email'
          type='email'
          placeholder='Correo'
          required
          className='w-full rounded-lg border border-gray-300 px-3 py-2'
        />
        <input
          name='password'
          type='password'
          placeholder='Contraseña (mínimo 6)'
          required
          minLength={6}
          className='w-full rounded-lg border border-gray-300 px-3 py-2'
        />
        <button
          type='submit'
          className='w-full rounded-lg bg-orange-500 px-4 py-2 font-semibold text-white hover:bg-orange-600'
        >
          Registrarme
        </button>

        <p className='text-center text-sm text-gray-600'>
          ¿Ya tienes cuenta?{' '}
          <Link href='/login' className='font-semibold text-blue-700 hover:underline'>
            Inicia sesión
          </Link>
        </p>
      </form>
    </section>
  );
};

export default RegistroPage;
