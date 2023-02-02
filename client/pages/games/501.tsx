import DartBoard from '@/components/DartBoard';
import Header from '@/components/Header';
import { useState } from 'react';
import { IHistory } from '@/interface';
import { handleHistory, handleScore } from '@/helper';

//todo add logic for bust

const game501 = () => {
  const handleThrow = (targetHit: string, value: number) => {
    const newHistory = [...history];
    setHistory(handleHistory(newHistory, targetHit, value));
    setScore(handleScore(score, value, targetHit));
  };
  const [score, setScore] = useState(501);
  const [history, setHistory] = useState<IHistory[]>([
    { hitTargets: [], score: 0, bust: false },
  ]);

  return (
    <main className='p-2'>
      <Header title='501' />
      <section className='mt-4 flex flex-col gap-4 items-center'>
        <div className='w-[300px] h-[300px]'>
          <DartBoard handleThrow={handleThrow} />
        </div>
        <div className='border-4 w-[305px] h-96 rounded-lg border-gray-300 bg-gray-800 flex items-center gap-2 flex-col overflow-y-scroll'>
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
              <div key={i} className='flex w-[200px] justify-evenly'>
                <div className='flex gap-3 '>
                  <div className='grid grid-cols-3 gap-3'>
                    {round?.hitTargets.map((target, i) => (
                      <h3 key={i} className='text-xl text-gray-300'>
                        {target}
                      </h3>
                    ))}
                  </div>
                  <h3 className='text-xl text-gray-300'>{round.score}</h3>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
};

export default game501;
