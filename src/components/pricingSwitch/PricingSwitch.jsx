
import {
  StyledCheckbox,
  StyledH2,
  StyledLabel,
  StyledSwitchContainer
} from './PricingSwitchStyles';

const PricingSwitch = ({anually, setAnually}) => {

  return (
    <StyledSwitchContainer>
      <StyledH2>Annually</StyledH2>
      <StyledCheckbox type='checkbox' id='checkbox' 
      onChange={() => setAnually(!anually)}/>
      <StyledLabel htmlFor='checkbox' />
      <StyledH2>Monthly</StyledH2>
    </StyledSwitchContainer>
  );
};

export default PricingSwitch;
