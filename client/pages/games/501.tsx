import DartBoard from '@/components/DartBoard';
import Header from '@/components/Header';
import { useState } from 'react';
import { IGameState } from '@/interface';
import { isBust } from '@/helper';
import ScoreBoard from '@/components/ScoreBoard';

//todo add logic for bust

const game501 = () => {
  const newGame = {
    currentDart: '',
    previousScore: 0,
    currentScore: 510,
    bust: false,
    initialValue: 510,
    initalLegScore: 510,
    leg: [],
  };

  const [gameState, setGameState] = useState<IGameState>(newGame);

  const handleThrow = (targetHit: string, hitScore: number) => {
    const newGamestate = { ...gameState };
    const { currentScore } = gameState;
    if (!isBust({ currentScore, hitScore, targetHit })) {
      newGamestate.leg.push('Bust');
      setGameState({
        ...newGamestate,
        currentScore: newGamestate.initalLegScore,
        bust: true,
      });
      return;
    }
    newGamestate.currentScore -= hitScore;
    setGameState(newGamestate);
  };

  return (
    <main className='p-2'>
      <Header title='501' />
      <section className='mt-4 flex flex-col gap-4 items-center'>
        <div className='w-[300px] h-[300px]'>
          <DartBoard handleThrow={handleThrow} />
        </div>
        <ScoreBoard gameState={gameState} />
      </section>
    </main>
  );
};

export default game501;
