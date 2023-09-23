import { usePathname, useRouter } from 'next/navigation';
import { scrollToElementId } from '@/utils/scroll.ts';

export const useSpaLink = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navigate = (url: string) => {
    if (pathname === '/') {
      scrollToElementId(url);
    } else {
      if (url === 'top') {
        router.push('/');
      } else {
        router.push('/#' + url);
      }
    }
  };

  const isOnHome = pathname === '/';
  const isOnBlog = pathname.startsWith('/blog');

  return { navigate, pathname, isOnHome, isOnBlog };
};
