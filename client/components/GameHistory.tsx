const GameHistory = ({ leg }: { leg: string[] }) => {
  return (
    <>
      {leg.map((dart: string) => (
        <h3>{dart}</h3>
      ))}
    </>
  );
};

export default GameHistory;
