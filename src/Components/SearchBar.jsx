import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import PropTypes from "prop-types";

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
`;

const SearchIconWrapper = styled.div`
  height: 50px;
  box-sizing: border-box;
  padding: 10px;
  cursor: pointer;
  border: 1px solid black;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  box-sizing: border-box;
  padding: 10px;
  cursor: pointer;
  border: 1px solid black;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  transition: transform ease-in-out 10ms;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  transition: transform ease-in 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid black;
  border-left: none;
  outline: none;
  /* flex-grow: 1; */
`;

function SearchBar({ setResults, setLoading }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input.length < 4) {
      setResults([]);
      setLoading(false);
      return;
    }

    const delayDebounce = setTimeout(() => {
      fetchData(input);
    }, 100); // 500ms debounce time

    return () => clearTimeout(delayDebounce); // Cleanup timeout
  }, [input]);

  async function fetchData(value) {
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      const result = data.filter((el) => {
        return el?.name?.toLowerCase()?.includes(value?.toLowerCase());
      });
      setResults(result);
    } catch (error) {
      console.log("Error fetching data. ", error);
      window.alert(`Api not found`);
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (value) => {
    setInput(value);
  };

  return (
    <>
      <SearchBarWrapper>
        <SearchIconWrapper>
          <FaSearch size="25px" />
        </SearchIconWrapper>
        <SearchInput
          type="text"
          placeholder="Search for item..."
          value={input}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
      </SearchBarWrapper>
      <p></p>
    </>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  setResults: PropTypes.array,
  setLoading: PropTypes.bool,
};
SearchBar.defaultProps = {
  setResults: [],
  setLoading: true,
};
