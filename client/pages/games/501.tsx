import DartBoard from '@/components/DartBoard';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import { IHistory, IScoreTracker } from '@/interface';
import { handleHistory, handleScore } from '@/helper';
import ScoreBoard from '@/components/ScoreBoard';

//todo add logic for bust

const game501 = () => {
  const handleThrow = (targetHit: string, value: number) => {
    const newHistory = [...history];
    setHistory(handleHistory(newHistory, targetHit, value, score.current));
    setScore(handleScore(score, value, targetHit));
  };
  const [score, setScore] = useState<IScoreTracker>({
    start: 501,
    current: 501,
    leg: 501,
  });
  const [history, setHistory] = useState<IHistory[]>([
    {
      hitTargets: [],
      score: 0,
      bust: false },
  ]);
  useEffect(() => console.table
  (history[history.length-1]), [history])

  return (
    <main className='p-2'>
      <Header title='501' />
      <section className='mt-4 flex flex-col gap-4 items-center'>
        <div className='w-[300px] h-[300px]'>
          <DartBoard handleThrow={handleThrow} />
        </div>
        <ScoreBoard history={history} score={score} />
      </section>
    </main>
  );
};

export default game501;
