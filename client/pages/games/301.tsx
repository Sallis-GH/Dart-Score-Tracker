import DartBoard from '@/components/DartBoard';
import Header from '@/components/Header';
import { useState } from 'react';

const game301 = () => {
  const [score, setScore] = useState(301);

  return (
    <main className='bg-[#121212] h-screen p-2'>
      <Header title='501' />

      <section className='mt-4 flex flex-col gap-4'>
        <DartBoard score={score} setScore={setScore} />
        <h2 className='text-xl font-semibold text-gray-300'>Current score:</h2>
        <div className='text-center'>
          <h3 className='text-3xl font-semibold text-gray-300'>{score}</h3>
        </div>
      </section>
    </main>
  );
};

export default game301;
