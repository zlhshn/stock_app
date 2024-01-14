import React from "react";

const FirmCard = ({ firm }) => {
  const { address, image, name, phone, _id } = firm;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
        {name}
          <div className="badge badge-secondary">{name}</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default FirmCard;
