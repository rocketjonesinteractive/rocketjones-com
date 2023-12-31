import Image from 'next/image';
import { useSpaLink } from '@/hooks/useSpaLink.tsx';

export const Logo = ({ color }: { color: 'light' | 'dark' }) => {
  const { navigate } = useSpaLink();

  return (
    <div onClick={() => navigate('top')} className={'relative cursor-pointer'}>
      <Image
        src={`/img/rocket-jones-logo-white.svg`}
        alt={'Rocket Jones Interactive'}
        width={212}
        height={32}
        priority={true}
        className={`max-h-[32px] w-auto lg:max-h-[64px] ${color === 'dark' ? 'hidden' : ''}`}
        style={{ width: 'auto', height: 'auto' }}
        loading={'eager'}
      />
      <Image
        src={`/img/rocket-jones-logo.svg`}
        alt={'Rocket Jones Interactive'}
        width={212}
        height={32}
        priority={true}
        className={`max-h-[32px] w-auto lg:max-h-[64px] ${color === 'light' ? 'hidden' : ''}`}
        style={{ width: 'auto', height: 'auto' }}
        loading={'eager'}
      />
    </div>
  );
};
