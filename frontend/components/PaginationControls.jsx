import React from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import '../styles/PaginationControls.css';

const PaginationControls = ({ currentPage, totalPages, onPageChange, itemsPerPage, onItemsPerPageChange }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mt-4">
      {/* Items per Page Selector */}
      <Form.Group className="mb-0 form">
        <Form.Control
          as="select"
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(parseInt(e.target.value, 10))}
          className="form-select-sm"
        >
          <option value={20}>20 / page</option>
          <option value={50}>50 / page</option>
          <option value={100}>100 / page</option>
        </Form.Control>
      </Form.Group>

      {/* Pagination Buttons */}
      <ButtonGroup>
        <Button
          variant="outline-secondary"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          <ChevronLeft />
        </Button>
        {[...Array(totalPages).keys()].map(page => (
          <Button
            key={page + 1}
            variant={currentPage === page + 1 ? "primary" : "outline-secondary"}
            onClick={() => onPageChange(page + 1)}
          >
            {page + 1}
          </Button>
        ))}
        <Button
          variant="outline-secondary"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          <ChevronRight />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default PaginationControls;
