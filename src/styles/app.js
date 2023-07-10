import { styled } from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* background: ${(props) => props.theme.colors.primary}; */

  header {
    display: flex;
    gap: 15px;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    padding: 2px;

    /* background-color: #6170e3; */
    background-color: ${(props) => props.theme.colors.primary};

    img {
      width: 80px;
      height: 80px;
      margin: 3px;
    }

    h4 {
      color: white;
      font-size: 15px;
    }

    p {
      color: white;
      font-size: 10px;
      font-weight: 500;
    }

    div {
      display: flex;
      align-items: center;
      flex-direction: column;
      font-weight: 700;
      gap: 3px;
    }
  }

  h1 {
    font-size: 20px;
    align-self: center;
    display: flex;
    align-items: center;
    /* color: ${(props) => props.theme.colors.textColor}; */
  }

  span {
    align-self: center;
  }

  form {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    gap: 5px;

    input {
      display: flex;
      padding: 10px;
      width: 80%;
      height: 40px;
    }
    button {
      font-size: 30px;
      &:hover {
        color: ${(props) => props.theme.colors.primary};
        /* color: #ffff;
        background: #ab1f3e; */
      }
    }
  }

  p {
    align-self: center;
  }

  ol {
    /* align-self: center; */
    li {
      align-self: center;
      width: 70%;
      margin-left: 8%;
      margin-right: 16%;

      button {
        border: 1px solid #ab1f3e;
        border-radius: 4px;
        width: 60px;
        height: 30px;
        margin-bottom: 4px;
        color: #ab1f3e;
        font-size: 12px;
        &:hover {
          color: #ffff;
          background: #ab1f3e;
        }
      }

      span {
        align-self: center;
        margin-right: 10px;
      }
    }
  }
`;
