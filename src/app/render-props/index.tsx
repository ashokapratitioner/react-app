import MouseTracker from "../../components/MouseTracker";

const RenderProps = () => {
  return (
    <MouseTracker
      render={(mousePosition: any) => (
        <div>
          {mousePosition
            ? mousePosition?.x + ", " + mousePosition?.y
            : "Loading..."}
        </div>
      )}
    />
  );
};

export default RenderProps;
