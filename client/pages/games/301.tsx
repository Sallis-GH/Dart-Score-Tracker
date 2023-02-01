import DartBoard from '@/components/DartBoard';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import { IHistory } from '@/interface';
import { handleHistory, handleScore } from '@/helper';

const game501 = () => {
  const handleThrow = (targetHit: string, value: number) => {
    const newHistory = [...history];
    setHistory(handleHistory(newHistory, targetHit, value));
    setScore(handleScore(score, value, targetHit));
  };

  const [currentRound, setCurrentRound] = useState(1);
  const [score, setScore] = useState(301);
  const [history, setHistory] = useState<IHistory[]>([
    { hitTargets: [], score: 0 },
  ]);

  return (
    <main className='bg-[#121212] h-screen p-2'>
      <Header title='301' />

      <section className='mt-4 flex flex-col gap-4'>
        <DartBoard handleThrow={handleThrow} />
        <div className='flex flex-col h-16 items-center justify-center gap-2 mt-4'>
          {score ? (
            <>
              <h2 className='text-xl font-semibold text-gray-300'>
                Current score:
              </h2>
              <h3 className='text-center text-3xl font-semibold text-gray-300'>
                {score}
              </h3>
            </>
          ) : (
            <h1 className='text-center text-3xl font-semibold text-gray-300'>
              Winner
            </h1>
          )}
        </div>
        {!!history[0].hitTargets.length &&
          history.map((round, i) => (
            <div key={i} className='relative flex justify-around'>
              <div className='flex gap-3 w-30'>
                {round?.hitTargets.map((target, i) => (
                  <h3 key={i} className='text-xl text-gray-300'>
                    {target}
                  </h3>
                ))}
                <h3 className='absolute right-10 text-xl text-gray-300'>
                  {round.score}
                </h3>
              </div>
            </div>
          ))}
      </section>
    </main>
  );
};

export default game501;
