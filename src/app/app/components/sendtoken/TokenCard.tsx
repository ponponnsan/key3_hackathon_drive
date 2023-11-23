import React from 'react';
import Image from 'next/image';
import { TokenCardProps } from '../../utils/interfaces';

const TokenCard: React.FC<TokenCardProps> = ({ balance, sent, received }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 m-4">
      <div className="flex flex-col justify-center items-center">
        <Image
            src="/token.png" // 画像のパスを適宜変更してください
            alt="トークンアイコン"
            width={30}
            height={30}
            className="rounded-lg"
          />

        <h1 className="text-4xl font-bold text-[#333333] my-2">{balance} PGN</h1>

      </div>
      <div className="mt-4 flex justify-between">
        <span className="text-[#333333] text-sm">{sent} PGN <br /> 贈った</span>
        <span className="text-[#333333] text-sm">{received} PGN <br /> 受け取った</span>
      </div>
    </div>
  );
};

export default TokenCard;
