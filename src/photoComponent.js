import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
`

const Header = styled.h1`
    margin-bottom: 400px;
    font-size: 3rem;
    border: 5px solid #FC3D21;
    width: 45%;
    margin: 0 auto;
    padding: 15px;
    border-radius: 10px;
    background-color: #0B3D91;
    color: white;
    margin-bottom: 20px;
`

const Picture = styled.img`
    width: 70%;
    margin: 0 auto;
    margin-top: 30px;
    box-shadow: 10px 10px 8px #888888;
    border-radius: 5px;
`

const Date = styled.h3`
    font-size: 1.4rem;
    margin-bottom: 25px;
`

const Title = styled.h3`
    font-size: 1.8rem;
    border: 5px solid #FC3D21;
    border-radius: 10px;
    background-color: #0B3D91;
    color: white;
    width: 40%;
    margin: 0 auto;
    margin-bottom: 35px;
`

const Info = styled.p`
    font-size: 1.2rem;
    width: 85%;
    margin: 0 auto;
`

const Button = styled.button`
    color: #0B3D91;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #FC3D21;
    border-radius: 3px;
    `

const PhotoComponent = props => {
    return (
        <Container>
            <Header>NASA PHOTO OF THE DAY</Header>
            <Picture src={props.picture} alt="photo" />
            <Date>{props.date}</Date>
            <Title>{props.title}</Title>
            <Info>{props.explanation}</Info>
            <a href="https://www.nasa.gov/">
            <Button >Visit NASA.gov</Button>
            </a>
        </Container>
    )
}

export default PhotoComponent;