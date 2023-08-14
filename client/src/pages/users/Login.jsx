import { styled } from 'styled-components';
import icon from '../../imgs/google_icon.svg';
import logo from '../../imgs/footer_logo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <LoginSection>
      <LogoSection onClick={() => navigate('/')}>
        <img src={logo} alt="logo" />
      </LogoSection>
      <FormSection>
        <ItemSection>
          <h1>Login</h1>
        </ItemSection>
        <ItemSection>
          <p>
            Don’t have an account? <a href="/users/register">Sign up</a>
          </p>
        </ItemSection>
        <LabelSection>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </LabelSection>
        <ButtonSection>Log in</ButtonSection>
        <ButtonSection className="OAuth">
          <img src={icon} alt="icon" />
          <p>Log in with Google</p>
        </ButtonSection>
      </FormSection>
    </LoginSection>
  );
};

const LoginSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 204px);
  margin-top: 3.375rem;
  background: transparent;
`;

const LogoSection = styled.div`
  margin: 0rem 0rem 1.5rem;
  cursor: pointer;
`;

const FormSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 23.75rem;
  height: 30.625rem;
  gap: 0.625rem;
  margin: 0rem 0rem 1.5rem;
  padding: 1.5rem;
  background: hsl(0, 0%, 100%);
  box-shadow:
    0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05),
    0 1px 4px hsla(0, 0%, 0%, 0.1);

  .OAuth {
    color: black;
    border: 1px solid hsl(210, 8%, 85%);
    background-color: white;

    &:hover {
      background-color: hsl(210, 8%, 97.5%);
    }
    &:active {
      background-color: hsl(210, 8%, 95%);
    }
  }
`;

const ItemSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 0.875rem;
  }

  a {
    color: hsl(206, 100%, 40%);
    text-decoration: none;
    cursor: pointer;
  }
`;

const LabelSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 0.625rem;
  margin: 2.2rem 0rem 1.5rem;

  label {
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 1.15rem;
    margin: 0.125rem 0px;
    padding: 0px 0.125rem;
    cursor: pointer;
  }

  input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16.125rem;
    height: 2rem;
    box-shadow: 0px 0px 1px 1px rgba(136, 135, 135, 0.5);
    border-radius: 0.3125rem;
    margin: 0rem 0rem 1rem;
    padding: 7.8px 32px 7.8px 9.1px;
    border: 2px solid transparent;
    transition: border-color 0.3s;

    &:focus {
      border-color: hsla(206, 100%, 40%, 0.6);
      outline: none;
    }
  }
`;

const ButtonSection = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16.125rem;
  height: 2.3125rem;
  margin: 0.125rem 0px;
  padding: 0.65rem;
  gap: 0.3125rem;
  color: white;
  box-shadow: none;
  outline: none;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 0.375rem;
  background-color: hsl(206, 100%, 52%);
  cursor: pointer;

  img {
    width: 1.125rem;
    height: 1.125rem;
  }

  &:hover {
    background-color: hsl(206, 100%, 40%);
  }
  &:active {
    background-color: hsl(209, 100%, 37.5%);
  }
`;

export default Login;
