import './App.css';
import HomePage from './components/views/home/HomePage';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/views/login/LoginPage';
import SignUpPage from './components/views/signUp/SignUpPage';
import TestPage from './components/views/test/Test';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`;

function App() {
  return (
    <Wrapper>
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
        <Route path='/test' element={
          <TestPage></TestPage>
        }></Route>
      </Routes>
    </Wrapper>
  );
}

export default App;
