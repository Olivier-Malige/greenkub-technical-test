import './style.css';
import { createGlobalStyle } from 'styled-components';
import { FindNumbers } from './app/containers/FindNumbers';
import CustomThemeProvider from './theme/CustomThemeProvider';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme: { background } }) =>
          background} !important;
        color: ${({ theme: { text } }) => text};
    }
`;

function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <FindNumbers />
    </CustomThemeProvider>
  );
}

export default App;
