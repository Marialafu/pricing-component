import styled from 'styled-components';
import { COLORS } from '../../styles/Color';
import { FONT_SIZE } from '../../styles/FontSize';

const StyledSwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  padding-left: 2.75rem;
  padding-right: 2.75rem;
`;

const StyledH2 = styled.h2`
  color: ${COLORS.secondary500};
  font-size: ${FONT_SIZE.s};
`;

const StyledCheckbox = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  width: 3.5rem;
  height: 2rem;
  background-image: ${COLORS.primaryGradient};
  border-radius: 3.125rem;
  padding: 0.25rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;
    background-color: ${COLORS.white};
  }
`;

export { StyledSwitchContainer, StyledH2, StyledCheckbox, StyledLabel };
