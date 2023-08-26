import React from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  background-color: #f5f5f5;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
  margin: 0 4px;
  border-radius: 8px;
  color: #333;

  &:hover {
    background-color: #ddd;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const PaginationText = styled.span`
  font-size: 18px;
  margin: 0 12px;
`;

const Pagination = ({ currentPage, setCurrentPage, isNextDisabled }) => {
  return (
    <PaginationWrapper>
      <PaginationButton onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </PaginationButton>
      <PaginationText>{currentPage}</PaginationText>
      <PaginationButton onClick={() => setCurrentPage(currentPage + 1)} disabled={isNextDisabled}>
        Next
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default Pagination;