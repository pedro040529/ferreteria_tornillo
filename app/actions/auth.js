'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import connectDB from '@/config/database';
import User from '@/models/User';

export async function login(formData) {
  await connectDB();
  const email = formData.get('email').toLowerCase().trim();
  const password = formData.get('password');

  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    redirect('/login?error=Correo o contraseña incorrectos');
  }

  const cookieStore = await cookies();
  cookieStore.set('userId', String(user._id), { httpOnly: true, path: '/' });
  redirect(user.rol === 'admin' ? '/admin' : '/');
}

export async function register(formData) {
  await connectDB();
  const nombre = formData.get('nombre').trim();
  const email = formData.get('email').toLowerCase().trim();
  const password = formData.get('password');

  if (await User.findOne({ email })) {
    redirect('/registro?error=Ese correo ya está registrado');
  }

  const user = await User.create({ nombre, email, password, rol: 'cliente' });

  const cookieStore = await cookies();
  cookieStore.set('userId', String(user._id), { httpOnly: true, path: '/' });
  redirect('/');
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('userId');
  redirect('/');
}
