import React from 'react'
import "../pages/issues/IssuesPage.css"

const Pagination = ({ issuesPerPage, totalIssues, paginate, currentPage, setCurrentPage }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalIssues / issuesPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
 
      <div className='paginationRow'>
        <button style={{   cursor: "pointer"}}  disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>  
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <span
            key={number} 
          >
            <span onClick={() => paginate(number)} className={currentPage === number ? "active" : ""}>
         
            
             {number}
            </span>
          </span>
        ))}
      </ul>
      <button style={{marginLeft:"2rem", cursor:"pointer"}} disabled={currentPage === Math.ceil(totalIssues / issuesPerPage)} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
    </div>
    );
  };
  

export default Pagination;
