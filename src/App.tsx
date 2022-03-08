import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import AuthPage from './components/AuthPage';
import IndexPage from './components/IndexPage';

const theme = createTheme({
  palette: {
  },
});

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </ThemeProvider>
  );
}
