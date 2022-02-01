import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
// import makeLiner from "../assets/Items/make-liner.jpg";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile, tablet } from "../responsive";
import { Add, Remove } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
// import axios from "axios";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  ${mobile({ height: "50vh" })}
  ${tablet({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
  ${tablet({ flex: "2", paddingRight: " 5px" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
  line-height: 30px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
  ${mobile({ width: "100%", flexWrap: "wrap" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ marginTop: "2px" })}
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterProduct = styled.span`
  background-color: gray;
  color: white;
  font-family: cursive;
  cursor: pointer;
  height: 35px;
  margin: 0px 5px;
  font-size: 13px;
  ${mobile({ padding: "opx 2px", fontSize: "10px" })}
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f8;
  }
`;

const Product = () => {
  const location = useLocation();
  const id =
    location.pathname.split("/")[location.pathname.split("/").length - 1];
  console.log(
    location.pathname.split("/")[location.pathname.split("/").length - 1]
  );
  const [pro, setPro] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setPro(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);
  const handleQuantity = (type) => {
    if (type === "dec") {
      if (quantity > 1) setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleClick = () => {
    //update Cart
    dispatch(addProduct({ ...pro, quantity, type, size }));
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={pro.img} alt="product.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>{pro.title}</Title>
          <Desc>{pro.desc}</Desc>
          <Price>₹ {pro.price}</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Product:</FilterTitle>
              {console.log(pro.product)}
              {pro.product?.map((p) => (
                <FilterProduct key={p} onClick={() => setType(p)}>
                  {p}
                </FilterProduct>
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize onClick={(e) => setSize(e.target.value)}>
                {pro.size?.map((s) => (
                  <FilterSizeOption key={s} value={s}>
                    {s}
                    {console.log(size)}
                  </FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
export default Product;
