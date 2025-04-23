import { useState } from "react";
import TwoWay from "./TwoWay";

const TwoWayContainer = () => {
const [message, setMessage] = useState<string>("Message 1");

  const syncMessage = (newMessage: string) => {
    setMessage(newMessage);
  };
  return <TwoWay message={message} syncMessage={syncMessage} />;
};

export default TwoWayContainer;
