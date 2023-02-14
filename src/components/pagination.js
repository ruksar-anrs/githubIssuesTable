import React from 'react'
import "../IssuesPage.css"

const Pagination = ({ issuesPerPage, totalIssues, paginate, currentPage, setCurrentPage }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalIssues / issuesPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
 
      <div className='paginationRow'>
        <button   disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>  
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <span
            key={number} 
          >
            <a href="!#" onClick={() => paginate(number)} className={currentPage === number ? "active" : ""}>
         
            
             {number}
            </a>
          </span>
        ))}
      </ul>
      <button style={{marginLeft:"2rem"}} disabled={currentPage === Math.ceil(totalIssues / issuesPerPage)} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
    </div>
    );
  };
  

export default Pagination;
