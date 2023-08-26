import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
  }

  th {
    th {
      background-color: ${(props) => props.theme.headerBgColor};
      color: ${(props) => props.theme.headerTextColor};
      font-weight: 600;
    }
  }

  th button {
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 4px;
    font-size: 0.8em;
  }
`;
const StatusCircle = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${(props) => (props.online ? "green" : "red")};
  border-radius: 50%;
  display: inline-block;
`;

const Table = ({ users, sortTable, formatDate }) => {
  const sortableColumns = ["name", "status"];
  const sortUsersByStatus = (users, sortOrder) => {
    return [...users].sort((a, b) => {
      if (a.status === "online" && b.status !== "online") {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (a.status !== "online" && b.status === "online") {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  const sortUsersByColumn = (users, column, sortOrder) => {
    return [...users].sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];
      return sortOrder === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    });
  };

  const customSort = (users, column, sortOrder) => {
    let sortedUsers;
    if (column === "status") {
      sortedUsers = sortUsersByStatus(users, sortOrder);
    } else {
      sortedUsers = sortUsersByColumn(users, column, sortOrder);
    }

    sortTable(sortedUsers);
  };

  return (
    <StyledTable>
      <thead>
        {users && users.length > 0 && (
          <tr>
            {Object.keys(users[0]).map((column) => (
              <th key={column}>
                {column}
                {sortableColumns.includes(column) && (
                  <>
                    <button onClick={() => sortTable({ column, order: "asc" })}>
                      ↑
                    </button>
                    <button
                      onClick={() => sortTable({ column, order: "desc" })}
                    >
                      ↓
                    </button>
                  </>
                )}
              </th>
            ))}
          </tr>
        )}
      </thead>

      <tbody>
        {users &&
          users.map((user) => (
            <tr key={user.id}>
              {Object.keys(user).map((key) => (
                <td key={key}>
                  {key === "created" ? (
                    formatDate(user[key])
                  ) : key === "status" ? (
                    <StatusCircle online={user[key] === "online"} />
                  ) : (
                    user[key]
                  )}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
