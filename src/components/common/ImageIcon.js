import React from "react";
import PropTypes from "prop-types";

const ImageIcon = (props) => {
  const { image, style, ...otherProps } = props;
  const finalStyle = Object.assign({}, style ? style : {}, {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    display: "inline-block",
    verticalAlign: "middle",
  });
  return <div className="image-icon" style={finalStyle} />;
};

ImageIcon.propTypes = {
  image: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default ImageIcon;
