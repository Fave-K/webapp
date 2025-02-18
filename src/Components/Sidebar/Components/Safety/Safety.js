import React, { useState } from "react";

import { Button } from "semantic-ui-react";
import Operators from "components/InspectionOperators";
import styled from "styled-components";

const safetyMenus = [
  
  {
    name: "Inspection reminders",
    path: "/safety/",
  },
  {
    name: "Service reminders",
    path: "/safety/services/",
  },
  {
    name: "Maintenance reports",
    path: "/safety/",
  },
  {
    name: "Configure operator settings",
    path: "/safety/",
  },
];

const Wrapper = styled.div``;

const HeaderContainer = styled.div`
  padding: 2em;
`;

const SafetyMenusContainer = styled.div`
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

const AddInspection = styled.div`
  padding: 1em 2em;
`;
const AddInspectionButton = styled(Button)`
  &&& {
    font-family: Avenir-Roman;
    background-color: #2e5bff;
  }
`;

export default function Safety({ history }) {
  let [currentSafetyMenu, setCurrentSafetyMenu] = useState(safetyMenus[0]);
  return (
    <Wrapper>
      <HeaderContainer>
        <h1>Safety</h1>
        <p>Safety & inspection options</p>
      </HeaderContainer>
      <SafetyMenusContainer>
        {safetyMenus.map((item, index) => (
          <MenuItem
            onClick={(e) => {
              e.preventDefault();
              setCurrentSafetyMenu(item);
              history.push(item.path);
            }}
            selected={currentSafetyMenu.name === item.name}
            href="#"
          >
            <Border selected={currentSafetyMenu.name === item.name} />
            <MenuLabel selected={currentSafetyMenu.name === item.name}>
              {item.name}
            </MenuLabel>
          </MenuItem>
        ))}
        <AddInspection>
          <AddInspectionButton fluid primary>
            Add inspection
          </AddInspectionButton>
        </AddInspection>
      </SafetyMenusContainer>
      <Operators />
    </Wrapper>
  );
}
