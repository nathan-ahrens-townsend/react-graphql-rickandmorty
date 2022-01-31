import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: none;
  height: 98%;
  width: 15vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  background-color: #24325FFF;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 30px;
  color: #cccccc;
`;

const Body = styled.div``;

const Categories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Category = styled.a`
  font-size: 18px;
  font-weight: 100;
`;

const linkStyle = {
  textDecoration: "none",
  color: "rgb(204, 204, 204)",
  margin: "5px 0px 5px 10px",
  fontSize: "18px",
  fontWeight: "100"
}

const SideNavbar = () => {
  const categories = useSelector((state) => state.categories.value);

  return (
    <Container>
      <Header>
        <Title>Categories</Title>
      </Header>
      <Body>
        <Categories>
            {categories.map((category) => (
              <Link to={`/` + category} style={linkStyle}>
                <Category>{category}</Category>
              </Link>
            ))}
        </Categories>
      </Body>
    </Container>
  );
};

export default SideNavbar;
