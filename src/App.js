import { Routes, Route, Navigate } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import Header from './components/Header';

import Index from './pages/Index';
import Search from './pages/Search';

import './App.css';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container
        component="main"
        maxWidth="md"
        sx={{
          mt: '6em',
          mb: '6em',
        }}
      >
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/search/:keyword" element={<Search/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
