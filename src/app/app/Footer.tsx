import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer style={{
      display: 'flex',
      justifyContent: 'space-around',
      padding: '10px',
      borderTop: '1px solid #eaeaea',
      position: 'fixed', // 位置を固定する
      left: 0, // 左端からの位置
      bottom: 0, // 下端からの位置
      right: 0, // 右端からの位置
      backgroundColor: '#fff', // 背景色を白に指定
      zIndex: 1000 // 他の要素の上に表示するためのz-index
    }}>
      <Link href="/history" passHref>
          <Image src="/handshake-outline.png" alt="historyIcon" width={30} height={30} />
      </Link>
      <Link href="/send" passHref>
        <Image src="/sendIcon.svg" alt="sendIcon" width={30} height={30} />
      </Link>
      <Link href="/account" passHref>
        <Image src="/footerAccount.svg" alt="footerAccount" width={30} height={30} />
      </Link>
    </footer>
  );
};

export default Footer;

