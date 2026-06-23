import React from "react";

function OptionSlider({ options, selected, setSelected }) {
  return (
    <div className="flex bg-zinc-800 rounded-lg p-1 w-fit gap-1 ">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          className={`px-4 py-2 rounded-md transition-all duration-300 
            ${selected === option ? "bg-red-950" : "bg-transparent hover:bg-[#030112]"}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default OptionSlider;
