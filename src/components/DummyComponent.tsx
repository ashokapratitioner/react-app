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
    <>
      <p>{comword}</p>
      <input type="number" ref={inputRef} defaultValue={0} />
      <button type="button" onClick={handleClick}>
        Rotate
      </button>
    </>
  );
};

export default RotateComponent;
