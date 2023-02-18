import React from "react";
import "../pages/issues/IssuesPage.css";
import { Link } from "react-router-dom";

const IssueDetailsPage = () => {
  return (
    
    <div>
      <p>The details of the selected issue have to be shown</p>

      <div>
        <Link to="/"> Go back</Link>
      </div>
    </div>
  );
};

export default IssueDetailsPage;
