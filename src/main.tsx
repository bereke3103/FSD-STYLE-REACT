import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, PathRouteProps, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.tsx'
import About from './pages/About/About.tsx'
import NotFound from './pages/NotFound/NotFound.tsx'
import LangProvider from './app/Providers/LangProvider.tsx'



const RoutesInitial: PathRouteProps[] = [
  {path: '/', element: <App/>},
  {path: '/home', element: <Home/>},
  {path: '/about', element: <About/>},
  {path: '*', element: <NotFound/>}
]

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Routes>
      <LangProvider>
        {RoutesInitial.map((item) => (
          <Route path={item.path} element={item.element}/>
        ))}
      </LangProvider>
    </Routes>

    </BrowserRouter>
    
  </React.StrictMode>,
)
