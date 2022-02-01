import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ height: "25vh !important" })}
  ${tablet({ height: "30vh" })}
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "50px" })}
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
  ${tablet({ fontSize: "20px" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  backround-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ textAlign: "80%", border: "none" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  font-size: 18px;
  padding-left: 20px;
  ${mobile({ paddingLeft: "0px", position: "relative", top: "-10px" })}
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  ${mobile({ position: "relative", top: "-10px" })}
`;
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
