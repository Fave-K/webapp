import {
  Button,
  Checkbox,
  Container,
  Dropdown,
  Form,
  Grid,
  Header,
  Icon,
  Image,
  Input,
  Select,
  TextArea,
} from "semantic-ui-react";

import React from "react";
import styled from "styled-components";

const Wrapper = styled(Container)`
  height: 100%;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 2px 0px rgba(179, 179, 179, 1);
  -moz-box-shadow: 0px 0px 2px 0px rgba(179, 179, 179, 1);
  box-shadow: 0px 0px 2px 0px rgba(179, 179, 179, 1);
  display: flex;
  padding: 2em 1em;
`;

const DriverHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

const DriverAvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom-color: #f0f0f0;
  border-bottom-width: 2px;
  border-bottom-style: solid;
`;

const DriverName = styled.p`
  font-family: Avenir-Black;
  font-size: 2em;
  margin: 5px;
`;
const DriverPhone = styled.p`
  font-family: Avenir-Book;
  margin: 2px;
`;

const DriverContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1em;
  color: #2e5bff;
`;

const DriverContent = styled.div`
  padding: 2em;
  flex: 1;
`;

const HorizontalFieldsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const ActiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Field = styled.div`
  padding-bottom: 1em;
  flex: 1;
`;
const Label = styled.p`
  font-family: Avenir-Roman;
  color: #b0bac9;
  text-transform: uppercase;
  margin: 0px;
`;
const Detail = styled.p`
  font-family: Avenir-Roman;
  color: #2e384d;
`;

export default function DriverDetailForm() {
  let item = {
    name: "John Doe",
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    phone: "682-2279-7950",
  };
  return (
    <Wrapper>
      <DriverHeader>
        <DriverAvatarContainer>
          <Image src={item.image} size="small" circular />
          <DriverName>{item.name}</DriverName>
          <DriverPhone>Cell: {item.phone}</DriverPhone>
          <DriverContactContainer>
            <Icon name="rocketchat" size="huge" link />
            <Icon name="write square" size="huge" link />
          </DriverContactContainer>
        </DriverAvatarContainer>
      </DriverHeader>
      <DriverContent>
        <Field>
          <Label>driver status</Label>
          <ActiveContainer>
            <Detail>Active</Detail>
            <Checkbox toggle checked />
          </ActiveContainer>
        </Field>
        <Field>
          <Label>Truck #</Label>
          <Detail>5752</Detail>
        </Field>
        <HorizontalFieldsContainer>
          <Field>
            <Label>Truck Year</Label>
            <Detail>2015</Detail>
          </Field>
          <Field>
            <Label>Truck Make</Label>
            <Detail>Volvo</Detail>
          </Field>
        </HorizontalFieldsContainer>
        <Field>
          <Label>Truck Vin</Label>
          <Detail>1FUJA6CK66LW85753</Detail>
        </Field>
        <HorizontalFieldsContainer>
          <Field>
            <Label>Current trailer #</Label>
            <Detail>KT90095</Detail>
          </Field>
          <Field>
            <Label>Assigned trailer #</Label>
            <Detail>KT90095</Detail>
          </Field>
        </HorizontalFieldsContainer>
        <Field>
          <Label>Trailer Company</Label>
          <Detail>BOWMAN TRAILER</Detail>
        </Field>
        <Form size="small">
          <TextArea placeholder="Notes" />
        </Form>
      </DriverContent>
    </Wrapper>
  );
}
