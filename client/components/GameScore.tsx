const GameScore = ({ score }: { score: number }) => {
  return (
    <>
      <h1 className='text-2xl text-gray-300 tracking-widest'>Current Score:</h1>
      <h1 className='text-2xl text-gray-300 tracking-widest'> {score}</h1>
    </>
  );
};

export default GameScore;
