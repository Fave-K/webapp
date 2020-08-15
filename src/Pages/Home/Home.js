import React from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

import DispatchTable from "./Components/DispatchTable";

const Wrapper = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fff;
  min-height: 100vh;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

export default function Home() {
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
          <AddDispatchButton>Add dispatch</AddDispatchButton>
        </HeaderContent>
      </HeaderContainer>

      <Content>
        <DispatchTable />
      </Content>
    </Wrapper>
  );
}
