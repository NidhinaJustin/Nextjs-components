import { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface MainLayoutProps {
  children: ReactNode; 
}

export default function MainLayout({ children }: MainLayoutProps) {
  const router = useRouter();
const pathActive=(path:string)=>{
  console.log(path,router.pathname )
 return router.pathname === path
}

  return (
    <div className="flex flex-col items-center justify-start bg-gray-900 text-white min-h-screen">
      <header className="w-full bg-gray-800 py-4">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <div className="text-lg font-bold">
            <Link href="/">MyApp</Link>
          </div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/timeline" className={pathActive('/timeline') ? 'bg-white text-black p-1 rounded-sm' : ''}>Timeline</Link>
            </li>
            <li>
              <Link href="/dataTable" className={pathActive('/dataTable') ? 'bg-white text-black p-1 rounded-sm' : ''}>Data Table</Link>
            </li>
            <li>
              <Link href="/datePicker" className={pathActive('/datePicker') ? 'bg-white text-black p-1 rounded-sm' : ''}>Date Picker</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow pt-4">
        {children} 
      </main>
    </div>
  );
}
