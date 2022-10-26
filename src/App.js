import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Phones from './components/Phones/Phones';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/home',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/phones')

        },
        {
          path: '/phone/:phoneId',
          element: <Phones></Phones>,
          loader: ({ params }) => fetch(`http://localhost:5000/phone/${params.phoneId}`)
        }
      ]
    }

  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
