import React, { useState } from 'react';
import TokenCard from './TokenCard'; // TokenCardコンポーネントのパスを適宜変更してください。
import ActionButton from './ActionButton'; // ActionButtonコンポーネントのパスを適宜変更してください。

const SendToken: React.FC = () => {
  const [isDrivingMode, setIsDrivingMode] = useState(false);

  const handleStartDrivingClick = () => {
    setIsDrivingMode(true);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="...">
        {/* ヘッダーコンテンツ */}
      </header>
      <main className="flex-grow overflow-y-auto">
        {!isDrivingMode ? (
          <>
            <TokenCard earnedTokens={24} spentTokens={44} />
            <ActionButton mainText="Start Driving" subText={`Turn on GPS to get location information.\n Tap to start voice instructions`} onClick={handleStartDrivingClick} />
          </>
        ) : (
          <>
            <TokenCard earnedTokens={24} spentTokens={44} />
            <ActionButton
              mainText="BraGo, send tokens"
              subText="アプリ終了する時どうするか書く"
            />
          </>
        )}
      </main>
      <footer className="...">
        {/* フッターコンポーネント */}
      </footer>
    </div>
  );
};

export default SendToken;
