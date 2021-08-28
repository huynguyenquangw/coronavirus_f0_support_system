import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
`

const CardContainer=styled.div`
    width: 20%;
    max-width: 15rem;

    *{
        text-align: center;
        margin-bottom: 1.5rem;
    }

    img{
        width: 4rem;
    }
`

function Dashboard(props) {
    return (
        <Container>
                        
        </Container>
    )
}

export default Dashboard
