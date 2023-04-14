import React from "react";
import UserCard from "./UserCard";
import styled from "styled-components";
import { Card } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function TestimonialCard() {

  return (

    <MyCard>
      <span>
        <img
          alt="profile photo"
          src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
      </span>

      <div>
        <h3>Foulen Ben Foulen</h3>
        <h5>18/07/2022 18:35</h5>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          tenetur laboriosam a beatae vero delectus non ullam repellat, possimus
          perferendis labore sed quasi itaque! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Voluptatem provident, magni praesentium
          minus, illum optio quos mollitia earum obcaecati, nisi doloribus?
          Autem hic vitae corrupti, odit eaque facilis modi! Itaque.
        </p>
      </div>
    </MyCard>

  );
}

export default TestimonialCard;
const MyCard = styled(Card)`
  flex-direction: column;
  width: 90%;
  margin: 16px 0;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
  img {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    object-fit: cover;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  span {
    margin-right: 16px;
  }
  p {
    margin-top: 16px;
  }
`;
