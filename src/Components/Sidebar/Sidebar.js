import { Grid, Icon, Image } from "semantic-ui-react";
import React, { Fragment, useState } from "react";

import Dispatch from "./Components/Dispatch";
import Safety from "./Components/Safety";
import styled from "styled-components";

const menus = [
  {
    name: "Overview",
    icon: "table",
    component: Dispatch,
    path: "/dispatch",
  },
  {
    name: "Dispatch",
    icon: "truck",
    component: Dispatch,
    path: "/dispatch",
  },
  {
    name: "Drivers",
    icon: "music",
    component: Dispatch,
    path: "/dispatch",
  },
  {
    name: "Inbox",
    icon: "paper plane outline",
    component: Dispatch,
    path: "/dispatch",
  },
  {
    name: "Control room",
    icon: "users",
    component: Dispatch,
    path: "/dispatch",
  },
  {
    name: "Accounting",
    icon: "music",
    component: Dispatch,
    path: "/dispatch",
  },
  {
    name: "Safety",
    icon: "medkit",
    component: Safety,
    path: "/safety",
  },
  {
    name: "Settings",
    icon: "settings",
    component: Dispatch,
    path: "/dispatch",
  },
];

const Wrapper = styled.div`
  height: 100vh;

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
  flex: 1;
`;
const SubApplicationsContainer = styled.div`
  flex: 3;
  border-right-width: 2px;
  border-right-color: #eeeeee;
  border-right-style: solid;
`;

const MenuItem = styled.a`
  padding: 1.5em;
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
  font-size: 1em;
`;
export default ({ history }) => {
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
              history.push(item.path);
            }}
            selected={currentMenu.name === item.name}
            href="#"
          >
            <Icon name={item.icon} />
            <MenuLabel selected={currentMenu.name === item.name}>
              {item.name}
            </MenuLabel>
          </MenuItem>
        ))}
      </ApplicationsContainer>
      <SubApplicationsContainer>
        <currentMenu.component history={history} />
      </SubApplicationsContainer>
    </Wrapper>
  );
};
