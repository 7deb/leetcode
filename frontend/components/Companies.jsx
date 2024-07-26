import React, { useState } from 'react';
import '../styles/Companies.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { ChevronLeft, ChevronRight, Search } from 'react-bootstrap-icons';
import Company from '../DS/Company';

const Companies = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const companiesPerPage = 20;

  const handleNextPage = () => {
    if ((currentPage + 1) * companiesPerPage < filteredCompanies.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(0);
  };

  const filteredCompanies = Company.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentCompanies = filteredCompanies.slice(
    currentPage * companiesPerPage,
    (currentPage + 1) * companiesPerPage
  );

  return (
    <div>
      <div className='trending-companies'>
        <div className='trending-companies-header'>
          <div className='tc-h-header'>
            <span className='me-auto'>Trending Companies</span>
            <div className='left-right-btns ms-auto'>
              <ChevronLeft onClick={handlePrevPage} className="cursor-pointer" />
              <ChevronRight onClick={handleNextPage} className="cursor-pointer" />
            </div>
          </div>
          <div className="d-flex justify-content-center my-3">
            <Form.Control
              type="text"
              placeholder="Search for a company..."
              className="block w-full rounded-md leading-5 outline-none placeholder:text-label-4 dark:placeholder:text-dark-label-4 border-none py-1.5 text-label-2 dark:text-dark-label-2 bg-fill-3 dark:bg-dark-fill-3 focus:bg-fill-2 dark:focus:bg-dark-fill-2 pl-9 pr-3 company-search"
              autoComplete="off"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className='trending-companies-list'>
            {currentCompanies.map((company, index) => (
              <div key={index} className='company-div'>
                <a href={`/company/${company.name.toLowerCase()}`}>
                  <span>
                    <span className="company-name">{company.name}</span>
                    <span className="company-no">{company.no}</span>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
