import { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../imgs/logo-stackoverflow.png';
import HeaderDropdown from './HeaderDropdown.jsx';
import headerbutton from '../imgs/HeaderButton.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();

  const dropDownHandler = () => {
    setIsShow((props) => !props);
  };

  return (
    <NavigationSection>
      <DropdownSection>
        <button onClick={dropDownHandler}>
          <img src={headerbutton} alt="헤더 드롭다운 버튼" />
        </button>
      </DropdownSection>
      {isShow ? <HeaderDropdown dropDownHandler={dropDownHandler} /> : ''}
      <LogoSection onClick={() => navigate('/')}>
        <img src={logo} alt="Logo" />
      </LogoSection>
      <MenuSection>
        <li>
          <a href="https://stackoverflow.co/">About</a>
        </li>
        <li>
          <a href="/questions">Products</a>
        </li>
        <li>
          <a href="https://stackoverflow.co/teams">For Teams</a>{' '}
        </li>
      </MenuSection>
      <SearchSection>
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="Search..." />
      </SearchSection>
      <UserSection>
        <LoginSection onClick={() => navigate('/users/login')}>
          Log in
        </LoginSection>
        <RegisterSection onClick={() => navigate('/users/register')}>
          Sign up
        </RegisterSection>
      </UserSection>
    </NavigationSection>
  );
};

const NavigationSection = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  max-width: 100%;
  height: 5.6vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.125rem;
  background: #ffffff;
  background-color: var(--white);
  border-top: 3px solid #f48224;
  box-shadow: 0px 1px 1px 0px rgba(136, 135, 135, 0.5);
  z-index: 1;

  img {
    width: 9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    cursor: pointer;
    img {
      width: 1rem;
    }
  }
`;

const DropdownSection = styled.div`
  width: 3rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  cursor: pointer;

  img {
    width: 1rem;
  }
  &:hover {
    background-color: #e4e5e7;
  }
`;

const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.625rem;
  padding-bottom: 0.76rem;

  &:hover {
    background-color: #e4e5e7;
  }
`;

const MenuSection = styled.ol`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  list-style: none;
  margin: 0;
  cursor: pointer;

  a,
  a:visited,
  a:active {
    text-decoration: none;
    color: black;
  }

  li {
    padding: 0.375rem 0.75rem;
    &:hover {
      border-radius: 0.9375rem;
      background-color: #e4e5e7;
    }
  }
`;

const SearchSection = styled.form`
  width: 38%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 1px 1px rgba(136, 135, 135, 0.5);
  border-radius: 0.3125rem;
  padding: 0.5rem;

  input {
    width: 100%;
    padding: 0.1875rem;
    margin: 0.3125rem;
  }
`;

const UserSection = styled.ol`
  height: 60%;
  color: white;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  list-style: none;
  margin: 0;
  cursor: pointer;

  li:first-child {
    color: #5384a9;
    background-color: #e1ecf4;
    &:hover {
      background-color: #b3d3ea;
    }
  }

  li {
    border-radius: 5px;
    padding: 8px 10px;
    background-color: #0995ff;
    &:hover {
      background-color: #0074cc;
    }
  }
`;

const LoginSection = styled.li``;
const RegisterSection = styled.li``;

export default Nav;
