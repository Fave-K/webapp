import {
  Button,
  Checkbox,
  Container,
  Dropdown,
  Form,
  Header,
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
const InspectionDetailsForm = ({ onSubmit }) => (
  <Wrapper>
    <HeaderContainer>
      <Header>EDIT DRIVER DETAILS</Header>
    </HeaderContainer>
    <Content>
      <Form size="small">
        <Field>
          <Form.Group widths="equal">
            <Form.Field>
              <FieldLabel>Driver</FieldLabel>
              <Dropdown
                placeholder="Select driver name"
                fluid
                selection
                options={friendOptions}
              />
            </Form.Field>
            <Form.Field>
              <FieldLabel>Equipment Number</FieldLabel>
              <Dropdown
                placeholder="Enter equipment #"
                fluid
                selection
                options={friendOptions}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
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
              <FieldLabel>Inspector</FieldLabel>
              <Dropdown
                placeholder="Assign inspector"
                fluid
                selection
                options={friendOptions}
              />
            </Form.Field>
          </Form.Group>
        </Field>
        <Field>
          <TextArea placeholder="Notes" />
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

export default InspectionDetailsForm;
