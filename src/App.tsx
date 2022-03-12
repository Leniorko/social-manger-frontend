import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import IndexPage from './pages/IndexPage';
import { appTheme } from './utils/theme';

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </ThemeProvider>
  );
}
