import React from "react";
import styled from "styled-components";

const OverallContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const TruckPicDiv = styled.div`
  flex: 1;
  background: red;
  height: 100%;
`;
const PageDiv = styled.div`
  background: blue;
  height: 100%;
  flex: 1;
`;

export default function LogInForm() {
  return (
    <OverallContainer>
      <PageDiv> hello World</PageDiv> <TruckPicDiv> </TruckPicDiv>{" "}
    </OverallContainer>
  );
}
