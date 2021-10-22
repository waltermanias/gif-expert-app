import React from "react";
import PropTypes from "prop-types";

const GifGridItem = ({ title, id, url }) => {
  return (
    <div className="card animate__animated animate__bounce animate__delay-2s">
      <img src={url} alt={"imagen"} />
      <p>{title}</p>
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifGridItem;
