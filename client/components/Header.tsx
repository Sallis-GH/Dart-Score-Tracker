
const Header = ({title}:{title:string}) => {
  return (
    <header>
      <div className='flex flex-col items-center justify-center text-center py-2'>
        <h1 className='text-4xl text-gray-300 uppercase tracking-widest'>{title}</h1>
      </div>
    </header>
  );
};

export default Header;
