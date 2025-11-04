import React, { useState } from "react";

type ToggleProps = {
  enabled?: boolean;
  onToggle?: (newState: boolean) => void;
};

const Toggle: React.FC<ToggleProps> = ({ enabled = false, onToggle }) => {
  const [isOn, setIsOn] = useState(enabled);

  const handleClick = () => {
    const newState = !isOn;
    setIsOn(newState);
    onToggle?.(newState);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative inline-flex h-8 w-12 items-center rounded transition-colors duration-300 ease-in-out
        }`}
      style={{ backgroundColor: `var(${isOn ? '--gray' : '--dark-blue'})` }}
    >
      <span
        className={`inline-block h-[60%] px-2 rounded-sm bg-white transition-transform duration-300 ease-in-out transform hover:cursor-pointer ${isOn ? "translate-x-6" : "translate-x-2"
          }`}
      />
    </button>
  );
};

export default Toggle;
