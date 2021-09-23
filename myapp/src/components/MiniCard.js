import React from 'react';
import styled from 'styled-components';
import Search from '../img/search.png';

const Container = styled.div`
    width: 100px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
`;

const Image = styled.img`
    width: 20px;
`;

const Text = styled.span`
    margin-top: 10px;
    text-align: center;
`;


const MiniCard = (texto) => {
    return (
        <Container>
            <Image src={Search}></Image>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
        </Container>
    )
}

export default MiniCard
