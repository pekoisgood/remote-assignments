const Counter = ({ id, count, addCount }) => {
  return (
    <div className="counter">
      <button onClick={() => addCount(id)} className="counter-btn">
        +1
      </button>
      <div>{count}</div>
    </div>
  );
};

export default Counter;
