import { useRef, useState } from "react";
import Dialog from "./Dialog";

const Notification = ({ value }: { value: string }) => {
  const buttonRef = useRef<any>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    if (!isOpen) {
      buttonRef.current?.open();
    } else {
      buttonRef.current?.close();
    }

    setIsOpen((prev: any) => !prev);
  };

  return (
    <div>
      <button ref={buttonRef} onClick={handleClick}>
        Click Me
      </button>
      <Dialog ref={buttonRef}>
        <h1>{value}</h1>
        <button onClick={handleClick}>Close</button>
      </Dialog>
    </div>
  );
};

export default Notification;
