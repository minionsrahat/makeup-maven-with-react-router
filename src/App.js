
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from '../src/components/Home/Home';
import Review from '../src/components/Review/Review';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Notfound from './components/NotFound/Notfound';
function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}> </Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>

    </>
  );
}

export default App;
