import DartBoard from '@/components/DartBoard';
import Header from '@/components/Header';
import { useState } from 'react';
import { IHistory, IScoreTracker } from '@/interface';
import { handleHistory, handleScore } from '@/helper';
import ScoreBoard from '@/components/ScoreBoard';

//todo add logic for bust



const game301 = () => {
  const handleThrow = (targetHit: string, value: number) => {
    const newHistory = [...history];
    setHistory(handleHistory(newHistory, targetHit, value));
    setScore(handleScore(score, value, targetHit));
  };
  const [score, setScore] = useState<IScoreTracker>({start:301, current:301, leg:301});
  const [history, setHistory] = useState<IHistory[]>([
    { hitTargets: [], score: 0, bust: false },
  ]);

  return (
    <main className='p-2'>
      <Header title='301' />
      <section className='mt-4 flex flex-col gap-4 items-center'>
        <div className='w-[300px] h-[300px]'>
          <DartBoard handleThrow={handleThrow} />
        </div>
        <ScoreBoard history={history} score={score.current}/>
      </section>
    </main>
  );
};

export default game301;
