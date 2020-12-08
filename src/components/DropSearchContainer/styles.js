import styled from 'styled-components'

export const ContainerDropSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //width: 100%;
  
  input {
    margin: auto;
    width: 60%;
    padding: 15px;
    border-radius: 8px;
    border: none;
    margin-bottom: 30px;
    background-color: ${({ theme }) => theme.backgroundColor};
    ::placeholder {
      color: ${({ theme }) => theme.text};
    }
  }
  select {
    width: 30%;
    margin: auto;
    padding: 15px;
    border-radius: 8px;
    border: none;

    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.text};
  }

  .desktop-drop-search {
      display: flex;
      flex-direction: column;
    }

  @media (min-width: 1024px) {

    input {
      margin-bottom: 0px;
      border-radius: 0px;
    }
    select {
      border-radius: 0px;
    }
    
    .card-master-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      li {
        margin-left: 50px;
      }
    }

    .desktop-drop-search {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 30px;
      width: 60%;
      margin: auto;
    }

    
  }
`;