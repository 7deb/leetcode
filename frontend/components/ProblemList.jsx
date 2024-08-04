import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import '../styles/ProblemList.css';
import Problems from '../DS/Problems';
import PaginationControls from './PaginationControls';
import FilterButtons from './FilterButtons';

const ProblemList = () => {
  const [sortField, setSortField] = useState('title');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(50); // Default to 50 items per page

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items) => {
    setItemsPerPage(items);
    setCurrentPage(1); // Reset to first page on items per page change
  };

  const difficultyOrder = {
    Easy: 1,
    Medium: 2,
    Hard: 3,
  };

  const sortedProblems = [...Problems].sort((a, b) => {
    if (sortField === 'difficulty') {
      const order = difficultyOrder[a[sortField]] - difficultyOrder[b[sortField]];
      return sortOrder === 'asc' ? order : -order;
    }

    if (sortField === 'title') {
      return sortOrder === 'asc' ? a.id - b.id : b.id - a.id;
    }

    if (a[sortField] < b[sortField]) return sortOrder === 'asc' ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const indexOfLastProblem = currentPage * itemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - itemsPerPage;
  const currentProblems = sortedProblems.slice(indexOfFirstProblem, indexOfLastProblem);

  // Calculate total pages
  const totalPages = Math.ceil(sortedProblems.length / itemsPerPage);

  const getDifficultyClass = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'difficulty-easy';
      case 'Medium':
        return 'difficulty-medium';
      case 'Hard':
        return 'difficulty-hard';
      default:
        return '';
    }
  };

  return (
    <div>
      <FilterButtons handleSort={handleSort} sortField={sortField} />

      <Table striped>
        <thead>
          <tr>
            <th>Status</th>
            <th onClick={() => handleSort('title')}>Title</th>
            <th>Solution</th>
            <th onClick={() => handleSort('acceptance')}>Acceptance</th>
            <th onClick={() => handleSort('difficulty')}>Difficulty</th>
            <th onClick={() => handleSort('frequency')}>Frequency</th>
          </tr>
        </thead>
        <tbody>
          {currentProblems.map((problem) => (
            <tr key={problem.id}>
              <td></td>
              <td>{problem.title}</td>
              <td>
                <a href={`${problem.solution}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="text-purple dark:text-dark-purple h-5 w-5"
                  >
                    <path d="M10 15.464v-3.927a.8.8 0 011.259-.656l2.805 1.964a.8.8 0 010 1.31l-2.805 1.964A.8.8 0 0110 15.464z"></path>
                    <path d="M7 4a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V9h-3a2 2 0 01-2-2V4H7zm8 .6V7h1.92L15 4.6zM4 5a3 3 0 013-3h7.039a3 3 0 012.342 1.126l2.962 3.701A3 3 0 0120 8.702V19a3 3 0 01-3 3H7a3 3 0 01-3-3V5z"></path>
                  </svg>
                </a>
              </td>
              <td>{problem.acceptance}</td>
              <td className={getDifficultyClass(problem.difficulty)}>{problem.difficulty}</td>
              <td>{problem.frequency}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
};

export default ProblemList;