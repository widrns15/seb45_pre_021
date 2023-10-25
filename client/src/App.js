import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import MyPage from './pages/users/MyPage.jsx';
import Login from './pages/users/Login.jsx';
import Register from './pages/users/Register.jsx';
import Main from './pages/questions/Main.jsx';
import Post from './pages/questions/Post.jsx';
import Edit from './pages/questions/Edit.jsx';
import Detail from './pages/questions/Detail.jsx';
import Search from './pages/questions/Search.jsx';
import NotFound from './pages/NotFound.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<MyPage />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/questions" element={<Main />} />
          <Route path="/questions/post" element={<Post />} />
          <Route path="/questions/edit/:id" element={<Edit />} />
          <Route path="/questions/detail/:id" element={<Detail />} />
          <Route path="/questions/search/:keyword" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
