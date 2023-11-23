"use client"
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  let headerContent; // JSX.Elementを保持できるように変数の名前と型を変更
  switch (pathname) {
    case '/history':
      headerContent = <h1>履歴</h1>;
      break;
    case '/send':
      headerContent = <h1>贈る</h1>;
      break;
    case '/account':
      headerContent = <h1>アカウント</h1>;
      break;
    default:
      headerContent =      
        <Image src="/pigeonLogolight.svg" alt="Pigeon" width={150} height={50} />
  }


  return (
    <header style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '5px',
      borderBottom: '1px solid #eaeaea',
    }}>
    <div className="bg-purple-50">
      {headerContent}
    </div>

    </header>
  );
};

export default Header;
