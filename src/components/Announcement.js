import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 25px;
  text-align: center;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcement = () => {
  return <Container>Super deal Free Gift on orders over ₹500</Container>;
};

export default Announcement;
