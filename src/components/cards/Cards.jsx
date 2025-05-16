import { v4 } from 'uuid'
import {MONTHLY_INFO} from '../../constants/MonthlyInfo'
import {ANUALLY_INFO} from '../../constants/AnuallyInfo'

import { CardContainer, CardsContainer, StyledButton, StyledSubtext, StyledText, StyledTitle } from './CardsStyles'
import { useState } from 'react'

const Cards = ({anually}) => {

    const cardsValues = defineInfoValues(anually)

    return (
        <CardsContainer>

        {cardsValues.map(card => 
            <CardContainer key={v4()}>
                <StyledTitle>{card.title}</StyledTitle>
                <StyledText>$ {card.price}</StyledText>
                <StyledSubtext>{card.storage} Storage</StyledSubtext>
                <StyledSubtext>{card.users} Users Allowed</StyledSubtext>
                <StyledSubtext>Send up to {card.send} GB</StyledSubtext>
                <StyledButton>LEARN MORE</StyledButton>
            </CardContainer>
        )}
        </CardsContainer>
    )

}

const defineInfoValues = (anually) => {
    const defineValues =  anually ? ANUALLY_INFO : MONTHLY_INFO
    console.log(defineValues);
    
    return defineValues
}

export default Cards