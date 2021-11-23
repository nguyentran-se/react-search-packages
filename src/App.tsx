import RepositoryList from "components/RepositoryList/RepositoryList";
import { useActions } from "hooks";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectLoading, selectTotal } from "selectors";
import "./App.scss";
const App = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const { searchRepository } = useActions();

  const loading = useSelector(selectLoading);
  const total = useSelector(selectTotal);
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const searchHandler = () => {
    // dispatch(actionCreators.searchRepository(inputValue));
    searchRepository(inputValue);
  };

  return (
    <div className="app">
      <h1>Typescript app - SEARCH REPOSITORIES</h1>
      <input
        type="text"
        onChange={(e) => inputHandler(e)}
        value={inputValue}
        placeholder="name of package"
      />
      {loading && <div>...loading...</div>}
      <button onClick={searchHandler}>Search</button>
      <h3>Result: {total}</h3>
      <RepositoryList />
    </div>
  );
};

export default App;
