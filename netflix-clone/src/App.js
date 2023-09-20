import './App.css';
import Banner from './components/Banner/Banner';
import MovieList from './components/MovieList/MovieList';
import { Navbar } from './components/Navbar/Navbar';
import { action,comedy,horror,originals } from './utils/urls'; 

function App() {
  return (
    <div className='app'>
    <Navbar/>
    <Banner />
      <MovieList url={originals} title={"Netflix Originals"} />
      <MovieList url={action} title={"Action"} isSmall />
      <MovieList url={comedy} title={"Comedy"} isSmall />
      <MovieList url={horror} title={"Horror"} isSmall />
  </div>
  )
}

export default App;
