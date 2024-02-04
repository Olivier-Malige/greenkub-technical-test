import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.disabled : theme.secondary};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;

  line-height: 1.125rem;
  box-sizing: border-box;
  border-radius: 5px;
  border: ${({ theme }) => `2px solid ${theme.primary}`};

  ::placeholder {
    color: ${({ theme }) => theme.primary};
  }

  :hover {
    border: ${({ theme }) => `10px solid ${theme.primary}`};
  }

  :focus {
    padding: 9px;
    outline: none;
    border: ${({ theme }) => `2px solid ${theme.primary}`};
    box-shadow: ${({ theme }) => ` 0 0 4px 0 ${theme.primary}`};
  }
`;

export const StyledLabel = styled.span`
  font-size: 20px;
`;

export const StyledTitle = styled.h1`
  font-size: 30px;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 100vh;
  margin: auto;
  gap: 40px;
`;

export const StyledNumber = styled.span<{
  color: 'success' | 'warning' | 'error';
}>`
  color: ${({ theme, color }) => theme[color]};
  font-size: 20px;
`;
