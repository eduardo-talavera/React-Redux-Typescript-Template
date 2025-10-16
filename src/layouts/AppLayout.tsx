import { Link, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Logo } from '@/components/Logo';
import { NavMenu } from '@/components/NavMenu';


export const AppLayout = () => {
  return (
    <>
      <header className='bg-white py-5 px-5 shadow-md'>
        <div className='max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center md:container md:mx-auto'>
          <div className='w-100 lg:w-64 mb-10 lg:mb-0 text-center lg:text-left'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <NavMenu />
        </div>
      </header>

      <main className='min-h-[70vh] max-w-screen-2xl mx-auto mt-10 p-5 md:container md:mx-auto'>
        <Outlet />
      </main>

      <footer className='py-5 md:container md:mx-auto'>
        <p className='text-center'>
          &copy; {new Date().getFullYear()} - AppName Todos los derechos
          reservados
        </p>
      </footer>
      <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
    </>
  );
};
