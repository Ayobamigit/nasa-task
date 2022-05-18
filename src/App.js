import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import './App.scss';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <Suspense>
      <Routes>
        <Route  path='/' exact element={<LandingPage />}/>
      </Routes>
    </Suspense>
  );
}

export default App;
