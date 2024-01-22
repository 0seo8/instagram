'use client';
// 상태에 대한 관리를 함으로 -> 클라이언트 컴폰넌트

import React from 'react';
import Link from 'next/link';
import HomeIcons from '@/components/ui/icons/HomeIcons';
import HomeFillIcon from '@/components/ui/icons/HomeFillIcon';
import SearchIcon from '@/components/ui/icons/SearchIcon';
import SearchFillIcon from '@/components/ui/icons/SearchFillIcon';
import NewIcon from '@/components/ui/icons/NewIcon';
import NewFillIcon from '@/components/ui/icons/NewFillIcon';
import { usePathname } from 'next/navigation';
import ColorButton from '@/components/ui/ColorButton';

const menu = [
  {
    href: '/',
    icon: <HomeIcons />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: '/search',
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: '/new',
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];

export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className="flex justify-between items-center px-6">
      <Link href="/">
        <h1 className="text-3xl font-bold">Instantgram</h1>
      </Link>
      <nav>
        <ul className="flex gap-4 items-center p-4">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathName === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
          <ColorButton text="Sign in" onClick={() => {}} />
        </ul>
      </nav>
    </div>
  );
}
