import DartBoard from '@/components/DartBoard';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';

interface IHistory {
  hitTargets: string[];
  score: number;
}

const game501 = () => {
  const handleThrow = (targetHit: string, value: number) => {
    //history
    const newHistory = [...history];
    if (newHistory[newHistory.length - 1]?.hitTargets.length > 2) {
      setHistory([...newHistory, { hitTargets: [targetHit], score: value }]);
    } else {
      newHistory[newHistory.length - 1].hitTargets.push(targetHit);
      setHistory(newHistory);
    }

    //checking score
    if (score - value === 0) {
      return targetHit.includes('D') ? setScore(0) : null;
    }
    if (score - value < 2) {
      return;
    }
    setScore(score - value);
  };

  const [history, setHistory] = useState<IHistory[]>([
    { hitTargets: [], score: 0 },
  ]);
  const [currentRound, setCurrentRound] = useState(1);
  const [score, setScore] = useState(501);
  useEffect(() => console.log(history), [history])

  
  return (
    <main className='bg-[#121212] h-screen p-2'>
      <Header title='501' />

      <section className='mt-4 flex flex-col gap-4'>
        <DartBoard handleThrow={handleThrow} />
        <h2 className='text-xl font-semibold text-gray-300'>Current score:</h2>
        <h3 className='text-center text-3xl font-semibold text-gray-300'>
          {score}
        </h3>
        {history.length &&
          history.map((round, i) => (
            <div key={i} className='flex gap-2 justify-center'>
              {round.hitTargets.map((target, i) => (
                <h1 key={i} className="text-l text-gray-300">{target}</h1>
              ))}
            </div>
          ))}
      </section>
    </main>
  );
};

export default game501;
