// import React from 'react'
import RepositoryModel from "model/Repository";
import "./RepositoryCard.scss";

type RepositoryCardProps = {
  repository: RepositoryModel;
};

const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  return repository ? (
    <div className="repository-card">
      <a
        className="repository-card__wrapper"
        href={repository.package.links.npm}
        target="_blank"
        rel="noreferrer">
        <div className="repository-card__header">
          <h4>{repository.package.name}</h4>
          <p>{repository.package.version}</p>
        </div>
        <div className="repository-card__publisher">
          <p>Publisher: {repository.package.publisher.username}</p>
          <p>Email: {repository.package.publisher.email}</p>
        </div>
        <p className="description">{repository.package.description}</p>
        {/* {repository.package.maintainers} */}
      </a>
    </div>
  ) : null;
};

export default RepositoryCard;
