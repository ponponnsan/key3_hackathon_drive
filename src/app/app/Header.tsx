import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', alignItems: 'center', borderBottom: '1px solid #eaeaea' }}>
      <span>9:41</span>
      <div>
        {/* ここにヘッダーのアイコンや機能を配置します */}
        <i style={{ margin: '0 10px' }}>🔍</i> {/* 仮のアイコン */}
        <i>⋮</i> {/* 仮のアイコン */}
      </div>
    </header>
  );
};

export default Header;
