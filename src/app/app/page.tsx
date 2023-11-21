"use client";

import Image from 'next/image'
import SendToken from "./components/sendtoken/SendToken";
import Main from './components/history/history';
import ConfirmLicense from "./components/Signup/signup";
import { useRouter } from 'next/navigation';
import ActionButton from './components/utils/button/ActionButton';
import LicenseNumberInput from '../app/components/Signup/registerLicense'; 



export default function Home() {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <main className="flex-grow overflow-y-auto">
          <header className="...">
            {/* ヘッダーコンテンツ */}
          </header>

          <ConfirmLicense />

        </main>
      </div>

    </div>
  );
}

