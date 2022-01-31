import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
  background-color: white;
  border-radius: 10px;
  background-color: rgb(204, 204, 204);
  width: 30vw;
  height: 25vh;

  @media screen and (max-width:1500px) {
    width: 45vw;
  }

  @media screen and (max-width:1000px) {
    width: 80vw;
  }

  @media screen and (max-width:560px) {
    height: 30vh;
  }
`;

const Image = styled.img`
  max-width: 40%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  flex: 1;
`;

const linkStyle = {
  textDecoration: "none",
  color: "rgb(36, 40, 47)",
  flex: "1",
  textAlign: "center",
};

const Character = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
  height: 100%;
  justify-content: space-between;
`;

const CharacterName = styled.h2`
  text-align: center;
  margin: 0px 0px 10px 0px;
  font-size: 2rem;
  font-weight: 800;
  border-bottom: 2px solid black;
  padding: 10px 0px 5px 0px;

  @media screen and (max-width:1500px) {
    font-size: 1.5rem;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 100%;
  justify-content: center;
`;

const CharacterDetail = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: left;
  margin: 6px 0px;
`;

const DetailTitle = styled.h3`
  font-weight: 100;
  margin: 0px 5px 0px 0px;
`;

const DetailBody = styled.div`
  font-weight: 600;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
`;

const Status = styled.span`
  height: 0.75rem;
  width: 0.75rem;
  font-size: 1.25rem;
  margin-right: 0.375rem;
  border-radius: 50%;
  background: rgb(214, 61, 46);
  background: ${props => props.status === "Alive" && "rgb(85, 204, 68)"};
  background: ${props => props.status === "unknown" && "rgb(255,255,0)"};
`;

export default function CharactersList() {
  const { error, loading, data } = useCharacters();

  console.log({ error, loading, data });
  if (loading) return <div>spinner</div>;
  if (error) return <div>{error.message}</div>;

  return (
    
    <Container>
      <Header></Header>
      {data.characters.results.map((character) => {
        return (
          <Card>
            <Image src={character.image}></Image>
            <Link style={linkStyle} to={`/${character.id}`}>
              <Character>
                <CharacterName>{character.name}</CharacterName>
                <Details>
                  <CharacterDetail>
                    <DetailTitle>Status:</DetailTitle>
                    <DetailBody>
                      <Status status={character.status}></Status>
                      {character.status}
                    </DetailBody>
                  </CharacterDetail>
                  <CharacterDetail>
                    <DetailTitle>Species:</DetailTitle>
                    <DetailBody>{character.species}</DetailBody>
                  </CharacterDetail>
                  <CharacterDetail>
                    <DetailTitle>Origin:</DetailTitle>
                    <DetailBody>{character.origin.name}</DetailBody>
                  </CharacterDetail>
                  <CharacterDetail>
                    <DetailTitle>Last seen:</DetailTitle>
                    <DetailBody>{character.location.name}</DetailBody>
                  </CharacterDetail>
                </Details>
              </Character>
            </Link>
          </Card>
        );
      })}
    </Container>
  );
}
