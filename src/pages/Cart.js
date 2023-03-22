import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile, tablet } from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requestMethods";
// import axios from "axios";
import { useHistory } from "react-router-dom";

// const KEY = process.env.REACT_APP_STRIPE;
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
  ${tablet({ padding: "10px" })}
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 300;
`;
const Top = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  ${tablet({ padding: "12px" })}
`;
const TopButton = styled.button`
font-weight:600;
cursor:pointer;
padding:10px;
border: ${(props) => props.type === "filled" && "none"};
color: ${(props) => props.type === "filled" && "white"};
background-color:${(props) =>
  props.type === "filled" ? "black" : "transparent"};
}
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "Column" })}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
  ${mobile({ width: "100px" })}
  ${tablet({ width: "100px" })}
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const FilterProduct = styled.span`
  background-color: gray;
  color: white;
  font-family: cursive;
  cursor: pointer;
  height: 20px;
  width: 100px;
  margin: 0px 5px;
  font-size: 13px;
  ${mobile({ padding: "opx 2px", fontSize: "10px" })}
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px", fontSize: "20px !important" })}
  ${tablet({ fontSize: "20px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px", fontSize: "25px  !important" })}
  ${tablet({ fontSize: "25px" })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
  ${tablet({ fontSize: "20px" })}
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const quantity = useSelector((state) => state.cart.quantity);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  console.log(history);
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        console.log(stripeToken.id, cart.total * 100);
        const res = await userRequest.post(
          "https://bv-cart.onrender.com/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 6000,
          }
        );
        console.log(res);
        // history.push("/success", { stripeData: res.data, products: cart });
        history.push("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch {}
    };
    stripeToken && makeRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stripeToken, cart.total, history]);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick={() => history.push("/")}>
            CONTINUE SHOPPING
          </TopButton>
          <TopTexts>
            <TopText>Shopping Bag({quantity})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product, index) => (
              <>
                <Product key={product.title}>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>
                        <b>Product:</b>
                        {product.title}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b>
                        {product._id}
                      </ProductId>
                      <FilterProduct>{product.type} </FilterProduct>
                      <ProductSize>
                        <b>Size:</b>
                        {product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>
                      ₹ {product.price * product.quantity}
                    </ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr />
              </>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₹ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₹ 60</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>₹ - 60</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₹ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Bv Cart"
              image="https://raw.githubusercontent.com/bharath-balasubramaniam/BV-Chat-MERN/main/src/components/icon.png"
              billingAddress
              shippingAddress
              description={`Your total is  ₹${cart.total}`}
              amount={cart.total * 100}
              currency="INR"
              token={onToken}
              stripeKey={
                "pk_test_51KMbPlSCO7Z9OxRQm6Ig16gJje2Rxm4D16e50wPuXHIeMRirQDuHRgVPhsfGp3PK5pfiMDDwrVcMvxW5JabK6eP000HaxixqT5"
              }
            >
              <SummaryButton>CHECKOUT NOW</SummaryButton>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
