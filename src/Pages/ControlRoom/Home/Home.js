import { Button, Container, Icon, Ref, Sidebar } from "semantic-ui-react";
import React, { useState } from "react";

import DriversGrid from "../Components/DriversGrid";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Header = styled.p`
  &&& {
    font-family: Avenir-Book;
    font-size: 32px;
  }
`;

const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
`;

const EarningsContainer = styled.div`
  padding: 0em 4em;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AddDriverButton = styled(Button)`
  &&& {
    font-family: Avenir-Roman;
    background-color: #2e5bff;
    color: #fff;
  }
`;
const FilterDispatchButton = styled(Button)``;
const FilterButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Avenir-Roman;
  color: #2e5bff;
  background-color: #fff;
`;

const Content = styled(Container)`
  padding: 2em 0em;

  flex: 1;
`;
const DriversGridContainer = styled.div`
  padding: 0em 2em;
`;

export default function Home() {
  const segmentRef = React.useRef();
  let [driverDetailsFormVisible, setDriverDetailsFormVisible] = useState(false);
  return (
    <Sidebar.Pushable>
      <Sidebar
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible={driverDetailsFormVisible}
        width="very wide"
        direction="right"
        onHide={() => setDriverDetailsFormVisible(false)}
        target={segmentRef}
      ></Sidebar>

      <Sidebar.Pusher>
        <Ref innerRef={segmentRef}>
          <Wrapper>
            <Content fluid>
              <HeaderContainer>
                <div>
                  <Header>Active Drivers</Header>
                </div>

                <HeaderContent>
                  <AddDriverButton
                    onClick={() => {
                      setDriverDetailsFormVisible(!driverDetailsFormVisible);
                    }}
                  >
                    Add driver
                  </AddDriverButton>
                </HeaderContent>
              </HeaderContainer>
              <DriversGridContainer>
                <DriversGrid
                  onDriverClick={() => {
                    setDriverDetailsFormVisible(true);
                  }}
                />
              </DriversGridContainer>
            </Content>
          </Wrapper>
        </Ref>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
}
