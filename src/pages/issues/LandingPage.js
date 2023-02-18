import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination";
import "./IssuesPage.css";

const LandingPage = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [issuesPerPage] = useState(10);

  useEffect(() => {
    // Fetch data from the GitHub API
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(
        "https://api.github.com/repos/facebook/react/issues"
      );
      const data = await response.json();
      setIssues(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const indexOfLastIssue = currentPage * issuesPerPage;
  const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
  const currentIssues = issues?.slice(indexOfFirstIssue, indexOfLastIssue);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <h1 className="issue-header">GitHub Issues</h1>
      {loading === true ? (
        <div className="issueDetailsPage"> Loading.... </div>
      ) : (
        <div className="issue-page">
          <h4 style={{ marginTop: "50px" }}>
            Use the REST API to view and manage issues, including issue
            assignees, comments, labels, and milestones.
          </h4>

          <table className="issue-body">
            <thead className="issue-title">
              <tr>
                <th className="serial-num">SI No.</th>
                <th className="title">Title</th>
                <th className="meta">Author</th>
                <th className="date">Date</th>
              </tr>
            </thead>
            <tbody>
              {currentIssues.map((issue, index) => (
                <tr key={index}>
                  <td className="issue-num">{index + 1}</td>
                  <td className="issue-description">
                    {" "}
                    <Link
                      to="/issueId"
                      style={{ textDecoration: "none", color: "#282c34" }}
                    >
                      {issue.title}{" "}
                    </Link>
                  </td>
                  <td className="issue-meta">{issue.user.login}</td>
                  <td className="issue-date">{issue.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            currentPage={currentPage}
            issuesPerPage={issuesPerPage}
            setCurrentPage={setCurrentPage}
            totalIssues={issues.length}
            paginate={paginate}
          />
        </div>
      )}
    </>
  );
};

export default LandingPage;
