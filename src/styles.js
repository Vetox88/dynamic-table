import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  padding: 20px;
`;

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


export { Container, Button };
