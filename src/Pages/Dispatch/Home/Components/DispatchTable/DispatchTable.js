import React from "react";
import { Icon, Label, Menu, Table, Image } from "semantic-ui-react";
import styled from "styled-components";

const CellContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CellText = styled.p`
  text-transform: uppercase;
  color: #787993;
  margin: 0px;
  font-family: Avenir-Black;
`;
const CellTextSmall = styled.p`
  text-transform: uppercase;
  color: #8798ad;
  margin: 0px;
  font-family: Avenir-Roman;
  font-size: small;
`;

const UserCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const userDetails = styled.div``;
const BrokerDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const dispatches = [
  {
    status: "completed",
    color: "green",
    driverName: "Innocent Antonne",
    brokerName: "Blue Grace",
    loadNumber: "BG123456",
    pickupCity: "Adamsville, TN",
    pickupDate: "7/13/2020",
    deliveryCity: "Farmingdale, NY",
    deliveryDate: "7/15/2020",
    rate: 3850,
    grade: "C",
    id: 9992,
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
  },
  {
    status: "in progress",
    color: "yellow",
    driverName: "Innocent Antonne",
    brokerName: "Blue Grace",
    loadNumber: "BG123456",
    pickupCity: "Adamsville, TN",
    pickupDate: "7/13/2020",
    deliveryCity: "Farmingdale, NY",
    deliveryDate: "7/15/2020",
    rate: 3850,
    grade: "C",
    id: 9992,
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
  },
  {
    status: "completed",
    color: "#FBC02D",
    driverName: "Innocent Antonne",
    brokerName: "Blue Grace",
    loadNumber: "BG123456",
    pickupCity: "Adamsville, TN",
    pickupDate: "7/13/2020",
    deliveryCity: "Farmingdale, NY",
    deliveryDate: "7/15/2020",
    rate: 3850,
    grade: "C",
    id: 9992,
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
  },
  {
    status: "completed",
    color: "green",
    driverName: "Innocent Antonne",
    brokerName: "Blue Grace",
    loadNumber: "BG123456",
    pickupCity: "Adamsville, TN",
    pickupDate: "7/13/2020",
    deliveryCity: "Farmingdale, NY",
    deliveryDate: "7/15/2020",
    rate: 3850,
    grade: "C",
    id: 9992,
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
  },
  {
    status: "completed",
    color: "green",
    driverName: "Innocent Antonne",
    brokerName: "Blue Grace",
    loadNumber: "BG123456",
    pickupCity: "Adamsville, TN",
    pickupDate: "7/13/2020",
    deliveryCity: "Farmingdale, NY",
    deliveryDate: "7/15/2020",
    rate: 3850,
    grade: "C",
    id: 9992,
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
  },
  {
    status: "cancelled",
    color: "green",
    driverName: "Innocent Antonne",
    brokerName: "Blue Grace",
    loadNumber: "BG123456",
    pickupCity: "Adamsville, TN",
    pickupDate: "7/13/2020",
    deliveryCity: "Farmingdale, NY",
    deliveryDate: "7/15/2020",
    rate: 3850,
    grade: "C",
    id: 9992,
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
  },
  {
    status: "cancelled",
    color: "green",
    driverName: "Innocent Antonne",
    brokerName: "Blue Grace",
    loadNumber: "BG123456",
    pickupCity: "Adamsville, TN",
    pickupDate: "7/13/2020",
    deliveryCity: "Farmingdale, NY",
    deliveryDate: "7/15/2020",
    rate: 3850,
    grade: "C",
    id: 9992,
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
  },
  {
    status: "cancelled",
    color: "green",
    driverName: "Innocent Antonne",
    brokerName: "Blue Grace",
    loadNumber: "BG123456",
    pickupCity: "Adamsville, TN",
    pickupDate: "7/13/2020",
    deliveryCity: "Farmingdale, NY",
    deliveryDate: "7/15/2020",
    rate: 3850,
    grade: "C",
    id: 9992,
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
  },
  {
    status: "cancelled",
    color: "green",
    driverName: "Innocent Antonne",
    brokerName: "Blue Grace",
    loadNumber: "BG123456",
    pickupCity: "Adamsville, TN",
    pickupDate: "7/13/2020",
    deliveryCity: "Farmingdale, NY",
    deliveryDate: "7/15/2020",
    rate: 3850,
    grade: "C",
    id: 9992,
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
  },
  {
    status: "cancelled",
    color: "green",
    driverName: "Innocent Antonne",
    brokerName: "Blue Grace",
    loadNumber: "BG123456",
    pickupCity: "Adamsville, TN",
    pickupDate: "7/13/2020",
    deliveryCity: "Farmingdale, NY",
    deliveryDate: "7/15/2020",
    rate: 3850,
    grade: "C",
    id: 9992,
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
  },
  {
    status: "cancelled",
    color: "green",
    driverName: "Innocent Antonne",
    brokerName: "Blue Grace",
    loadNumber: "BG123456",
    pickupCity: "Adamsville, TN",
    pickupDate: "7/13/2020",
    deliveryCity: "Farmingdale, NY",
    deliveryDate: "7/15/2020",
    rate: 3850,
    grade: "C",
    id: 9992,
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
  },
  {
    status: "cancelled",
    color: "green",
    driverName: "Innocent Antonne",
    brokerName: "Blue Grace",
    loadNumber: "BG123456",
    pickupCity: "Adamsville, TN",
    pickupDate: "7/13/2020",
    deliveryCity: "Farmingdale, NY",
    deliveryDate: "7/15/2020",
    rate: 3850,
    grade: "C",
    id: 9992,
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
  },
  {
    status: "cancelled",
    color: "green",
    driverName: "Innocent Antonne",
    brokerName: "Blue Grace",
    loadNumber: "BG123456",
    pickupCity: "Adamsville, TN",
    pickupDate: "7/13/2020",
    deliveryCity: "Farmingdale, NY",
    deliveryDate: "7/15/2020",
    rate: 3850,
    grade: "C",
    id: 9992,
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
  },
  {
    status: "cancelled",
    color: "green",
    driverName: "Innocent Antonne",
    brokerName: "Blue Grace",
    loadNumber: "BG123456",
    pickupCity: "Adamsville, TN",
    pickupDate: "7/13/2020",
    deliveryCity: "Farmingdale, NY",
    deliveryDate: "7/15/2020",
    rate: 3850,
    grade: "C",
    id: 9992,
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
  },
];

export default function DispatchTable() {
  return (
    <Table striped basic>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            <CellContent>Status</CellContent>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <CellContent>Details</CellContent>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <CellContent>Load number</CellContent>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <CellContent>Pickup date & city</CellContent>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <CellContent>Final delivery city & date</CellContent>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <CellContent>Rate</CellContent>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {dispatches.map((dispatch, index) => (
          <Table.Row key={index}>
            <Table.Cell>
              <CellContent>
                <CellText>{dispatch.status}</CellText>
                <Label
                  tag
                  color={dispatch.status === "completed" ? "green" : "yellow"}
                >
                  {dispatch.id}
                </Label>
              </CellContent>
            </Table.Cell>
            <Table.Cell>
              <CellContent>
                <UserCell>
                  <Image avatar src={dispatch.image} />
                  <userDetails>
                    <CellText>{dispatch.driverName}</CellText>
                    <BrokerDetails>
                      <CellTextSmall>{dispatch.brokerName}</CellTextSmall>
                      <CellTextSmall>{dispatch.grade}</CellTextSmall>
                    </BrokerDetails>
                  </userDetails>
                </UserCell>
              </CellContent>
            </Table.Cell>
            <Table.Cell>
              <CellContent>
                <CellText>{dispatch.loadNumber}</CellText>
              </CellContent>
            </Table.Cell>
            <Table.Cell>
              <CellContent>
                <CellText>{dispatch.pickupCity}</CellText>
                <CellTextSmall>{dispatch.pickupDate}</CellTextSmall>
              </CellContent>
            </Table.Cell>
            <Table.Cell>
              <CellContent>
                <CellText>{dispatch.deliveryCity}</CellText>
                <CellTextSmall>{dispatch.deliveryDate}</CellTextSmall>
              </CellContent>
            </Table.Cell>
            <Table.Cell>
              <CellContent>
                <CellText>$ {dispatch.rate}</CellText>
              </CellContent>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
