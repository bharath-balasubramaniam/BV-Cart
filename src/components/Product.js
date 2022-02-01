import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  padding-bottom: 15px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Title = styled.h3`
  text-align: center;
  color: black;
  position: absolute;
  bottom: 5%;
  left: 10%;
  z-index: 5;
  font-family: work-sans;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Price = styled.h3`
  text-align: center;
  color: gray;
  position: absolute;
  font-family: work-sans;
  bottom: -1%;
  left: 10%;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} alt="product.jpg" />
      <Title>Product: {item.title}</Title>
      <Price>
        Price :
        <strike style={{ paddingRight: "10px" }}> {(item.price * (3 /10)) + item.price}₹ </strike>{" "}
        {item.price}₹
      </Price>
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
