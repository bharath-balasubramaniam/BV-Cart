import React from "react";
import styled from "styled-components";
import { Search } from "@material-ui/icons";
import bv from "../assets/icon.png";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { mobile, tablet } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })};
  ${tablet({ height: "55px" })};
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items:"center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })};
  ${tablet({ padding: "10px 0px", maxWidth: "10250px" })};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none", fontSize: "0px !important" })};
  ${tablet({ fontSize: "10px" })};
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "2px" })};
  ${tablet({ marginLeft: "2px" })};
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px !important" })};
  ${tablet({ width: "60px" })};
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  text-align: center;
  ${mobile({ justifyContent: "start !important", marginTop: "3px" })};
  ${tablet({ justifyContent: "center", marginTop: "3px" })};
`;
const Logo = styled.img`
  width: 45px;
  height: 45px;
  ${mobile({
    width: "20px !important",
    height: "20px !important",
    paddingLeft: "10px",
    paddingTop: "1px",
  })};
  ${tablet({ width: "30px", height: "30px" })};
`;
const LogoName = styled.h1`
  font-weight: 500;
  padding-left: 12px;
  padding-top: 5px;
  font-family: kalam;
  ${mobile({
    paddingLeft: "2px !important",
    fontSize: "17px !important",
    paddingTop: "1px !important",
  })};
  ${tablet({ paddingLeft: "3px", fontSize: "22px", paddingTop: "3px" })};
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  // ${mobile({ flex: "2", justifyContent: "start !important" })};
  ${tablet({ flex: "2", justifyContent: "end" })};
`;
const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "9px !important", marginLeft: "20px !important" })};
  ${tablet({ fontSize: "12px", marginLeft: "25px" })};
`;
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input></Input>
              <Search style={{ color: "gray", fontSize: "16px" }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo src={bv} alt="logo.png" />
            <LogoName>Cart</LogoName>
          </Center>
          <Right>
            <MenuItems>
              <Link to="/register" style={{ textDecoration: "none" }}>
                REGISTER
              </Link>
            </MenuItems>
            <MenuItems>
              <Link to="/login" style={{ textDecoration: "none" }}>
                SIGN IN
              </Link>
            </MenuItems>
            <Link to="/cart">
              <MenuItems>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItems>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
