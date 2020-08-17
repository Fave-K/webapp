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
  padding: 2em;
`;

const FilterButton = styled(Button)`
  &&& {
    font-family: Avenir-Roman;
    background-color: #2e5bff;
    color: #fff;
  }
`;

const Field = styled.div`
  padding: 1em 0em;
  border-bottom-color: #f0f0f0;
  border-bottom-width: 2px;
  border-bottom-style: solid;
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
    <Header>EDIT DISPATCH DETAILS</Header>
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
            <Input icon="calendar alternate outline" placeholder="Search..." />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <FieldLabel>Drop-off city</FieldLabel>
            <Input placeholder="Search..." />
          </Form.Field>
          <Form.Field>
            <FieldLabel>Date</FieldLabel>
            <Input icon="calendar alternate outline" placeholder="Search..." />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <FieldLabel>Drop-off city</FieldLabel>
            <Input
              label={{ basic: true, content: "$0.00" }}
              labelPosition="right"
            />
          </Form.Field>
        </Form.Group>
      </Field>
      <Field>
        <Form.Group widths="equal">
          <Form.Field>
            <FieldLabel>Invoice Number</FieldLabel>
            <Dropdown
              placeholder="All Statuses"
              fluid
              selection
              options={friendOptions}
            />
          </Form.Field>
          <Form.Field
            control={Input}
            label="Last name"
            placeholder="Last name"
          />
        </Form.Group>
      </Field>

      <FilterButton primary fluid type="submit" onClick={onSubmit}>
        Filter
      </FilterButton>
      <Button.Group fluid basic>
        <Button basic onClick={onSubmit}>
          Clear all
        </Button>
        <Button.Or text="or" />
        <Button basic onClick={onSubmit}>
          Hide
        </Button>
      </Button.Group>
    </Form>
  </Wrapper>
);

export default DispatchDetailsForm;
