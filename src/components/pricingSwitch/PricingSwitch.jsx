import { useState } from 'react';
import {
  StyledCheckbox,
  StyledH2,
  StyledLabel,
  StyledSwitchContainer
} from './PricingSwitchStyles';

const PricingSwitch = () => {
  const [checkbox, setCheckbox] = useState(true);

  return (
    <StyledSwitchContainer>
      <StyledH2>Annually</StyledH2>
      <StyledCheckbox type='checkbox' id='checkbox' />
      <StyledLabel htmlFor='checkbox' />
      <StyledH2>Monthly</StyledH2>
    </StyledSwitchContainer>
  );
};

export default PricingSwitch;
