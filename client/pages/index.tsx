import DartBoard from '@/components/DartBoard';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
    <div className='w-[500px] h-[500px]'>
      <DartBoard />
    </div>
    </>
  );
}
