import styled from 'styled-components';

const StyledSwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
`;

const StyledSwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${(props) => props.theme.primary};
  }

  &:checked + span:before {
    transform: translateX(20px);
  }
`;

const StyledSwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.secondary};
  transition: 0.4s;
  border-radius: 20px;

  &:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: ${(props) => props.theme.text};
    transition: 0.4s;
    border-radius: 50%;
  }
`;

function SwitchButton({ onChange }: { onChange: () => void }) {
  return (
    <StyledSwitchContainer>
      <StyledSwitchInput type="checkbox" onChange={onChange} />
      <StyledSwitchSlider />
    </StyledSwitchContainer>
  );
}

export default SwitchButton;
