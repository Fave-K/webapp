import React, { useState } from "react";
import { Grid, Image, Icon } from "semantic-ui-react";
import styled from "styled-components";

import Dispatch from "./Components/Dispatch";

const menus = [
  {
    name: "Overview",
    icon: "table",
    component: <Dispatch />,
  },
  {
    name: "Dispatch",
    icon: "truck",
    component: <Dispatch />,
  },
  {
    name: "Drivers",
    icon: "music",
    component: <Dispatch />,
  },
  {
    name: "Inbox",
    icon: "paper plane outline",
    component: <Dispatch />,
  },
  {
    name: "People",
    icon: "users",
    component: <Dispatch />,
  },
  {
    name: "Accounting",
    icon: "music",
    component: <Dispatch />,
  },
  {
    name: "Safety",
    icon: "medkit",
    component: <Dispatch />,
  },
  {
    name: "Settings",
    icon: "settings",
    component: <Dispatch />,
  },
];

const Wrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
`;

const ApplicationsContainer = styled.div`
  -webkit-box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  -webkit-transition: -webkit-box-shadow 0.1s ease, -webkit-transform 0.1s ease;
  transition: -webkit-box-shadow 0.1s ease, -webkit-transform 0.1s ease;
  transition: box-shadow 0.1s ease, transform 0.1s ease;
  transition: box-shadow 0.1s ease, transform 0.1s ease,
    -webkit-box-shadow 0.1s ease, -webkit-transform 0.1s ease;
`;
const SubApplicationsContainer = styled.div`
  flex: 2;
`;

const MenuItem = styled.a`
  padding: 1.5em 2em;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => (props.selected ? "#2E5BFF" : "#3d3d3d")};
  background-color: ${(props) => props.selected && "#EAEFFF"};

  &:hover {
    -webkit-transition: background-color 500ms linear;
    -ms-transition: background-color 500ms linear;
    transition: background-color 500ms linear;
  }
`;

const MenuLabel = styled.p`
  font-family: Avenir-Roman;
  padding: 0 1em;
  font-family: ${(props) => (props.selected ? "Avenir-Roman" : "Avenir-Book")};
`;
export default () => {
  let [currentMenu, setCurrentMenu] = useState(menus[0]);
  return (
    <Wrapper>
      <ApplicationsContainer>
        {menus.map((item, index) => (
          <MenuItem
            key={index}
            onClick={(e) => {
              e.preventDefault();
              setCurrentMenu(item);
            }}
            selected={currentMenu.name === item.name}
            href="#"
          >
            <Icon name={item.icon} size="large" />
            <MenuLabel selected={currentMenu.name === item.name}>
              {item.name}
            </MenuLabel>
          </MenuItem>
        ))}
      </ApplicationsContainer>
      <SubApplicationsContainer>
        {currentMenu.component}
      </SubApplicationsContainer>
    </Wrapper>
  );
};
