import React from 'react';

interface TokenCardProps {
  earnedTokens: number;
  spentTokens: number;
}

const TokenCard: React.FC<TokenCardProps> = ({ earnedTokens, spentTokens }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 m-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{earnedTokens} token</h1>
        <button>
          {/* Icon or image can be placed here */}
        </button>
      </div>
      <div className="mt-4 flex justify-between">
        <span className="text-gray-900 dark:text-white">{earnedTokens} token <br /> 贈った</span>
        <span className="text-gray-900 dark:text-white">{spentTokens} token <br /> 受け取った</span>
      </div>
    </div>
  );
};

export default TokenCard;

