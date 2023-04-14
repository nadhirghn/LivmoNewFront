import styled from "styled-components";
import { Grid, Select, Stack, TextField } from "@mui/material";
const Banner = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 20vh;
  width: 100%;
  background: linear-gradient("#6666", "#9999");
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    mix-blend-mode: darken;
    position: absolute;
  }
  h1 {
    color: white;
    z-index: 2;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
  }
`;
// const AddImage = styled(Button)`
//   /* border: 4px #e42651 dashed; */
//   width: 100%;
//   border-radius: 16px;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin: 12px;
//   background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23E42651FF' stroke-width='4' stroke-dasharray='30%2c30' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
// `;
const MyGrid = styled(Grid)`
  justify-content: center;
  /* max-height: 20vh; */

  img {
    border-radius: 16px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
const MyContainer = styled.div`
  width: 100%;
  padding: 32px;
  h2 {
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  display: flex;
  flex-direction: column;
  span {
    display: flex;
    align-self: center;
    justify-content: space-between;
  }
`;
const MyButton = styled.button`
  border-radius: 32px;
  background: ${(props) =>
    props.confirm
      ? "linear-gradient(90deg, #f02f32 0%, #e22357 59.52%, #da1d6c 100%)"
      : "white"};
  border: none;
  color: ${(props) => (props.confirm ? "white" : "#e42651")};
  cursor: pointer;

  padding: 8px 24px;
  text-align: center;
  font-weight: bold;
  align-self: flex-end;
  text-transform: uppercase;
  margin: 16px 8px;
  &:hover {
    box-shadow: 10px 10px 33px 0px rgba(179, 172, 172, 1);
    -webkit-box-shadow: 10px 10px 33px 0px rgba(179, 172, 172, 1);
    -moz-box-shadow: 10px 10px 33px 0px rgba(179, 172, 172, 1);
  }
  &:active {
    background: ${(props) =>
      props.confirm
        ? "linear-gradient(90deg, #ec5659 0%, #e2456f 59.52%, #e05991 100%)"
        : "#cccc"};
  }
`;

const MySelect = styled(Select)`
  border-radius: 8px;
  background: white;
  min-height: 32px;
  width: 100%;
  @media only screen and (min-width: 760px) {
    width: 70%;
  }
  border: ${(props) => (props.error ? "1px solid red" : "1px solid grey")};
`;
const MyTextField = styled(TextField)`
  border-radius: 8px;
  background: white;
  min-height: 32px;
  width: 100%;
  padding: 8px;
  @media only screen and (min-width: 760px) {
    width: 70%;
  }
  border: ${(props) => (props.error ? "1px solid red" : "1px solid grey")};
`;

const MyForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  @media only screen and (min-width: 760px) {
    flex-direction: row;
  }
`;
const MyStack = styled(Stack)`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-weight: bold;
    margin-top: 16px;
    margin-bottom: 8px;
  }

  #stars {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
  }
  @media only screen and (min-width: 760px) {
    width: 50%;
  }
  .rmsc {
    --rmsc-main: #e41652;
  }
  .dropdown-container {
    border-radius: 8px;
    background: white;
    min-height: 32px;
    width: 100%;
    /* padding: 8px; */
    @media only screen and (min-width: 760px) {
      width: 70%;
    }
    border: ${(props) => (props.error ? "1px solid red" : "1px solid grey")};
  }
`;
const MyTextarea = styled.textarea`
  width: 100%;
  border-radius: 8px;
  background: white;
  border: ${(props) => (props.error ? "1px solid red" : "1px solid grey")};
  min-height: 32px;
  padding: 8px;
`;
const MyInput = styled.input`
  border-radius: 8px;
  background: white;
  min-height: 32px;
  width: 100%;
  padding: 8px;
  @media only screen and (min-width: 760px) {
    width: 70%;
  }
  border: ${(props) => (props.error ? "1px solid red" : "1px solid grey")};
`;

const SubGrid = styled(Grid)`
  p {
    color: red;
  }
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
`;
const MyDivider = styled.div`
  height: 4px;
  background-color: black;
  border-radius: 2px;
  width: 20%;
  margin-top: 16px;
`;
export {
  MyDivider,
  MyForm,
  SubGrid,
  MyInput,
  MyTextarea,
  MySelect,
  MyStack,
  MyTextField,
  Banner,
  MyGrid,
  MyButton,
  MyContainer,
};
