// components/WalletInfo.tsx
import React from 'react';
import Image from 'next/image';
import {WalletInfoProps} from "../../utils/interfaces"


const WalletInfo: React.FC<WalletInfoProps> = ({ accountName, walletAddress, licenseNumber }) => {
//   return (
//     <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 m-4">
//       <div className="flex items-center space-x-4">
//         <div className="rounded-full bg-gray-200 h-14 w-14">
//           <Image
//             src="/icon.png" // 画像のパスを適宜変更してください
//             alt="アイコン"
//             width={100}
//             height={100}
//             className="rounded-lg"
//           />
//         </div>
//         <div className="flex-1">
//           <h3 className="font-bold">{accountName}</h3>
//         </div>
//       </div>
//       <div className="mt-4">
//         <h4 className="text-sm font-bold">My wallet</h4>
//         <p className="text-sm">{walletAddress}</p>
//       </div>
//       {/* ...その他のUI要素... */}
//     </div>
//   );
// };



  return (
    <div className="bg-purple-50 dark:bg-white flex flex-col items-center p-4 rounded-lg">
      <div className="flex items-center justify-end w-full">
        <button className="bg-gray-200 rounded-full px-3 py-1">編集</button>
      </div>

      <div className="my-4">
      <Image
        src="/icon.png" // 画像のパスを適宜変更してください
        alt="アイコン"
        width={100}
        height={100}
        className="rounded-lg"
      />
      </div>
      <div className="flex-1">
        <h2 className="text-lg font-bold dark:text-gray-900">{accountName}</h2>
      </div>
     
      <p className="text-gray-500 dark:text-gray-400">{licenseNumber}</p>

      <div className="my-4 p-4 w-full bg-white dark:bg-gray-900 rounded-lg">
        <div className="flex items-center justify-between">
          <p>My wallet</p>
        </div>
        <p className="truncate text-gray-600">{walletAddress}</p>
      </div>


    </div>
  );
};


export default WalletInfo;
