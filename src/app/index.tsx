// import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes, HashRouter as Router } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
// import { CypressHistorySupport } from 'cypress-react-router';

import { theme } from 'theme';

import GlobalStyles from 'theme/globalStyles';

import { ScrollToTop } from 'utils';

import ErrorBoundary from 'components/ErrorBoundary';
import Header from 'components/Header';

import { routes } from '../routes';

function App() {
  return (
    <Router>
      {/* <CypressHistorySupport /> */}
      <ThemeProvider theme={theme}>
        <ErrorBoundary fallback="Something went wrong. Try to reload the page">
          <Header />
          <ScrollToTop />
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
          <GlobalStyles />
        </ErrorBoundary>
      </ThemeProvider>
    </Router>
  );
}

export default App;
