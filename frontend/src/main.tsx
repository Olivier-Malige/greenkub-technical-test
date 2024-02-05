import ReactDOM from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import { GlobalStyle } from './styles/global-styles';
import { configureAppStore } from './store/configureStore';
import App from './App';
import CustomThemeProvider from './theme/CustomThemeProvider';

const store = configureAppStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <HelmetProvider>
      <StrictMode>
        <CustomThemeProvider>
          <Helmet
            titleTemplate="%s - Test Technique"
            defaultTitle="Test Technique"
          />
          <App />
          <GlobalStyle />
        </CustomThemeProvider>
      </StrictMode>
    </HelmetProvider>
  </Provider>
);
