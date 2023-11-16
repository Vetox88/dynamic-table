import './App.css';
import React, { useState } from 'react';
import PostTable from "./PostTable";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import Header from './components/Header/index'
import { Container } from './styles';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Container>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} searchValue={searchValue} setSearchValue={setSearchValue} />
        <PostTable searchValue={searchValue} />
      </Container>
    </ThemeProvider>
  );
};

export default App;

