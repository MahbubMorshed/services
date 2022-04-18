import React from "react";
import { useNavigate } from "react-router-dom";
import "./service.css";
import { FaArtstation } from "react-icons/fa";

const Service = ({ service }) => {
  const { id, name, img, description, price, src } = service;
  const navigate = useNavigate();
  const handleDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service">
      <img src={img} alt="" className="w-100" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>
        <small>{description}</small>
      </p>
      <a href={src}>
        Full view
        <FaArtstation />
      </a>
      <button onClick={() => handleDetail(id)} className="btn btn-primary">
        Book: {name}
      </button>
    </div>
  );
};

export default Service;
