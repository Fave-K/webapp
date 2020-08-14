import React, { useState } from "react";
import styled from "styled-components";

const dispatchMenus = [
  {
    name: "Dispatch status",
  },
  {
    name: "Add dispatch",
  },
  {
    name: "Pending trips",
  },
  {
    name: "Completed trips",
  },
  {
    name: "Earnings",
  },
];

const Wrapper = styled.div``;

const HeaderContainer = styled.div`
  padding: 2em;
`;

const DispatchMenusContainer = styled.div``;

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

export default function Dispatch() {
  let [currentDispatchMenu, setCurrentDispatchMenu] = useState(
    dispatchMenus[0]
  );
  return (
    <Wrapper>
      <HeaderContainer>
        <h1>Dispatch</h1>
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
    </Wrapper>
  );
}
