import Link from 'next/link';
import { login } from '@/app/actions/auth';

const LoginPage = async ({ searchParams }) => {
  const { error } = await searchParams;

  return (
    <section className='px-4 py-12'>
      <form action={login} className='m-auto max-w-md space-y-4 rounded-xl bg-white p-6 shadow-md'>
        <h1 className='text-2xl font-bold text-gray-800'>Iniciar sesión</h1>

        {error && <p className='rounded-lg bg-red-100 p-3 text-red-700'>{error}</p>}

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
          placeholder='Contraseña'
          required
          className='w-full rounded-lg border border-gray-300 px-3 py-2'
        />
        <button
          type='submit'
          className='w-full rounded-lg bg-orange-500 px-4 py-2 font-semibold text-white hover:bg-orange-600'
        >
          Ingresar
        </button>

        <p className='text-center text-sm text-gray-600'>
          ¿No tienes cuenta?{' '}
          <Link href='/registro' className='font-semibold text-blue-700 hover:underline'>
            Regístrate
          </Link>
        </p>
      </form>
    </section>
  );
};

export default LoginPage;
