import React from 'react';

interface ActionButtonProps {
  mainText: string;
  subText: string;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ mainText, subText, onClick }) => {
  return (
    <div className="m-4">
      <button className="bg-gray-300 text-black w-full p-4 rounded-lg font-semibold" onClick={onClick}>
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
