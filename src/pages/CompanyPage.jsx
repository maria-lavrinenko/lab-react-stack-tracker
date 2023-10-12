import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./CompanyPage.css";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();

  const companyToDisplay = companies.find(
    (company) => company.slug === companySlug
  );
  console.log(companyToDisplay.techStack);
  const stack = companyToDisplay.techStack;
  return (
    <>
      <div className="SingleCompany">
        <div>
          <img className="company-logo" src={companyToDisplay.logo} />
        </div>

        <section>
          <h1>{companyToDisplay.name}</h1>
          <h2>About</h2>
          <p>
            <a href={companyToDisplay.website} target="_blank">
              website
            </a>
          </p>

          <p>{companyToDisplay.description}</p>
        </section>
      </div>
      <article className="tech">
        {stack.map((element) => {
          return (
            <Link to={`/tech/${element.slug}`}>
              <picture>
                <img className="logo" src={element.image} />
              </picture>
              <h4>{element.name}</h4>
            </Link>
          );
        })}
      </article>
    </>
  );
}

export default CompanyPage;
