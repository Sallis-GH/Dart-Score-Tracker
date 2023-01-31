import Button from '@/components/GameButton';
import Header from '@/components/Header';
import { Inter } from '@next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='bg-[#121212] h-screen p-2'>
      <Header title='Dart Score Tracker' />
      <section className='flex flex-col items-center mt-9 gap-4'>
        <h2 className='text-3xl text-gray-300'>Choose Game Type:</h2>
        <Link href={'/games/501'}>
        <Button name='501' />
        </Link>
        <Link href={'/games/301'}>
        <Button name='301' />
        </Link>
        </section>
    </main>
  );
}
