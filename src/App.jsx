
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Data } from './pages/Data'
import { Cart } from './pages/Cart'
import { Order } from './pages/Order'
import { Fail } from './pages/Fail'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/Data' element={<Data/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Order' element={<Order/>}/>
        <Route path='*' element={<Fail/>}/>

        
        
        
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
