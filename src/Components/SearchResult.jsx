import propTypes from "prop-types";
function SearchResult({ results }) {
  return (
    <ul>
      {results.map((el, index) => (
        <li key={index}>{el.name}</li>
      ))}
    </ul>
  );
}
export default SearchResult;

SearchResult.propTypes = {
  results: propTypes.array,
};
