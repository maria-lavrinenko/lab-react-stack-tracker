import { useState } from "react";
import "./App.css";

import CompaniesData from "./companies.json";
import TechnologiesData from "./technologies.json";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  const [companies, setCompanies] = useState(CompaniesData);
  const [technologies, setTechnologies] = useState(TechnologiesData);

  return (
    <>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage companies={companies} />} />
          <Route
            path="/company/:companySlug"
            element={<CompanyPage companies={companies} />}
          />
          <Route
            path="/tech/:slug"
            element={<TechnologyPage technologies={technologies} />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
