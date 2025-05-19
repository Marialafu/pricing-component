import { v4 } from 'uuid';
import { MONTHLY_INFO } from '../../constants/MonthlyInfo';
import { ANUALLY_INFO } from '../../constants/AnuallyInfo';

import {
  CardContainer,
  CardsContainer,
  StyledButton,
  StyledSubtext,
  StyledText,
  StyledTitle
} from './CardsStyles';

const Cards = ({ anually }) => {
  const cardsValues = defineInfoValues(anually);

  return (
    <CardsContainer>
      {cardsValues.map(card => {
        return (
          <CardContainer key={v4()} plan={card.title}>
            <StyledTitle plan={card.title}>{card.title}</StyledTitle>
            <StyledText plan={card.title}>$ {card.price}</StyledText>
            <StyledSubtext plan={card.title}>
              {card.storage} Storage
            </StyledSubtext>
            <StyledSubtext plan={card.title}>
              {card.users} Users Allowed
            </StyledSubtext>
            <StyledSubtext plan={card.title}>
              Send up to {card.send} GB
            </StyledSubtext>
            <StyledButton plan={card.title}>LEARN MORE</StyledButton>
          </CardContainer>
        );
      })}
    </CardsContainer>
  );
};

const defineInfoValues = anually => {
  const defineValues = anually ? ANUALLY_INFO : MONTHLY_INFO;
  console.log(defineValues);

  return defineValues;
};

export default Cards;
