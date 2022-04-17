import React from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>Details: {serviceId}</h2>
      <div className="text-center">
        <Link to={"/checkout"}>
          <button className="btn btn-primary">proceed checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
