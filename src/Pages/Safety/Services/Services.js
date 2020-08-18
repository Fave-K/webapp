import { Button, Container, Icon, Ref, Sidebar } from "semantic-ui-react";
import React, { useState } from "react";

import InspectionBoard from "../Components/ServicesBoard";
import InspectionDetailsForm from "../Components/InspectionDetailsForm";
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

const Content = styled(Container)`
  padding: 2em 0em;

  flex: 1;
`;
const InspectionBoardContainer = styled.div`
  height: 100%;
`;

export default function Services() {
  const segmentRef = React.useRef();
  let [serviceDetailsFormVisible, setServiceDetailsFormVisible] = useState(
    false
  );
  return (
    <Sidebar.Pushable>
      <Sidebar
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible={serviceDetailsFormVisible}
        width="very wide"
        direction="right"
        onHide={() => setServiceDetailsFormVisible(false)}
        target={segmentRef}
      >
        <InspectionDetailsForm
          onSubmit={() => {
            setServiceDetailsFormVisible(false);
          }}
        />
      </Sidebar>

      <Sidebar.Pusher>
        <Ref innerRef={segmentRef}>
          <Wrapper>
            <Content fluid>
              <HeaderContainer>
                <div>
                  <Header>Service Reminders</Header>
                </div>

                <HeaderContent>
                  <EarningsContainer>
                    <Button attached="left" basic>
                      Services due this month
                    </Button>
                    <Button attached="right" basic>
                      7
                    </Button>
                  </EarningsContainer>
                  <AddInspectionButton
                    onClick={() => {
                      setServiceDetailsFormVisible(!serviceDetailsFormVisible);
                    }}
                  >
                    Add service
                  </AddInspectionButton>
                </HeaderContent>
              </HeaderContainer>
              <InspectionBoardContainer>
                <InspectionBoard
                  onTaskClick={() => {
                    setServiceDetailsFormVisible(true);
                  }}
                />
              </InspectionBoardContainer>
            </Content>
          </Wrapper>
        </Ref>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
}
