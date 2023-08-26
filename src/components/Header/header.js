import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
background-color: ${props => props.theme.background};
color: ${props => props.theme.text};
padding: 0;
width: 60px;
height: 30px;
border: none;
cursor: pointer;
position: relative;
border-radius: 15px;
transition: background-color 0.3s, color 0.3s;

&:focus {
  outline: none;
}

&:before {
  content: '';
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${props => props.theme.text};
  top: 2px;
  left: ${props => (props.isOn ? 'calc(100% - 28px)' : '2px')};
  transition: left 0.3s, background-color 0.3s;
}
`;

const SearchBar = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  color: #333;
  font-size: 14px;
  width: 250px; /* Adjust the width as needed */
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #2196f3; /* Material UI primary color */
  }
`;


const ModeSwitchText = styled.p`
  font-size: 14px;
`;

const HeaderWrapper = styled.div`
  width: 97.6%;
  background-color: #333; /* Just an example background color */
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0; /* Remove default margin from h1 element */
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Header = ({ isDarkMode, toggleTheme, searchValue, setSearchValue }) => {
  return (
    <HeaderWrapper>
      <Title>DriveXperience</Title>
      <HeaderRight>
        <SearchBar
          type="text"
          placeholder="Search by name..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <ModeSwitchText onClick={toggleTheme}>
          {isDarkMode ? "☀️" : "🌙"}
        </ModeSwitchText>
        <Button isOn={isDarkMode} onClick={toggleTheme}>
          {/* You can add an icon or label here */}
        </Button>
      </HeaderRight>
    </HeaderWrapper>
  );
};

export default Header;




