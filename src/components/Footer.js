import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import bv from "../assets/icon.png";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${tablet({ flex: 2 })}
`;
const LogoWrapper = styled.div``;
const Logo = styled.img`
  width: 45px;
  height: 45px;
`;
const Desc = styled.p`
  margin: 20px opx;
  text-align: justify;
  font-family: kalam;
`;
const SocialContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
  ${tablet({ flex: "0", display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
  font-family: "work sans";
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
`;
const Payment = styled.img`
  width: 40%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <LogoWrapper>
          <Logo src={bv} alt="logo.png" />
        </LogoWrapper>
        <Desc>
          our teams around India invent on behalf of our customers every day to
          meet their desire for lower prices, better selection, and convenient
          services. One way we guarantee a wide selection of products and
          services for customers is by creating India-specific programs to
          support the thousands of small businesses in India
        </Desc>
        <SocialContainer>
          <SocialIcon color={"darkblue"}>
            <Facebook />
          </SocialIcon>
          <SocialIcon color={"rgb(131, 58, 180)"}>
            <Instagram />
          </SocialIcon>
          <SocialIcon color={"blue"}>
            <Twitter />
          </SocialIcon>
          <SocialIcon color={"red"}>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Skin Care</ListItem>
          <ListItem>Hair Care</ListItem>
          <ListItem>Make up</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          28,Bussy Street, White Town, Puducherry
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +91 9500 58 33 57
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@bv.in
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
