import React from "react";

function About({ image, aboutText }) {
  const defaultImage = "https://via.placeholder.com/215";
  return (
    <aside>
      <img src={image || defaultImage} alt="blog logo" />
    </aside>
  );
}

export default About;
