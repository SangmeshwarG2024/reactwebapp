import React from "react";

const Card = ({ products }) => {
  return (
    <>
      {products?.map((item) => {
        const { id, title, description, thumbnail } = item;
        return (
          <div className="card" key={id}>
            <img src={thumbnail} className="card-image" alt="card image" />
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{description}</p>
          </div>
        );
      })}
    </>
  );
};

export default Card;
