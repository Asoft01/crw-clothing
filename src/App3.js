import { Routes, Route, Outlet } from 'react-router-dom';
import Home from "./routes/home/home.component";

const Shop = () => {
  return (
    <h1>I am the shop page</h1>
  )
}
const App = () =>{
  // return <Home />;
  return (
    <Routes>
      {/* <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/> */}

      <Route path='/home' element={<Home/>}>
        <Route path='shop' element={<Shop />}/>
      </Route>
    </Routes>
  )
}

export default App;
