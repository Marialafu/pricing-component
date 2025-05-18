import styled from 'styled-components';
import { COLORS } from '../../constants/Color';

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledH1 = styled.h1`
    color: ${COLORS.secondary500};
    text-align: center;
`

export {StyledHeader, StyledH1}