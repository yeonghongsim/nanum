import './App.css';
import HomePage from './components/views/home/HomePage';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/views/login/LoginPage';
import SignUpPage from './components/views/signUp/SignUpPage';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <HomePage></HomePage>
          }></Route>
          <Route path='/login' element={
            <LoginPage></LoginPage>
          }></Route>
          <Route path='/signUp' element={
            <SignUpPage></SignUpPage>
          }></Route>
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
