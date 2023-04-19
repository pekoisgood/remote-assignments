import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [counters, setCounters] = useState([
    {
      id: 1,
      count: 0,
    },
    {
      id: 2,
      count: 0,
    },
    {
      id: 3,
      count: 0,
    },
  ]);

  const [counterId, setCounterId] = useState(4);

  const AllAddCount = () => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) => {
        return {
          ...counter,
          count: counter.count + 1,
        };
      })
    );
  };

  const handleAddCount = (id) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) => {
        if (counter.id === id) {
          return {
            ...counter,
            count: counter.count + 1,
          };
        }
        return counter;
      })
    );
  };

  const addCounter = () => {
    setCounters([
      ...counters,
      {
        id: counterId,
        count: 0,
      },
    ]);
    setCounterId((prevId) => prevId + 1);
  };

  return (
    <div className="App">
      <button onClick={() => AllAddCount()}>All + 1</button>
      <div className="counter-container">
        {counters.map((item) => (
          <Counter
            key={item.id}
            id={item.id}
            count={item.count}
            addCount={handleAddCount}
          />
        ))}
      </div>
      <button onClick={() => addCounter()}>Add a Counter</button>
    </div>
  );
}

export default App;
