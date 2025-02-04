import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar.jsx';
import Editor from '../../components/Editor.jsx';
import Viewer from '../../components/Viewer.jsx';
import Button from '../../components/Button.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from '../../utils/axios.js';

const Edit = () => {
  const userData = useSelector((state) => state.user.userData);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();

  const [title, setTitle] = useState('Hello');
  const [content, setContent] = useState('World');

  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`/questions/board/${id}`);
        if (userData.nickName !== res.data.writerNickName) {
          navigate(`/questions/detail/${id}`);
          return;
        }
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userData]);

  useEffect(() => {
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      navigate(`/questions/detail/${id}`);
      return;
    }
  }, [isLoggedIn]);

  const postEdits = async () => {
    try {
      await axios.patch(`/questions/edit/${id}`, { title, content });
      navigate(`/questions/detail/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PageWrapper>
      <PageContainer>
        <Sidebar />
        <ContentContainer>
          <EditSection>
            <span className="label">Title</span>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <span className="label">Body</span>
            <Editor content={content} setContent={setContent} />
            <br />
            <Viewer content={content} />
            <br />
            <div className="btn-wrapper">
              <Button onClick={postEdits}>Save edits</Button>
            </div>
          </EditSection>
          <Widget>
            <div className="title-box">How to Edit</div>
            <ul className="list-box">
              <li>Correct minor typos or mistakes</li>
              <li>Clarify meaning without changing it</li>
              <li>Add related resources or links</li>
              <li>
                <i>Always</i> respect the original author
              </li>
              <li>Don’t use edits to reply to the author</li>
            </ul>
          </Widget>
        </ContentContainer>
      </PageContainer>
    </PageWrapper>
  );
};

export default Edit;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 54px;
  display: flex;
  justify-content: center;
`;

const PageContainer = styled.div`
  width: 1264px;
  min-height: 100vh;
  padding: 0 24px;
  display: flex;
  flex-direction: row;
`;

const ContentContainer = styled.div`
  width: 1100px;
  padding: 24px;
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const EditSection = styled.div`
  width: 663px;
  display: flex;
  flex-direction: column;
  .label {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  input {
    width: 100%;
    height: 32px;
    padding: 9px 8px;
    border: 1px solid #babfc4;
    border-radius: 5px;
    margin-bottom: 0.7rem;
  }
`;

const Widget = styled.div`
  width: 363px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border: 1px solid #f1e5bc;
  border-radius: 5px;
  .title-box {
    background-color: #fbf3d5;
    padding: 12px 15px;
    border-bottom: 1px solid #f1e5bc;
  }
  .list-box {
    background-color: #fdf7e2;
    padding: 4px 15px;
    li {
      margin: 12px 0;
      margin-left: 1rem;
      font-size: 0.8rem;
    }
  }
`;
