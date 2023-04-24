const DevItem = ({ item }) => {
  console.log(item);
  return (
    <div className="item">
      <div className="name-container">
        <h2 className="name">{item.name}</h2>
        <span className="visibility">
          {item.visibility.charAt(0).toUpperCase() + item.visibility.slice(1)}
        </span>
      </div>
      <p className="desc">{item.description}</p>
      <div className="topic-container">
        {item.topics.map((topic) => (
          <p className="topic" key={topic}>
            {topic}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DevItem;
