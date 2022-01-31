import React from 'react';
import styled from 'styled-components';
import '../css/fonts.css'

const Container = styled.div`
    height: 40vh;
    width: 100vw;
    background: url(
        "https://images5.alphacoders.com/876/thumbbig-876590.webp") 
        no-repeat fixed;
    background-size: auto;
    background-color: #262d3a;
`

const Title = styled.h1`
    font-family: 'RickAndMorty';
    font-size: 11vh;
    text-align: center;
    color: rgb(204,204,204);
`

const Header = () => {
  return (
    <Container>
        <Title>Rick and Morty</Title>
    </Container>
  )
};

export default Header;
