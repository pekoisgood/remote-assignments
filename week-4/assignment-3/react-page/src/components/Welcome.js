import { useState } from "react";

export default function Welcome() {
  const [showHello, setShowHello] = useState(false);

  return (
    <div className="welcome-container">
      <h1
        id="welcome-message"
        onClick={() => setShowHello((prevState) => !prevState)}
      >
        {showHello ? "Welcome Message" : "Have a Good Time!"}
      </h1>
    </div>
  );
}
