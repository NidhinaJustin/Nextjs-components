import MainLayout from '@/layouts/MainLayout';
import '../styles/globals.css'; 
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <MainLayout>
   <Component {...pageProps} />
   </MainLayout>
  );
}

export default MyApp;
