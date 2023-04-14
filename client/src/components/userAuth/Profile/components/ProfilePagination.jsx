import React, { useState } from "react";
import styled from "styled-components";


function ProfilePagination() {
  const pagination = [
    "History",
    "Favourites",
    "Reservations",
    "Profile",
    "Messages",
  ];
  const [view, setView] = useState("Profile");

  return (
    <React.Fragment>

      <FlexDiv>
        {pagination.map((item) => (
          <SubNavigation
            onClick={() => {
              setView(item);
            }}
            key={item}
            selected={item === view}
          >
            {item}
          </SubNavigation>
        ))}
      </FlexDiv>

    </React.Fragment>
  );
}
export default ProfilePagination;
const SubNavigation = styled.h3`
  cursor: pointer;
  color: ${(props) => (props.selected ? "#e42651" : "black")};
`;
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 16px;
`;
