const GameButton = ({ name }: { name: string }) => {
  return (
    <button className='border-2 border-gray-300 w-52 py-2 rounded-lg bg-gray-700 text-2xl font-bold tracking-widest text-gray-300'>
      {name}
    </button>
  );
};

export default GameButton;
