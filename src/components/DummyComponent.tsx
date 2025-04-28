import { useRef, useState } from "react";

const rotate = (word: string) => {
  return (times: number) => {
    const trimWord = word?.substring(times);
    const modifiedWord = trimWord + word.replace(trimWord, "");
    return modifiedWord;
  };
};

const RotateComponent = ({ word }: any) => {
  const [comword, setComWord] = useState(word);
  const inputRef = useRef<HTMLInputElement>(null);
  const rotateOriginalWord = useRef<any>(rotate(word));

  const handleClick = (e: any) => {
    const times = (inputRef.current as any).value;
    const modifiedWord = rotateOriginalWord.current(times);
    setComWord(modifiedWord);
  };

  return (
    <div className="text-center">
      <p className="text-lg font-semibold text-gray-700 mb-2">{comword}</p>

      <input
        type="number"
        ref={inputRef}
        defaultValue={0}
        className="w-24 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
      />

      <button
        type="button"
        onClick={handleClick}
        className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        Rotate
      </button>
    </div>
  );
};

export default RotateComponent;
