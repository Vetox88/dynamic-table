import React, { useState, useEffect } from 'react';
import Table from './components/Table/index';
import Pagination from './components/PaginationWrapper/index';

const UsersTable = ({ searchValue }) => {
  const [users, setUsers] = useState([]);
  const [sorting, setSorting] = useState({ column: 'id', order: 'asc' });
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const usersPerPage = 20; // Number of users to display per page

  const sortTable = (newSorting) => {
    setSorting(newSorting);
  };

  useEffect(() => {
    const url = `http://localhost:3001/posts?`;
    const sortedUrl = `${url}_sort=${sorting.column}&_order=${sorting.order}&q=${searchValue}`;
    
    fetch(sortedUrl)
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
      });
  }, [sorting, searchValue]);

  const formatDate = (dateString) => {
    // Your date formatting logic
  };

  // Calculate the index of the first and last user of the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div>
      {/* Pass only the current users to the Table component */}
      <Table users={currentUsers} sortTable={sortTable} formatDate={formatDate} />
      
      {/* Pagination controls */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isNextDisabled={indexOfLastUser >= users.length}
      />
    </div>
  );
};

export default UsersTable;
