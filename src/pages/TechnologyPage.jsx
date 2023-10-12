import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./TechnologyPage.css";

function TechnologyPage({ technologies }) {
  const { slug } = useParams();
  console.log(technologies);

  const technologyToDisplay = technologies.find(
    (technology) => technology.slug === slug
  );

  console.log(technologyToDisplay);

  return (
    <>
      <article className="TechPage">
        <div>
          <img className="tech-logo" src={technologyToDisplay.image} alt="" />
        </div>
        <div>
          <h2>{technologyToDisplay.name}</h2>
          <p>{technologyToDisplay.description}</p>
        </div>
      </article>
      {/* <button>Back</button> */}
    </>
  );
}

export default TechnologyPage;
