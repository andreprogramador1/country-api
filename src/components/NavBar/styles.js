import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: white; */
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 0 20px;
  height: 80px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  margin-bottom: 15px;
  
  strong {
    font-weight: 800;
    font-size: 15px;
    color: ${({ theme }) => theme.text};
  }
  
`;