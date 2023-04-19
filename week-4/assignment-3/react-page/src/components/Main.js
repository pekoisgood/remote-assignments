import { useState } from "react";

export default function Main() {
  const [action, setAction] = useState(true);

  const boxes = [
    {
      p: "Content Box 1",
    },
    {
      p: "Content Box 2",
    },
    {
      p: "Content Box 3",
    },
    {
      p: "Content Box 4",
    },
  ];

  return (
    <main>
      <h2>Section Title</h2>
      <div className="col">
        {boxes.map((box) => (
          <div className="box">
            <p>{box.p}</p>
          </div>
        ))}
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
          {boxes.map((box) => (
            <div className="box">
              <p>{box.p}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
