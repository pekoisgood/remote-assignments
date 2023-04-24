import DevItem from "./DevItem.js";

const DevItems = ({ items }) => {
  const DevItems = items.map((item) => {
    return <DevItem item={item} key={item.id} />;
  });
  return <>{DevItems}</>;
};

export default DevItems;
