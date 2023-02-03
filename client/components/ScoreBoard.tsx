import { IGameState } from '@/interface';
import GameHistory from './GameHistory';
import GameScore from './GameScore';

const ScoreBoard = ({ gameState }: { gameState: IGameState }) => {
  const { currentDart, currentScore, bust, initialValue, initalLegScore, leg } =
    gameState;
  return (
    <div className='border-4 w-[305px] h-96 rounded-lg border-gray-300 bg-gray-800 flex items-center gap-2 flex-col overflow-y-auto'>
      <GameScore score={gameState.currentScore} />
      <GameHistory leg={leg}/>
    </div>
  );
};

export default ScoreBoard;

//  currentDart: string,
// currentScore: number,
// bust: boolean,
// initialValue: number,
// initalLegScore: number,
// leg:string[]
