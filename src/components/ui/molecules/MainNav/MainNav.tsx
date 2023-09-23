'use client';

import { Button } from '@/components/ui/atoms/Button/Button';
import { useCallback, useEffect, useState } from 'react';
import { scrollToElementId } from '@/utils/scroll';
import MenuIcon from '@/../public/img/icons/menu.svg';
import CloseIcon from '@/../public/img/icons/close.svg';
import { useSpaLink } from '@/hooks/useSpaLink.tsx';

type NavItem = {
  name: string;
  id: string;
  active: boolean;
  cta?: boolean;
};

export const MainNav = ({ color }: { color: 'light' | 'dark' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [navItems, setNavItems] = useState<NavItem[]>([
    {
      name: 'Home',
      id: 'top',
      active: true,
    },
    {
      name: 'About',
      id: 'about',
      active: false,
    },
    {
      name: 'Process',
      id: 'process',
      active: false,
    },
    {
      name: 'Technology',
      id: 'technology',
      active: false,
    },
    {
      name: 'Blog',
      id: 'blog',
      active: false,
    },
    {
      name: 'Get Started',
      id: 'contact',
      active: false,
      cta: true,
    },
  ]);

  const { navigate, pathname, isOnHome, isOnBlog } = useSpaLink();

  const handleNavItemClick = (e: any, item: NavItem) => {
    e.preventDefault();
    navigate(item.id);
    setNavItems((prev) =>
      prev.map((navItem) => ({
        ...navItem,
        active: navItem.id === item.id,
      })),
    );
    setIsOpen(false);
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const detectFurtherNavItemScrolledTo = useCallback(() => {
    if (global.isAutoScrolling) return;

    if (!isOnHome) {
      if (isOnBlog) {
        setNavItems((prev) =>
          prev.map((navItem) => ({
            ...navItem,
            active: navItem.id === 'blog',
          })),
        );
        return;
      }
    }

    const furthestNavItem = navItems.reduce((prev, current) => {
      const el = document.getElementById(current.id);
      const headerHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--header-height'),
      );
      if (!el) return prev;
      if (window.scrollY >= el.offsetTop - headerHeight) {
        return current;
      }
      return prev;
    });
    setNavItems((prev) =>
      prev.map((navItem) => ({
        ...navItem,
        active: navItem.id === furthestNavItem.id,
      })),
    );
  }, [isOnHome, isOnBlog]); // eslint-disable-line

  const updateActiveItemBasedOnHash = useCallback(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const navItem = navItems.find((x) => x.id === hash.replace('#', ''));
    if (!navItem) return;
    setNavItems((prev) =>
      prev.map((navItem) => ({
        ...navItem,
        active: navItem.id === hash.replace('#', ''),
      })),
    );
  }, []); // eslint-disable-line

  useEffect(() => {
    window.addEventListener('scroll', detectFurtherNavItemScrolledTo);
    window.addEventListener('hashchange', updateActiveItemBasedOnHash);
    detectFurtherNavItemScrolledTo();
    updateActiveItemBasedOnHash();
    return () => {
      window.removeEventListener('scroll', detectFurtherNavItemScrolledTo);
      window.removeEventListener('hashchange', updateActiveItemBasedOnHash);
    };
  }, [detectFurtherNavItemScrolledTo, updateActiveItemBasedOnHash]);

  return (
    <nav className={`font-heading`}>
      {!isOpen && (
        <MenuIcon
          className={`cursor-pointer lg:hidden ${color === 'dark' ? 'text-black' : 'text-white'}`}
          onClick={() => handleMenuToggle()}
        />
      )}
      {isOpen && (
        <CloseIcon
          className={`cursor-pointer lg:hidden ${color === 'dark' ? 'text-black' : 'text-white'}`}
          onClick={() => handleMenuToggle()}
        />
      )}
      <div
        className={
          `absolute left-0 right-0 top-[var(--header-height)] overflow-hidden p-4 pt-0 lg:hidden ` +
          `${color === 'dark' ? 'bg-white shadow-lg' : ''} ` +
          `${isOpen ? '' : 'hidden'}`
        }
      >
        <ul
          className={`flex flex-col items-start space-y-8 p-4 text-sm font-bold uppercase backdrop-blur-lg lg:hidden ${
            color === 'light' ? 'bg-white/5 text-white backdrop-blur-lg' : 'bg-black/90 text-white'
          }`}
        >
          {navItems
            .filter((x) => !x.cta)
            .map((item) => (
              <li key={item.name}>
                <NavLink item={item} onClick={handleNavItemClick} />
              </li>
            ))}
          <li>
            <NavLink item={navItems.find((x) => x.cta)} onClick={handleNavItemClick} />
          </li>
        </ul>
      </div>
      <ul
        className={`hidden items-center space-x-8 text-sm font-bold uppercase lg:flex ${
          color === 'light' ? 'text-white' : 'text-black'
        }`}
      >
        {navItems
          .filter((x) => !x.cta)
          .map((item) => (
            <li key={item.name}>
              <NavLink item={item} onClick={handleNavItemClick} />
            </li>
          ))}
        <li>
          <Button id="link-contact" onClick={() => navigate('contact')}>
            Contact Us
          </Button>
        </li>
      </ul>
    </nav>
  );
};

const NavLink = ({
  item,
  onClick,
}: {
  item?: NavItem;
  onClick: (e: any, item: NavItem) => void;
}) => {
  if (!item) return null;
  return (
    <a
      id={`link-${item.id}`}
      href={'#'}
      className={
        "relative transition-colors after:absolute after:bottom-[-8px] after:left-0 after:w-[0px] after:border-b-2 after:border-b-red after:transition-all after:content-[''] hover:relative hover:text-red hover:transition-all hover:after:absolute hover:after:bottom-[-8px] hover:after:left-0 hover:after:!w-[100%] hover:after:border-b-2 hover:after:border-b-red hover:after:content-[''] " +
        (item.active ? 'text-red after:!w-[15px]' : '')
      }
      onClick={(e) => onClick(e, item)}
    >
      {item.name}
    </a>
  );
};
