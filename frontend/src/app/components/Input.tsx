import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  `
 const StyledContainer = styled.input``
 const StyledLabel = styled.p``
const StyledError = styled.p``


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

function Input({label, error, ...inputProps}: InputProps, ref: React.ForwardedRef<HTMLInputElement>) {

  return (
    <StyledContainer>
      {label ? <StyledLabel>{label}</StyledLabel> : null}
      <StyledInput
        ref={ref}
        {...inputProps}
      />
      {error ? <StyledError>{error}</StyledError> : null}
    </StyledContainer>
  );
}


export default React.forwardRef(Input)
