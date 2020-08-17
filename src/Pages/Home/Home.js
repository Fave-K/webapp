import React, { useState } from "react";
import styled from "styled-components";
import { Button, Sidebar } from "semantic-ui-react";

import DispatchTable from "./Components/DispatchTable";
import FilterDispatchForm from "./Components/FilterDispatchForm";
import DispatchDetailsForm from "./Components/DispatchDetailsForm";

const Wrapper = styled.div`
  background-color: #fff;
  min-height: 100vh;
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
`;
const EarningsTitle = styled.p`
  &&& {
    font-family: Avenir-Book;
    font-size: 24px;
  }
`;
const AddDispatchButton = styled(Button)`
  &&& {
    font-family: Avenir-Roman;
    background-color: #2e5bff;
    color: #fff;
  }
`;

const Content = styled.div`
  padding: 2em 0em;
`;
const DispatchContainer = styled.div`
  padding: 0em 2em;
`;

export default function Home() {
  let [filter, setFilter] = useState(false);
  let [dispatchDetailsFormVisible, setDispatchDetailsFormVisible] = useState(
    true
  );
  return (
    <Wrapper>
      <HeaderContainer>
        <div>
          <Header>Dispatches Dashboard</Header>
        </div>

        <HeaderContent>
          <EarningsContainer>
            <EarningsTitle>Earnings this week</EarningsTitle>
            <Button attached="left" basic>
              All dispatches
            </Button>
            <Button attached="right" basic>
              $82,080.30
            </Button>
          </EarningsContainer>
          <AddDispatchButton
            onClick={() => {
              setDispatchDetailsFormVisible(true);
            }}
          >
            Add dispatch
          </AddDispatchButton>
        </HeaderContent>
      </HeaderContainer>

      <Content>
        <Sidebar.Pushable>
          <Sidebar
            animation="scale down"
            icon="labeled"
            inverted
            vertical
            visible={filter}
            width="wide"
            direction="right"
          >
            <FilterDispatchForm
              onSubmit={() => {
                setFilter(false);
              }}
            />
          </Sidebar>
          <Sidebar
            animation="overlay"
            icon="labeled"
            inverted
            vertical
            visible={dispatchDetailsFormVisible}
            width="very wide"
            direction="right"
          >
            <DispatchDetailsForm
              onSubmit={() => {
                setDispatchDetailsFormVisible(false);
              }}
            />
          </Sidebar>

          <Sidebar.Pusher>
            <DispatchContainer>
              <DispatchTable />
            </DispatchContainer>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Content>
    </Wrapper>
  );
}
