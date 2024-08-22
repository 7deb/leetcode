import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/ProblemList.css';
import PaginationControls from './PaginationControls';
import FilterButtons from './FilterButtons';
import usefetchProblem from '../hooks/usefetchProblem';

const ProblemList = () => {
    const { problems, loading, error } = usefetchProblem();
    const [sortField, setSortField] = useState('title');
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(50);

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
        setCurrentPage(1);
    };

    const difficultyOrder = {
        Easy: 1,
        Medium: 2,
        Hard: 3,
    };

    const sortedProblems = (Array.isArray(problems) ? [...problems] : []).sort((a, b) => {
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
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {!loading && !error && (
                <>
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
                                    <td>
                                        <Link to={`/problems/${problem._id}`}>{problem.title}</Link>
                                    </td>
                                    <td>
                                        <a href={`${problem.solution}`}></a>
                                    </td>
                                    <td>{problem.acceptance}</td>
                                    <td className={getDifficultyClass(problem.difficulty)}>
                                        {problem.difficulty}
                                    </td>
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
                </>
            )}
        </div>
    );
};

export default ProblemList;