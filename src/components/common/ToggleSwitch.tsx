import { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={toggleSwitch}
        className="relative w-9 h-5 transition duration-300 ease-in-out transform rounded-full border border-textColor"
      >
        <div
          className={`w-4 h-4 bg-secondary rounded-full ml-px transition-transform ${
            isOn ? `translate-x-4 bg-green-400` : `translate-x-0 bg-slate-500`
          }`}
        ></div>
      </button>
    </div>
  );
};

export default ToggleSwitch;
