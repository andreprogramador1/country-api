import styled from 'styled-components'



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;

  .card-content {
    background-color: none;
    width: 300px;
    //border-radius: 7px;
    margin-top: 30px;
    //box-shadow: 0 10px 10px rgba(0,0,0,0.1);

    h1 {
      margin: 25px 0;
    }

    strong {
      padding-bottom: 5px;
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      //border-radius: 7px 7px 0 0 ;
    }
  }

  .inner-card-content-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .inner-card-content-2 {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 30px;
  }

  li {
    list-style: none;
  }

  .bottom-content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      text-align: center;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    li {
      background-color: ${({ theme }) => theme.backgroundColor};
      padding: 7px 12px;
      margin-bottom: 7px;
      box-shadow: 0 3px 1px rgba(0,0,0,0.1);
    }
    /* ul:not(first-child) {
      li {
        margin-left: 5px;
      }
    } */
  }

  a{
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.text};
  }

  .inner-card-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

  @media (min-width: 1024px) {

    .card-content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50vh;
      width: 100%;

      img {
        width: auto;
        height: 250px;
        margin-right: 100px;
      }
    }

    .inner-card-container {
      display: flex;
      flex-direction: row;
    }

    .bottom-content {
      display: flex;
      

      ul {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
      }
    }

    .inner-card-content-1 {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      flex: 1;
      strong {
        width: 40%;
      }
      span {
        width: 50%;
      }
      h1 {
        width: 100%;
      }
    }
    .inner-card-content-2 {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      flex: 1;
      strong {
        width: 50%;
        white-space: nowrap;
      }
      span {
        width: 50%;
      }
      h1 {
        width: 100%;
      }
      
    }

    .desktop-drop-search {
      
      input {
        margin-bottom: 0px;
        border-radius: 0px;
        flex: 1.2;
        margin: 0;
      }
      select {
        border-radius: 0px;
        flex: 0.4;
      }
    }
  }
`;

