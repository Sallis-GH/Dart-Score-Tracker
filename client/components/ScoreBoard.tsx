import { IHistory, IScoreTracker } from "@/interface"


const ScoreBoard = ({history, score}:{history:IHistory[], score:IScoreTracker}) => {
  return (
    <div className='border-4 w-[305px] h-96 rounded-lg border-gray-300 bg-gray-800 flex items-center gap-2 flex-col overflow-y-auto'>
    <div className='flex flex-col h-16 items-center justify-center gap-2 mt-4'>
      {score ? (
        <>
          <h2 className='text-xl font-semibold text-gray-300'>
            Current score:
          </h2>
          <h3 className='text-center text-3xl font-semibold text-gray-300'>
            {score.current}
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
                  {round.bust ? 'Bust' : target}
                </h3>
              ))}
            </div>
            <h3 className='text-xl text-gray-300'>{round.score}</h3>
          </div>
        </div>
      ))}
  </div>
  )
}

export default ScoreBoard
