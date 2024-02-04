import { ReactNode, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import SwitchButton from '../app/components/SwithButton';

const StyledContainer = styled.div`
  position: relative;
`;

const StyledSwitchButtonContainer = styled.div`
  position: absolute;
  display: flex;
  top: 10px;
  right: 10px;
  gap: 10px;
  align-items: center;
`;

function CustomThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <StyledContainer>
        <StyledSwitchButtonContainer>
          Light
          <SwitchButton onChange={toggleTheme} />
          Dark
        </StyledSwitchButtonContainer>
        {children}
      </StyledContainer>
    </ThemeProvider>
  );
}

export default CustomThemeProvider;
