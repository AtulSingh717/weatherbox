import React from "react";
import { Link } from "react-router-dom";
import "./countries.css";


export default function Countries({ country, index }) {
  return (
    <Link to={`/country/${country}`}>
      <div className="country-card">
          <div className="country-name">{country}</div>
      </div>
    </Link>
  );
}