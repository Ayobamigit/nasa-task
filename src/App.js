import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import './App.scss';
import LandingPage from './pages/LandingPage/LandingPage';
import Movie from './pages/Movie/Movie';

function App() {
  return (
    <Suspense>
      <Routes>
        <Route  path='/' exact element={<LandingPage />}/>
        <Route  path='/:id' exact element={<Movie />}/>
      </Routes>
    </Suspense>
  );
}

export default App;
