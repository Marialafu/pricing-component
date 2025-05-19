import styled from 'styled-components';
import { COLORS } from '../../constants/Color';
import { FONT_SIZE } from '../../constants/FontSize';

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0rem;
  }
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  background-color: ${({ title }) =>
    title === 'Professional' ? COLORS.primaryGradient : COLORS.white};
  padding: 1.9375rem 1.8125rem;
  border-radius: 0.625rem;
`;

const StyledTitle = styled.h2`
  color: ${COLORS.secondary500};
  font-size: ${FONT_SIZE.m};
`;

const StyledText = styled.span`
  color: ${COLORS.secondary700};
  font-size: ${FONT_SIZE.xl};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    width: 16.8125rem;
    height: 0.0625rem;
    background-color: ${COLORS.primary200};
  }
`;

const StyledSubtext = styled.span`
  color: ${COLORS.secondary500};
  font-size: ${FONT_SIZE.s};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    width: 16.8125rem;
    height: 0.0625rem;
    background-color: ${COLORS.primary200};
  }
`;

const StyledButton = styled.button`
  color: ${COLORS.white};
  background-image: ${COLORS.primaryGradient};
  font-family: inherit;
  width: 16.8125rem;
  height: 2.75rem;
  border: none;
`;

export {
  CardsContainer,
  StyledSubtext,
  StyledText,
  StyledTitle,
  CardContainer,
  StyledButton
};
