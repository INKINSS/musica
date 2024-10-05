import { Card } from '@/components/ui/card';

const CardHits = () => {
  return (
    <Card className='h-40 mt-5 flex relative shadow-custom hover:scale-105 transform duration-300'>
      <picture className='w-full' >
        <source media='(min-width: 868px)' src='/src/assets/Cards/hits-md.webp' />
        <source media='(min-width: 400px)' src='/src/assets/Cards/hits-sm.webp' />
        <img className='rounded-lg w-full h-full object-cover brightness-50 hover:brightness-[80%] transform duration-100' src='/src/assets/Cards/hits-sm.webp' alt='hits' />
      </picture>
      <h2 className='absolute bottom-0 p-5 text-white font-extrabold text-[1.5rem]'>Hits Semanales</h2>
    </Card>
  );
};

export default CardHits;