import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import {Home} from './pages/Home';
import {Blog} from './pages/Blog';
import {About} from './pages/About';
import {NotFound} from './pages/NotFound';

const App = () => {
  return (
      <>
        <header>
          <Link to="/">home</Link>
          <Link to="/posts">blog</Link>
          <Link to="/about">about</Link>
        </header>
          <div>
              <h1>let startt it</h1>
          </div>
          <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/posts'} element={<Blog />} />
              <Route path={'/about'} element={<About />} />
              <Route path={'*'} element={<NotFound />} />
          </Routes>
      </>
  );
}

export default App;
