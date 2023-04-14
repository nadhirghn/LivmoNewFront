import React from "react";
import styled from "styled-components";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function UserCard({ imageSrc, name, label, button }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#e42651",
      },
      secondary: {
        main: "#000",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <MyCard>
      <img src={imageSrc} alt="profile" />
      <div>
        <span>
          <h1>{name}</h1>
          <CheckCircleOutlineOutlinedIcon color="primary" />
        </span>
        <h3>{label}</h3>
        {button ? <MyButton>Settings</MyButton> : <div></div>}
      </div>
    </MyCard>
    </ThemeProvider>
  );
}

export default UserCard;
const MyCard = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  padding: 32px;
  height: 100%;
  justify-content: space-between;
  div {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  img {
    margin-right: 32px;
    width: 128px;
    height: 128px;
    border-radius: 100%;
    object-fit: cover;
  }
  @media only screen and (min-width: 768px) {
    width: 60%;
    img {
      width: 196px;
      height: 196px;
    }
  }
`;
export const MyButton = styled.button`
  width: 196px;
  color: #e42651;
  padding: 8px 16px;
  border-radius: 8px;
  border: solid 1px gray;
  background: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  cursor: pointer;
  &:hover {
    background: #ffe5ec;
  }
`;
