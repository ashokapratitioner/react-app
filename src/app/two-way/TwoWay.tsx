const TwoWay = ({ message, syncMessage }: any) => {
  const updateMessage = (newMessage: string) => {
    syncMessage(newMessage);
  };

  const handleSelectChange = (e: any) => {
    updateMessage(e.target.value);
  };

  return (
    <div>
      <h1>Two Way</h1>
      <p>This is the Two Way message: {message}.</p>
      <select onChange={handleSelectChange} defaultValue={message}>
        <option value="Message 1">Message 1</option>
        <option value="Message 2">Message 2</option>
        <option value="Message 3">Message 3</option>
      </select>
    </div>
  );
};

export default TwoWay;
