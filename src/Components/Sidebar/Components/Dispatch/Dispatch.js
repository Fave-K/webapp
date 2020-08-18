import React, { useState } from "react";

import { Button } from "semantic-ui-react";
import Operators from "components/Operators";
import styled from "styled-components";

const dispatchMenus = [
  {
    name: "Dispatch status",
    path: "/dispatch",
  },
  {
    name: "Add dispatch",
    path: "/dispatch",
  },
  {
    name: "Pending trips",
    path: "/dispatch",
  },
  {
    name: "Completed trips",
    path: "/dispatch",
  },
  {
    name: "Earnings",
    path: "/dispatch",
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

const AddDispatch = styled.div`
  padding: 1em 2em;
`;
const AddDispatchButton = styled(Button)`
  &&& {
    font-family: Avenir-Roman;
    background-color: #2e5bff;
  }
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
        <AddDispatch>
          <AddDispatchButton fluid primary>
            Add dispatch
          </AddDispatchButton>
        </AddDispatch>
      </DispatchMenusContainer>
      <Operators />
    </Wrapper>
  );
}
