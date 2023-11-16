"use client"
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  let headerText = '';
  switch (pathname) {
    case '/history':
      headerText = '履歴';
      break;
    case '/send':
      headerText = '送る';
      break;
    case '/account':
      headerText = 'アカウント';
      break;
    default:
      headerText = 'Pigeon';
  }

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px',
      borderBottom: '1px solid #eaeaea',
    }}>
      <h1>{headerText}</h1>
    </header>
  );
};

export default Header;
