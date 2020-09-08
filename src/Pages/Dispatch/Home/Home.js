import React, { useState } from "react";
import styled from "styled-components";
import { Button, Sidebar, Icon, Ref } from "semantic-ui-react";

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
const AddDispatchButton = styled(Button)`
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

const Content = styled.div`
  padding: 2em 0em;
`;
const DispatchContainer = styled.div`
  padding: 0em 2em;
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
      >
        <FilterDispatchForm
          onSubmit={() => {
            setFilter(false);
          }}
        />
      </Sidebar>
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
      >
        <DispatchDetailsForm
          onSubmit={() => {
            setDispatchDetailsFormVisible(false);
          }}
        />
      </Sidebar>

      <Sidebar.Pusher>
        <Ref innerRef={segmentRef}>
          <Wrapper>
            <Content>
              <HeaderContainer>
                <div>
                  <Header>Dispatches Dashboard</Header>
                </div>

                <HeaderContent>
                  <EarningsContainer>
                    {/* <EarningsTitle>Earnings this week</EarningsTitle> */}
                    <Button attached="left" basic>
                      Earnings this week
                    </Button>
                    <Button attached="right" basic>
                      $82,080.30
                    </Button>
                  </EarningsContainer>
                  <AddDispatchButton
                    onClick={() => {
                      filter && setFilter(false);
                      setDispatchDetailsFormVisible(
                        !dispatchDetailsFormVisible
                      );
                    }}
                  >
                    Add dispatch
                  </AddDispatchButton>
                </HeaderContent>
              </HeaderContainer>
              <DispatchContainer>
                <FilterDispatchButton
                  onClick={() => {
                    dispatchDetailsFormVisible &&
                      setDispatchDetailsFormVisible(false);

                    setFilter(!filter);
                  }}
                  basic
                >
                  <FilterButtonContent>
                    <Icon name="filter" color="#2e5bff" />
                    Filter
                  </FilterButtonContent>
                </FilterDispatchButton>
                <DispatchTable />
              </DispatchContainer>
            </Content>
          </Wrapper>
        </Ref>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
}
