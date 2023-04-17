import { useState } from "react";

export default function Main() {
  const [action, setAction] = useState(true);
  return (
    <main>
      <h2>Section Title</h2>
      <div className="col">
        <div className="box">
          <p>Content Box 1</p>
        </div>
        <div className="box">
          <p>Content Box 2</p>
        </div>
        <div className="box">
          <p>Content Box 3</p>
        </div>
        <div className="box">
          <p>Content Box 4</p>
        </div>
      </div>
      <button
        className="action-button"
        onClick={() => setAction((prevState) => false)}
      >
        Call to Action
      </button>
      {action ? (
        ""
      ) : (
        <div className="col">
          <div className="box">
            <p>Content Box 1</p>
          </div>
          <div className="box">
            <p>Content Box 2</p>
          </div>
          <div className="box">
            <p>Content Box 3</p>
          </div>
          <div className="box">
            <p>Content Box 4</p>
          </div>
        </div>
      )}
    </main>
  );
}
