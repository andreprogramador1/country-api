import styled from 'styled-components'

export const ContainerDropSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //width: 100%;
  
  input {
    margin: auto;
    width: 80%;
    padding: 15px;
    border-radius: 8px;
    border: none;
    margin-bottom: 20px;
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
`;