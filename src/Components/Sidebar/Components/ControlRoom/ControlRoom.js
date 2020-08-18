import React, { useState } from "react";

import { Button } from "semantic-ui-react";
import Operators from "components/Drivers";
import styled from "styled-components";

const dispatchMenus = [
  {
    name: "Drivers",
    path: "/control-room",
  },
  {
    name: "Trucks",
    path: "/control-room",
  },
  {
    name: "Trailers",
    path: "/control-room",
  },
  {
    name: "Idle trailers",
    path: "/control-room",
  },
  {
    name: "Applications",
    path: "/control-room",
  },
];

const Wrapper = styled.div``;

const HeaderContainer = styled.div`
  padding: 2em;
`;

const DispatchMenusContainer = styled.div`
  border-bottom-width: 2px;
  border-bottom-color: #eeeeee;
  border-bottom-style: solid;
`;

const MenuItem = styled.a`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => (props.selected ? "#2E5BFF" : "black")};
  background-color: ${(props) => props.selected && "#EAEFFF"};

  &:hover {
    color: black;
    -webkit-transition: background-color 500ms linear;
    -ms-transition: background-color 500ms linear;
    transition: background-color 500ms linear;
  }
`;

const Border = styled.div`
  width: 5px;
  background-color: ${(props) => (props.selected ? "red" : "transparent")};
`;
const MenuLabel = styled.p`
  padding: 1em 2em;
  font-family: Avenir-Roman;

  font-family: ${(props) => (props.selected ? "Avenir-Black" : "Avenir-Roman")};
`;

export default function ControlRoom() {
  let [currentDispatchMenu, setCurrentDispatchMenu] = useState(
    dispatchMenus[0]
  );
  return (
    <Wrapper>
      <HeaderContainer>
        <h1>Control Room</h1>
      </HeaderContainer>
      <DispatchMenusContainer>
        {dispatchMenus.map((item, index) => (
          <MenuItem
            onClick={(e) => {
              e.preventDefault();
              setCurrentDispatchMenu(item);
            }}
            selected={currentDispatchMenu.name === item.name}
            href="#"
          >
            <Border selected={currentDispatchMenu.name === item.name} />
            <MenuLabel selected={currentDispatchMenu.name === item.name}>
              {item.name}
            </MenuLabel>
          </MenuItem>
        ))}
      </DispatchMenusContainer>
      <Operators />
    </Wrapper>
  );
}
