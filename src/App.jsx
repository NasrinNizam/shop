
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Data } from './pages/Data'
import { Cart } from './pages/Cart'
import { Order } from './pages/Order'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/Data' element={<Data/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Order' element={<Order/>}/>
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
