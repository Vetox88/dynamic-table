import React, { useState, useEffect } from 'react';
import Table from './components/Table/index';
import Pagination from './components/PaginationWrapper/index';

const UsersTable = ({ searchValue }) => {
  const [users, setUsers] = useState([]);
  const [sorting, setSorting] = useState({ column: 'id', order: 'asc' });
  const [currentPage, setCurrentPage] = useState(1); 
  const [isLoading, setIsLoading] = useState(true); 
  
  const usersPerPage = 30; // Number of users to display per page

  const sortTable = (newSorting) => {
    setSorting(newSorting);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  

  useEffect(() => {
    setIsLoading(true); 
    
    const url = `http://localhost:3001/posts?`;
    const sortedUrl = `${url}_sort=${sorting.column}&_order=${sorting.order}&q=${searchValue}`;
    
    fetch(sortedUrl)
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, [sorting, searchValue]);

 

  // Calculate the index of the first and last user of the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : currentUsers.length > 0 ? (
        <Table users={currentUsers} sortTable={sortTable} formatDate={formatDate} />
      ) : (
        <p>No data available.</p>
      )}
      
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isNextDisabled={indexOfLastUser >= users.length}
      />
    </div>
  );
};

export default UsersTable;
