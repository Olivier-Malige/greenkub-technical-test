import ReactDOM from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import { GlobalStyle } from './styles/global-styles';
import { configureAppStore } from './store/configureStore';
import App from './App';

const store = configureAppStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <HelmetProvider>
        <StrictMode>
          <Helmet titleTemplate="%s - Test Technique" defaultTitle="Test Technique" />
              <App />
          <GlobalStyle />
        </StrictMode>
    </HelmetProvider>
  </Provider>
);
