import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage({ companies }) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies"</h1>

      <section>
        {companies.map((company) => {
          return (
            <article className="card" key={company.id}>
              <Link to={`/company/${company.slug}`}>
                <h3>{company.name}</h3>
                <img
                  className="logo"
                  src={company.logo}
                  alt={`${company.name} logo`}
                />
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default HomePage;
