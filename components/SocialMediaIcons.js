import React from "react";

function SocialMediaIcons(props) {
  const { link } = props;
  return (
    <a href={link}>
      <i></i>
    </a>
  );
}

export default SocialMediaIcons;
