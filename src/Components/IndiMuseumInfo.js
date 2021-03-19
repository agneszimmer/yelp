import React from "react";
import { useState } from "react";

const IndiMuseumInfo = ({
  data: {
    name,
    address,
    phone,
    link,
    timings,
    rating,
    description,
    id,
    comment,
  },
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Address: {address}</p>
      <p>Phone: {phone}</p>
      <p>Website: {link}</p>
      <p>Opening Hours: {timings}</p>
      <p>Average Rating: {rating}</p>
      <p>Comments: {comment}</p>
      <p>{description}</p>
    </div>
  );
};

export default IndiMuseumInfo;
