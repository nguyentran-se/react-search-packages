// import React from 'react'

import Repository from "components/RepositoryCard/RepositoryCard";
import { useSelector } from "react-redux";
import { selectRepositories } from "selectors";
import "./RepositoryList.scss";

const RepositoryList = () => {
  const repositories = useSelector(selectRepositories);
  return (
    <section className="repository-list">
      {repositories &&
        repositories.map((repo) => (
          <Repository repository={repo} key={repo.package.name} />
        ))}
    </section>
  );
};

export default RepositoryList;
