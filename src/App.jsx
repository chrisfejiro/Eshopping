import './App.css'
import Header from "./Components/Header";
import Home from "./Components/Home"
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='App'>
      <Header />
        <Routes>
           <Route exact path="/" element= {<Home />}/>
            <Route exact path='/checkout' element= {<Checkout/>} />
            <Route exact path='/login' element= {<Login/>} />
           </Routes>
      
      
      </div>
     
    </>
  )
}

export default App
