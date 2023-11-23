import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-around items-center px-4 py-2 fixed inset-x-0 bottom-0 bg-white border-t border border-gray-300 z-5 rounded-full">
    <Link href="/history" passHref>
      <div className="flex flex-col items-center text-center hover:bg-green-200 dark:hover:bg-gray-200 p-2 rounded-full transition-all duration-300 text-gray-400">
        <Image src="/handshake-outline.png" alt="historyIcon" width={20} height={20} />
        <span>history</span>
      </div>
    </Link>
    <Link href="/send" passHref>
      <div className="flex flex-col items-center text-center hover:bg-green-200 dark:hover:bg-gray-200 p-2 rounded-full transition-all duration-300 text-gray-400">
        <Image src="/sendIcon.svg" alt="sendIcon" width={20} height={20} />
        <span>send</span>
      </div>
    </Link>
    <Link href="/account" passHref>
      <div className="flex flex-col items-center text-center hover:bg-green-200 dark:hover:bg-gray-200 p-2 rounded-full transition-all duration-300 text-gray-400">
        <Image src="/footerAccount.svg" alt="footerAccount" width={20} height={20} />
        <span>account</span>
      </div>
    </Link>
    </footer>
  );
};

export default Footer;

