// App.jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

import Landing from './components/pages/landing';
import Counter from './components/pages/landing/Counter';
import Pokemon from './components/pages/landing/Pokemon';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/landing' element={<Landing />}>
      {/* compose two child routes represetning counter and pokemon */}
      <Route path='counter' element={<Counter />} />
      <Route path='pokemon' element={<Pokemon />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
