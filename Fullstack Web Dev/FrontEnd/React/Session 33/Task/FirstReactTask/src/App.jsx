import Layout from './components/layout'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
function App() {

  const router = createBrowserRouter(
    [
      {
        path: '',
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: '/about',
            element: <About />
          },
          {
            path: '/portfolio',
            element: <Portfolio />
          },
          {
            path: '/contact',
            element: <Contact />
          },
          {
            path: '*',
            element: <h1>404 NOT FOUND</h1>
          }
        ]
      }
    ]
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
