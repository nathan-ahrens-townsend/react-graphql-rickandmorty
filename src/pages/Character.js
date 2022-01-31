import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useCharacter } from '../hooks/useCharacter';

const Container = styled.div`
    width: 80vw;
    height: 80vh;
    display: flex;
    border-radius: 15px;
    border: 1px solid white;
`

export default function Character() {

    const { id } = useParams();
    const { data, error, loading } = useCharacter(id)

    if (error) return <div>Something went wrong</div>
    if (loading) return <div>Loading....</div> 

  return (
    <Container>
        <img src={data.character.image} width={750} height={750} />
        <div>
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            <div>
                {data.character.episode.map(episode => {
                    return <div>{episode.name} - <b>{episode.episode}</b></div>
                })}
            </div>
        </div>
    </Container>
  )
}
