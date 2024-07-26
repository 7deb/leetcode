import React, { useState } from 'react';
import { Button, Dropdown, FormControl } from 'react-bootstrap';
import '../styles/FilterButtons.css'; // Ensure you have the correct path

const FilterButtons = ({ handleFilter, handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleListFilter = (list) => {
    handleFilter('list', list);
  };

  const handleDifficultyFilter = (difficulty) => {
    handleFilter('difficulty', difficulty);
  };

  const handleStatusFilter = (status) => {
    handleFilter('status', status);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    handleSearch(searchQuery);
  };

  return (
    <div className="d-flex justify-content-between mb-3">
      <div className="d-flex gap-2 filter-buttons-container">
        <div className="position-relative">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-list" className="filter-button">
              List
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleListFilter('LeetCode Curated Algo 170')}>LeetCode Curated Algo 170</Dropdown.Item>
              <Dropdown.Item onClick={() => handleListFilter('LeetCode Curated SQL 70')}>LeetCode Curated SQL 70</Dropdown.Item>
              <Dropdown.Item onClick={() => handleListFilter('Top 100 Liked Questions')}>Top 100 Liked Questions</Dropdown.Item>
              <Dropdown.Item onClick={() => handleListFilter('Top Interview Questions')}>Top Interview Questions</Dropdown.Item>
              <Dropdown.Item onClick={() => handleListFilter('Favorite')}>Favorite</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="position-relative">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-difficulty" className="filter-button">
              Difficulty
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleDifficultyFilter('easy')}>Easy</Dropdown.Item>
              <Dropdown.Item onClick={() => handleDifficultyFilter('medium')}>Medium</Dropdown.Item>
              <Dropdown.Item onClick={() => handleDifficultyFilter('hard')}>Hard</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="position-relative">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-status" className="filter-button">
              Status
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleStatusFilter('todo')}>Todo</Dropdown.Item>
              <Dropdown.Item onClick={() => handleStatusFilter('solved')}>Solved</Dropdown.Item>
              <Dropdown.Item onClick={() => handleStatusFilter('attempted')}>Attempted</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="d-flex min-w-300px flex-4 gap-2">
          <div className="flex-1 sentry-unmask">
            <div className="relative rounded-md input_input-container__SZzNg">

              <FormControl
                type="text"
                placeholder="Search questions"
                className="filter-input"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className="relative" data-headlessui-state="">
            <Button
              aria-label="settings"
              className="filter-button"
              onClick={handleSearchSubmit}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="pointer-events-none h-5 w-5" aria-hidden="true">
                <path fillRule="evenodd" d="M7.174 5.619a8.064 8.064 0 011.635-.946l.29-1.158A2 2 0 0111.039 2h1.922a2 2 0 011.94 1.515l.29 1.158c.584.252 1.132.57 1.635.946l1.15-.329a2 2 0 012.282.923l.961 1.665a2 2 0 01-.342 2.437l-.86.832a8.151 8.151 0 010 1.888l.86.83a2 2 0 01.342 2.438l-.96 1.665a2 2 0 01-2.283.923l-1.15-.329a8.063 8.063 0 01-1.635.946l-.29 1.158a2 2 0 01-1.94 1.515H11.04a2 2 0 01-1.94-1.515l-.29-1.158a8.064 8.064 0 01-1.635-.946l-1.15.329a2 2 0 01-2.282-.923l-.961-1.665a2 2 0 01.342-2.437l.86-.831a8.158 8.158 0 010-1.889l-.86-.83a2 2 0 01-.342-2.438l.96-1.665a2 2 0 012.283-.923l1.15.329zm-1.7 1.594l-.961 1.665 1.57 1.518-.114.982a6.157 6.157 0 000 1.425l.114.982-1.57 1.518.96 1.665 2.104-.601.794.593c.38.284.793.523 1.23.711l.908.392.53 2.118h1.922l.53-2.118.909-.392a6.07 6.07 0 001.23-.711l.793-.593 2.103.601.961-1.665-1.57-1.518.114-.982a6.172 6.172 0 000-1.425l-.114-.982 1.57-1.518-.96-1.665-2.104.601-.794-.593a6.067 6.067 0 00-1.23-.71l-.908-.392L12.96 4H11.04l-.53 2.119-.909.391a6.064 6.064 0 00-1.23.711l-.793.593-2.103-.601zM12 16a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z" clipRule="evenodd"></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterButtons;
