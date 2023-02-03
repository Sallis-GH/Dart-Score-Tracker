import DartBoard from '@/components/DartBoard';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import { IGameState } from '@/interface';
import ScoreBoard from '@/components/ScoreBoard';
import { isBust } from '@/helper';

//todo add logic for bust

const game501 = () => {
  const newGame = {
    currentDart: '',
    previousScore: 0,
    currentScore: 510,
    bust: false,
    initialValue: 510,
    initalLegScore: 510,
    leg: [[]],
  };

  const [gameState, setGameState] = useState<IGameState>(newGame);

  const handleThrow = (targetHit: string, hitScore: number) => {
    const newGamestate = { ...gameState };
    const { currentScore, leg } = gameState;
    const lastLeg = leg[leg.length - 1];
    const lastLegIndex = leg.length - 1;
    if (!isBust({ currentScore, hitScore, targetHit })) {
      lastLeg.length < 3 && !lastLeg.includes('bust')
        ? newGamestate.leg[lastLegIndex].push('bust')
        : (newGamestate.leg = [...leg, ['bust']]); //ob.a = [...ob.a, [1,2,3]]
      setGameState({
        ...newGamestate,
        previousScore: currentScore,
        currentScore: newGamestate.previousScore,
      });
      return;
    }
    if (lastLeg.length === 3) newGamestate.previousScore = currentScore;
    newGamestate.currentScore -= hitScore;
    lastLeg.length < 3 && !leg[lastLegIndex].includes('bust')
      ? newGamestate.leg[lastLegIndex].push(targetHit)
      : (newGamestate.leg = [...leg, [targetHit]]); //ob.a = [...ob.a, [1,2,3]]
    setGameState(newGamestate);
  };

  useEffect(() => console.table(gameState), [gameState]);
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
