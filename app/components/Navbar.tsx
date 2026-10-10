'use client';
import Image from 'next/image';
import logo from '@/app/images/logo-white.png';
import profileDefault from '@/app/images/profile.png';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

const Navbar = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const [isloggedIn, setIsLoggedIn] = useState(true);
    const [isAdmin, setIsAdmin] = useState(true);

    const router = useRouter();
    useEffect(() => {
        if (pathname.startsWith('/admin') && !(isloggedIn && isAdmin)) {
            router.replace('/');
        }
    }, [pathname, isloggedIn, isAdmin, router]);

    return ( 
        <nav className='bg-blue-900 border-b border-blue-700'>
              <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='relative flex h-20 items-center justify-between'>
                  <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
                    {/* <!-- Mobile menu button--> */}
                    <button
                      type='button'
                      id='mobile-dropdown-button'
                      className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                      aria-controls='mobile-menu'
                      aria-expanded='false'
                      onClick={() => setIsMobileMenuOpen((prev)=>!prev)}
                    >
                      <span className='absolute -inset-0.5'></span>
                      <span className='sr-only'>Abrir menú principal</span>
                      <svg
                        className='block h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                        />
                      </svg>
                    </button>
                  </div>
        
                  <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
                    {/* <!-- Logo --> */}
                    <Link className='flex flex-shrink-0 items-center' href='/'>
                      <Image className='h-10 w-auto' src={logo} alt='Ferretería El Tornillo' />
        
                      <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                        Ferretería El Tornillo
                      </span>
                    </Link>
                    {/* <!-- Desktop Menu Hidden below md screens --> */}
                    <div className='hidden md:ml-6 md:block'>
                      <div className='flex space-x-2'>
                        <Link
                          href='/'
                          className={`${pathname === '/' ? '' : ''} text-white hover:bg-blue-800 hover:text-white rounded-md px-3 py-2`}
                        >
                          Inicio
                        </Link>
                          {
                            !(isloggedIn && isAdmin) && (
                            <Link
                              href='/catalogo'
                              className={`${pathname === '/catalogo' ? 'bg-blue-800' : ''} text-white hover:bg-blue-800 hover:text-white rounded-md px-3 py-2`}
                            >
                              Catálogo
                            </Link>
                          )}
                          {
                            isloggedIn && isAdmin && (
                            <Link
                              href='/admin'
                              className={`${pathname.startsWith('/admin') ? 'bg-blue-800' : ''} text-white hover:bg-blue-800 hover:text-white rounded-md px-3 py-2`}
                            >
                              Panel administrativo
                            </Link>
                          )}
                      </div>
                    </div>
                  </div>
        
                  {/* <!-- Right Side Menu (Logged Out) --> */}
                  {
                    !isloggedIn && (
                  <div className='hidden md:block md:ml-6'>
                    <div className='flex items-center'>
                      <button className='flex items-center text-white bg-orange-500 hover:bg-orange-600 hover:text-white rounded-md px-3 py-2'>
                        <FaGoogle className='text-white m-2'></FaGoogle>
                        <span>Ingresar o registrarse</span>
                      </button>
                    </div>
                  </div>
                    )
                  }
        
                  {/* <!-- Right Side Menu (Logged In) --> */}
                  {
                    isloggedIn && (
                  
                  <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0'>
                    {/* <!-- Profile dropdown button --> */}
                    <div className='relative ml-3'>
                      <div>
                        <button
                          type='button'
                          className='relative flex rounded-full bg-blue-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800'
                          id='user-menu-button'
                          aria-expanded='false'
                          aria-haspopup='true'
                          onClick={() => setIsProfileMenuOpen((prev)=>!prev)}
                        >
                          <span className='absolute -inset-1.5'></span>
                          <span className='sr-only'>Abrir menú de usuario</span>
                          <Image
                            className='h-8 w-8 rounded-full'
                            src={profileDefault}
                            alt=''
                          />
                        </button>
                      </div>
        
                      {/* <!-- Profile dropdown --> */}
                      {
                        isProfileMenuOpen && (
                      <div
                        id='user-menu'
                        className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                        role='menu'
                        aria-orientation='vertical'
                        aria-labelledby='user-menu-button'
                        tabIndex={-1}
                      >
                        <p className='px-4 py-2 text-xs text-gray-500'>
                          {isAdmin ? 'Administrador' : 'Cliente registrado'}
                        </p>
                        <button
                          className='block px-4 py-2 text-sm text-gray-700'
                          role='menuitem'
                          tabIndex={-1}
                          id='user-menu-item-2'
                        >
                          Cerrar sesión
                        </button>
                      </div>
                      )}

                    </div>
                  </div>
                      )}
                </div>
              </div>
        
              {/* <!-- Mobile menu, show/hide based on menu state. --> */}
              {
                isMobileMenuOpen && (
              <div id='mobile-menu'>
                <div className='space-y-1 px-2 pb-3 pt-2'>
                  <Link
                          href='/'
                          className={`${pathname === '/' ? '' : ''} text-white hover:bg-blue-800 hover:text-white block rounded-md px-3 py-2`}
                        >
                          Inicio
                  </Link>
                  {
                    !(isloggedIn && isAdmin) && (
                    <Link
                          href='/catalogo'
                          className={`${pathname === '/catalogo' ? 'bg-blue-800' : ''} text-white hover:bg-blue-800 hover:text-white block rounded-md px-3 py-2`}
                        >
                          Catálogo
                    </Link>
                    )}
                  {
                    isloggedIn && isAdmin && (
                    <Link
                          href='/admin'
                          className={`${pathname.startsWith('/admin') ? 'bg-blue-800' : ''} text-white hover:bg-blue-800 hover:text-white block rounded-md px-3 py-2`}
                        >
                          Panel administrativo
                    </Link>
                    )}
                  {
                    !isloggedIn && (
                  <button className='flex items-center text-white bg-orange-500 hover:bg-orange-600 hover:text-white rounded-md px-3 py-2 my-4'>
                    <FaGoogle className='text-white mr-2' />
                    <span>Ingresar o registrarse</span>
                  </button>
                    )
                  }
                </div>
              </div>
                )}
            </nav>
     );
}
 
export default Navbar;