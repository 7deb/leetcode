import React, { useState, useEffect } from 'react';
import DiscussQsDS from '../DS/DiscussQsDS';
import { Tab, ListGroup, Badge} from 'react-bootstrap';
import PaginationControls from '../components/PaginationControls';
import '../styles/DiscussQs.css';

const DiscussQs = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [sortField, setSortField] = useState('title');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default to 10 items per page

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/problems');
        const data = await response.json();
        setProblems(data.problems);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProblems();
  }, []);

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

  const combinedQuestions = [...DiscussQsDS, ...problems];

  const sortedProblems = [...combinedQuestions].sort((a, b) => {
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

  return (
    <div>
      <Tab.Container defaultActiveKey="interview-question">
        <Tab.Content className="mt-3">
          <Tab.Pane eventKey="interview-question">
            <ListGroup variant="flush">
              {currentProblems.map((question, index) => (
                <ListGroup.Item key={index}>
                  <h5>{question.title}</h5>
                  <p>Views: <Badge variant="info">{question.views}</Badge> Replies: <Badge variant="info">{question.replies}</Badge></p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Tab.Pane>
          {/* Add more Tab.Pane components for other tabs */}
        </Tab.Content>
      </Tab.Container>
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
}

export default DiscussQs;
