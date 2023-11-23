import React,{ useState } from 'react';
import { ActionButtonProps } from '@/app/utils/interfaces';


const ActionButton: React.FC<ActionButtonProps> = ({ mainText, subText, onClick, style }) => {
  const [hover, setHover] = useState(false);

  let hoverStyle = {};
  if (style) {
    hoverStyle = {
      ...style,
      backgroundColor: hover ? '#ccffcc' : '#FFFFFF', // ホバー時にはライトグリーン、そうでなければ白
    };
  }

  return (
    <div className="m-4">
      <button className="bg-green-100 hover:bg-green-200 dark:bg-white dark:border-2 dark:text-black dark:hover:bg-gray-200 w-full p-4 rounded-lg font-semibold transition-colors duration-150" onClick={onClick} style={hoverStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
        {mainText}
      </button>
        <p className="text-center text-gray-600 mt-2">
            <span style={{ whiteSpace: 'pre-line' }}>
                {subText}
            </span>
        </p>
    </div>
  );
};

export default ActionButton;
