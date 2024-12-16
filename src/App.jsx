import { useState } from "react";
import "./app.css";
import SearchBar from "./Components/SearchBar.jsx";
import SearchResult from "./Components/SearchResult.jsx";
function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <SearchBar
        className="searchbar"
        setResults={setResults}
        setLoading={setLoading}
      />
      {loading ? <p>Loading...</p> : <SearchResult results={results} />}
    </>
  );
}
export default App;
