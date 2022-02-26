import { Route, Routes } from 'react-router-dom';

import AuthPage from './components/AuthPage';
import IndexPage from './components/IndexPage';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}
