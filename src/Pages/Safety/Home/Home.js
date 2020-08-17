import React, { useState } from "react";
import styled from "styled-components";
import { Button, Sidebar, Icon, Ref, Container } from "semantic-ui-react";

import InspectionBoard from "../Components/InspectionBoard";

const Wrapper = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
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
const EarningsTitle = styled.p`
  padding: 0em 1em;
  &&& {
    font-family: Avenir-Book;
    font-size: 24px;
    margin: 0px;
  }
`;
const AddInspectionButton = styled(Button)`
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
const InspectionBoardContainer = styled.div`
  padding: 0em 2em;
  height: 100%;
`;

export default function Home() {
  const segmentRef = React.useRef();
  let [filter, setFilter] = useState(false);
  let [dispatchDetailsFormVisible, setDispatchDetailsFormVisible] = useState(
    false
  );
  return (
    <Sidebar.Pushable>
      <Sidebar
        animation="scale down"
        icon="labeled"
        inverted
        vertical
        visible={filter}
        width="wide"
        direction="right"
        onHide={() => setFilter(false)}
        target={segmentRef}
      ></Sidebar>
      <Sidebar
        target={segmentRef}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible={dispatchDetailsFormVisible}
        width="very wide"
        direction="right"
        onHide={() => setDispatchDetailsFormVisible(false)}
      ></Sidebar>

      <Sidebar.Pusher>
        <Ref innerRef={segmentRef}>
          <Wrapper>
            <Content fluid>
              <HeaderContainer>
                <div>
                  <Header>Inspection Reminders</Header>
                </div>

                <HeaderContent>
                  <EarningsContainer>
                    <Button attached="left" basic>
                      Inspections due this month
                    </Button>
                    <Button attached="right" basic>
                      7
                    </Button>
                  </EarningsContainer>
                  <AddInspectionButton onClick={() => {}}>
                    Add inspection
                  </AddInspectionButton>
                </HeaderContent>
              </HeaderContainer>
              <InspectionBoardContainer>
                <InspectionBoard />
              </InspectionBoardContainer>
            </Content>
          </Wrapper>
        </Ref>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
}
