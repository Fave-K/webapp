import React from "react";
import {
  Button,
  Checkbox,
  Form,
  Container,
  Header,
  Dropdown,
  Input,
  Select,
} from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled(Container)`
  height: 100%;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 2px 0px rgba(179, 179, 179, 1);
  -moz-box-shadow: 0px 0px 2px 0px rgba(179, 179, 179, 1);
  box-shadow: 0px 0px 2px 0px rgba(179, 179, 179, 1);
  display: flex;
`;

const HeaderContainer = styled.div`
  padding: 1em 2em;
`;

const Content = styled.div`
  padding: 2em;
  flex: 1;
`;

const SaveButton = styled(Button)`
  &&& {
    font-family: Avenir-Roman;
    background-color: #2e5bff;
    color: #fff;
    padding-left: 3em;
    padding-right: 3em;
  }
`;

const Field = styled.div`
  padding: 1em 0em;
  border-bottom-color: #f0f0f0;
  border-bottom-width: 2px;
  border-bottom-style: solid;
`;
const Footer = styled.div`
  padding: 1em 2em;
  border-top-color: #f0f0f0;
  border-top-width: 2px;
  border-top-style: solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SecondaryButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const FieldHeader = styled.label`
  && {
    font-family: Avenir-Book;
    text-transform: uppercase;
    color: #8798ad;
  }
`;
const FieldLabel = styled.label`
  && {
    font-family: Avenir-Book;
    color: #2e384d;
  }
`;

const friendOptions = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    },
  },
  {
    key: "Elliot Fu",
    text: "Elliot Fu",
    value: "Elliot Fu",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    },
  },
  {
    key: "Stevie Feliciano",
    text: "Stevie Feliciano",
    value: "Stevie Feliciano",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    },
  },
  {
    key: "Christian",
    text: "Christian",
    value: "Christian",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    },
  },
  {
    key: "Matt",
    text: "Matt",
    value: "Matt",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    },
  },
  {
    key: "Justen Kitsune",
    text: "Justen Kitsune",
    value: "Justen Kitsune",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    },
  },
];
const DispatchDetailsForm = ({ onSubmit }) => (
  <Wrapper>
    <HeaderContainer>
      <Header>EDIT DISPATCH DETAILS</Header>
    </HeaderContainer>
    <Content>
      <Form size="small">
        <Field>
          <Form.Group widths="equal">
            <Form.Field>
              <FieldLabel>Invoice Number</FieldLabel>
              <Dropdown
                placeholder="invoice # or status"
                fluid
                selection
                options={friendOptions}
              />
            </Form.Field>
            <Form.Field>
              <FieldLabel>Driver</FieldLabel>
              <Dropdown
                placeholder="Select driver name"
                fluid
                selection
                options={friendOptions}
              />
            </Form.Field>
          </Form.Group>
        </Field>
        <Field>
          <FieldHeader>edit broker details</FieldHeader>
          <Form.Group widths="equal">
            <Form.Field>
              <FieldLabel>Broker Details</FieldLabel>
              <Dropdown
                placeholder="Enter broker name"
                fluid
                selection
                options={friendOptions}
              />
            </Form.Field>
            <Form.Field>
              <FieldLabel>MC Number</FieldLabel>
              <Dropdown
                placeholder="Enter MC number"
                fluid
                selection
                options={friendOptions}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <FieldLabel>RTS Pro Rating</FieldLabel>
              <input placeholder="RTS Pro rating" />
            </Form.Field>
          </Form.Group>
        </Field>
        <Field>
          <FieldHeader>edit trip details</FieldHeader>

          <Form.Group widths="equal">
            <Form.Field>
              <FieldLabel>Pickup city</FieldLabel>
              <Input placeholder="Search..." />
            </Form.Field>
            <Form.Field>
              <FieldLabel>MC Number</FieldLabel>
              <Input
                icon="calendar alternate outline"
                placeholder="Search..."
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <FieldLabel>Drop-off city</FieldLabel>
              <Input placeholder="Search..." />
            </Form.Field>
            <Form.Field>
              <FieldLabel>Date</FieldLabel>
              <Input
                icon="calendar alternate outline"
                placeholder="Search..."
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <FieldLabel>Trip rate</FieldLabel>
              <Input
                label={{ basic: true, content: "$0.00" }}
                labelPosition="right"
              />
            </Form.Field>
          </Form.Group>
        </Field>
      </Form>
    </Content>
    <Footer>
      <SecondaryButtonsContainer>
        <Button.Group basic size="small">
          <Button icon="trash" content="delete" onClick={onSubmit} />
          <Button icon="copy" content="copy" onClick={onSubmit} />
          <Button icon="cancel" content="cancel" onClick={onSubmit} />
        </Button.Group>
      </SecondaryButtonsContainer>
      <SaveButton primary type="submit" onClick={onSubmit}>
        Save
      </SaveButton>
    </Footer>
  </Wrapper>
);

export default DispatchDetailsForm;
