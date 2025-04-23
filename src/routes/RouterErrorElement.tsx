import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RouterErrorElement = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate(-1);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>404 - Page Not Found</h2>
        <p>
          Please click the button to go to the home page, or we will redirect
          you automatically to the previous page in 5 seconds.
        </p>
        <button onClick={() => navigate("/")} style={{ marginTop: "1rem" }}>
          Go to Home
        </button>
      </div>
    </>
  );
};

export default RouterErrorElement;
