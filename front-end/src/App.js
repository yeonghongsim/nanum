import './App.css';
import HomePage from './components/views/home/HomePage';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/views/login/LoginPage';
import SignUpPage from './components/views/signUp/SignUpPage';
import TestPage from './components/views/test/Test';
import UsersProfilePage from './components/views/users/profile/UsersProfilePage';
import UsersWishListPage from './components/views/users/wishList/UsersWishListPage';
import UsersProfileFormPage from './components/views/users/profile/UsersProfileFormPage';
import UsersItemListPage from './components/views/users/itemList/UsersItemListPage';
import UsersRegisterItemPage from './components/views/users/registerItem/UsersRegisterItemPage';
import Test1 from './components/views/test/Test1';

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
        <Route path='/test1' element={
          <Test1></Test1>
        }></Route>
        <Route path='/users'>
          <Route path='profile' element={<UsersProfilePage></UsersProfilePage>}></Route>
          <Route path='wishList' element={<UsersWishListPage></UsersWishListPage>}></Route>
          <Route path='profileUpdate' element={<UsersProfileFormPage></UsersProfileFormPage>}></Route>
          <Route path='itemList' element={<UsersItemListPage></UsersItemListPage>}></Route>
          <Route path='registerItem' element={<UsersRegisterItemPage></UsersRegisterItemPage>}></Route>
        </Route>
      </Routes>
    </Wrapper>
  );
}

export default App;
