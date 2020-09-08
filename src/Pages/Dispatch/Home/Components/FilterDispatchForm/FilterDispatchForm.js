import React from "react";
import {
  Button,
  Checkbox,
  Form,
  Container,
  Header,
  Dropdown,
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
const FilterDispatchForm = ({ onSubmit }) => (
  <Wrapper>
    <Header>FILTER OPTIONS</Header>
    <Form>
      <Form.Field>
        <label>Driver</label>
        <Dropdown
          placeholder="All Drivers"
          fluid
          selection
          options={friendOptions}
        />
      </Form.Field>
      <Form.Field>
        <label>Load status</label>
        <Dropdown
          placeholder="All Statuses"
          fluid
          selection
          options={friendOptions}
        />
      </Form.Field>
      <Form.Field>
        <label>Brokers</label>
        <Dropdown
          placeholder="All Statuses"
          fluid
          selection
          options={friendOptions}
        />
      </Form.Field>
      <Form.Field>
        <label>City</label>
        <Dropdown
          placeholder="All Statuses"
          fluid
          selection
          options={friendOptions}
        />
      </Form.Field>
      <Form.Field>
        <label>Load Number</label>
        <Dropdown
          placeholder="All Statuses"
          fluid
          selection
          options={friendOptions}
        />
      </Form.Field>
      <Form.Field>
        <label>Date</label>
        <Dropdown
          placeholder="All Statuses"
          fluid
          selection
          options={friendOptions}
        />
        <Dropdown
          placeholder="All Statuses"
          fluid
          selection
          options={friendOptions}
        />
      </Form.Field>

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

export default FilterDispatchForm;
