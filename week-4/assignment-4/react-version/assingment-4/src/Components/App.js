import { useState, useEffect } from "react";
import axios from "axios";
import DevItems from "./DevItems";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    let activeFetch = true;
    axios
      .get(
        `https://api.github.com/orgs/facebook/repos?per_page=5&page=${pageNumber}`
      )
      .then((response) => {
        if (activeFetch) {
          if (items === []) {
            setItems(response.data.data);
          } else {
            setItems((prevItems) => [...prevItems, ...response.data]);
          }
          setIsLoading(false);
        }
      })
      .catch((err) => console.log("Error fetching and parsing", err));
    return () => (activeFetch = false);
    // eslint-disable-next-line
  }, [pageNumber]);

  return (
    <div className="App">
      {isLoading ? (
        <p>Laoding</p>
      ) : (
        <>
          <div className="wrapper">
            <DevItems items={items} pageNumber={pageNumber} />
          </div>
          <button
            onClick={() => {
              setPageNumber((prev) => prev + 1);
            }}
          >
            More
          </button>
        </>
      )}
    </div>
  );
}

export default App;
