import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;

  .card-content {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.text};
    width: 300px;
    border-radius: 7px;
    margin-top: 30px;
    box-shadow: 0 10px 10px rgba(0,0,0,0.1);
    margin: auto;

    h1 {
      margin-bottom: 15px;
    }

    strong {
      margin-top: 15px;
      margin-right: 10px;
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 7px 7px 0 0 ;
    }
  }

  .inner-card-content {
    padding: 30px;
  }

  li {
    list-style: none;
    margin-top: 25px;
  }
`;

