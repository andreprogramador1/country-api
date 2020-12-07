import styled from 'styled-components'

export const ContainerDropSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  
  input {
    margin: auto;
    width: 30%;
    padding: 15px;
    border-radius: 8px;
    border: none;
    
    background-color: ${({ theme }) => theme.backgroundColor};
    ::placeholder {
      color: ${({ theme }) => theme.text};
    }
  }
  select {
    width: 10%;
    margin: auto;
    padding: 15px;
    border-radius: 8px;
    border: none;

    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.text};
  }

  @media (min-width: 1024px) {
    
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
      justify-content: space-between;
    }

    
  }
`;