import './App.css';
import Signup from './Component/Signup';
import Login from './Component/Login';
import PrivateComponent from './Component/PrivateComponent';
import Nav from './Component/Nav';
import AddJob from './Component/AddJob';
import Footer from './Component/Footer';
import JobList from './Component/Joblist';
import UpdateJob from './Component/UpdateJob';
import Profile from './Component/Profile';
import About from './Component/About';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>

        <Routes>

          <Route element={<PrivateComponent/>}/>
          <Route path = '/home' element={<JobList/>}></Route>
          <Route path='/addJob' element={<AddJob/>}></Route>
          <Route path='/update/:id' element={<UpdateJob/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path = '/about' element={<About/>}></Route>

          <Route path = '/' element={<Signup/>}></Route>
          <Route path='/logout' element={<h1>Log ou From Page</h1>}></Route>
          {/* <Route path='/signup' element={<Signup/>}></Route> */}
          <Route path='/login' element={<Login/>}/>


        </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
