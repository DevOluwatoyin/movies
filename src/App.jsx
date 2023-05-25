import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Popular from './components/Popular';
import Trending from './components/Trending';
import Series from './components/Series';
import Navbar from './components/Navbar';
import MovieDetails from './components/Movie';

const App = () => {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/popular" element={ <Popular /> } />
        <Route path="/trending" element={ <Trending /> } />
        <Route path="/series" element={<Series />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  )
}

export default App;
