import React from 'react';
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
        <a><i>🏠</i></a> {/* ホームアイコン */}
      </Link>
      <Link href="/send" passHref>
        <a><i>💬</i></a> {/* チャットアイコン */}
      </Link>
      <Link href="/account" passHref>
        <a><i>📊</i></a> {/* 統計アイコン */}
      </Link>
    </footer>
  );
};

export default Footer;

