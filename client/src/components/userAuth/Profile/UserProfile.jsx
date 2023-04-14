import React from "react";
import { useSelector } from 'react-redux'
import styled from "styled-components";
import { useState } from "react";
//
import ExperiencCard from "./components/ExperiencCard";
import { MyButton } from "./components/UserCard";
import BioCard from "./components/BioCard";
//Mui Imports
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ChatBubbleOutlineOutlined from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Divider, Card, Link } from "@mui/material";
import {  Avatar } from "@material-ui/core";

//
import Layout from '../../shared/layout'
import MetaData from '../../shared/metaData'
import Loader from '../../shared/Loader/loader'
//
import moment from 'moment'

const UserProfile = () => {
  const { user, loading } = useSelector(state => state.auth);

  const [value, setValue] = useState(0);
  const [more, setMore] = useState(false);
  const toggleTestimonials = () => {
    setMore(!more);
  };

  var role = ""
  if(user.role === "user") {
    role = "Adventurer" ;
  }else {
    role = user.role;
  }
  return (
    <React.Fragment>
<Layout>

{loading ? <Loader /> : (
    <React.Fragment>
         <MetaData title={'Your Profile'} />
         <div style={{marginTop: "5rem"}}>
  
</div>
    <MyContainer>
      <ResponsiveDiv>
        <Left>
          <img
            src={user.avatar.url}
            alt="profile"
          />
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="Verified"
              style={{color:"black"}}
              icon={<CheckCircleOutlineOutlinedIcon sx={{color: "#e42651"}}/>}
            />
            <BottomNavigationAction 
            style={{color:"black"}}
            label="Favorites" 
            icon={<FavoriteIcon sx={{color: "#e42651"}}/>} />
            <BottomNavigationAction
              label="Comments"
              style={{color:"black"}}
              icon={<ChatBubbleOutlineOutlinedIcon sx={{color: "#e42651"}} />}
            />
          </BottomNavigation>
          <Divider />
          <p>{user.name} Confirmation effectuee</p>
          <MyCard>
            <span>
              <CheckCircleOutlineOutlinedIcon sx={{color: "#e42651"}}/>
              <p style={{color:"black"}}> Identity</p>
            </span>
            <span>
              <CheckCircleOutlineOutlinedIcon sx={{color: "#e42651"}}/>
              <p style={{color:"black"}}>Email</p>
            </span>
            <span>
              <CheckCircleOutlineOutlinedIcon sx={{color: "#e42651"}}/>
              <p style={{color:"black"}}>Phone number</p>
            </span>
          </MyCard>
          <MyCard>
            <p>
              <Link style={{color:"#e42651"}}>Learn more</Link> on how confirming account information
              helps keep the LIVMO community safe .
            </p>
          </MyCard>
        </Left>
        <Right>
          <div>
            <h2 style={{ color: "#e42651" }}>{user.name} </h2>
            <h5>{role}</h5>
            <h6>Member since {moment(user.createdAt).format('LL')}</h6>
            <h6>Lives in {user.country}</h6>
          </div>
          <BioCard />
          <h2>Lived Experiences</h2>
          <ExperiencCard />
          <span>
            <MyButton>
              <FavoriteIcon />
              23 Favorites
            </MyButton>
            <MyButton>
              <ChatBubbleOutlineOutlined />
              22 Comments
            </MyButton>
          </span>
          <CommentCard>
      <span>
      <Avatar alt="profile photo" src={user.avatar.url} />
      </span>

      <div>
        <h3>{user.fname} {user.lname}</h3>
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
    </CommentCard>
          {more && (
             
            <React.Fragment>
         <CommentCard>
      <span>
      <Avatar alt="profile photo" src={user.avatar.url} />
      </span>

      <div>
        <h3>{user.fname} {user.lname}</h3>
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
    </CommentCard>
            </React.Fragment>
          
          )}
          <MyButton onClick={toggleTestimonials}>
            Show {more ? "less" : "more"}
          </MyButton>
        </Right>


      </ResponsiveDiv>
    </MyContainer >
    </React.Fragment>
    )}    
<div style={{marginTop: "65rem"}}>

</div>
</Layout >
    </React.Fragment>


  );
}
export default UserProfile;

const MyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const ResponsiveDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Right = styled.div`
  padding: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    display: flex;
  }
  @media only screen and (min-width: 768px) {
    width: 60%;
    position: absolute;
    right: 0;
    align-items: flex-start;
  }
`;
const Left = styled.div`
  padding: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 128px;
    height: 128px;
    border-radius: 100%;
    object-fit: cover;
  }
  span {
    display: flex;
  }
  @media only screen and (min-width: 768px) {
    width: 30%;
    position: absolute;
    left: 0;
  }
`;
const MyCard = styled(Card)`
  padding: 16px;
  margin: 16px 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  span {
    margin: 16px 0;
  }
`;
const CommentCard = styled(Card)`
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
