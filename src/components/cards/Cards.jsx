import { v4 } from 'uuid'
import {MONTHLY_INFO} from '../../constants/MonthlyInfo'
import {ANUALLY_INFO} from '../../constants/AnuallyInfo'

import { CardContainer, CardsContainer, RemarkedButton, RemarkedCardContainer, RemarkedSubtext, RemarkedText, RemarkedTitle, StyledButton, StyledSubtext, StyledText, StyledTitle } from './CardsStyles'
import { useState } from 'react'

const Cards = ({anually}) => {

    const cardsValues = defineInfoValues(anually)

    return (
        <CardsContainer>

        {cardsValues.map(card => 

        {if (card.title !== 'Professional'){
            return <CardContainer key={v4()}>
                <StyledTitle>{card.title}</StyledTitle>
                <StyledText>$ {card.price}</StyledText>
                <StyledSubtext>{card.storage} Storage</StyledSubtext>
                <StyledSubtext>{card.users} Users Allowed</StyledSubtext>
                <StyledSubtext>Send up to {card.send} GB</StyledSubtext>
                <StyledButton>LEARN MORE</StyledButton>
            </CardContainer>
        } else {
            return <RemarkedCardContainer key={v4()}>
                <RemarkedTitle>{card.title}</RemarkedTitle>
                <RemarkedText>$ {card.price}</RemarkedText>
                <RemarkedSubtext>{card.storage} Storage</RemarkedSubtext>
                <RemarkedSubtext>{card.users} Users Allowed</RemarkedSubtext>
                <RemarkedSubtext>Send up to {card.send} GB</RemarkedSubtext>
                <RemarkedButton>LEARN MORE</RemarkedButton>
            </RemarkedCardContainer>
        }}
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