import { cookies } from 'next/headers';
import connectDB from '@/config/database';
import User from '@/models/User';

// Devuelve el usuario logueado (o null)
const getUser = async () => {
  const cookieStore = await cookies();
  const userId = cookieStore.get('userId')?.value;
  if (!userId) return null;

  // Administrador del .env (no está en la base de datos)
  if (userId === 'admin') {
    return { nombre: 'Administrador', email: process.env.USUARIO_ADMIN, rol: 'admin' };
  }

  await connectDB();
  const user = await User.findById(userId).lean().catch(() => null);
  if (!user) return null;

  return { nombre: user.nombre, email: user.email, rol: user.rol };
};

export default getUser;
