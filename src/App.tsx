import { Suspense} from 'react';
import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Home from './components/Home';
const RecipeDetails = lazy(() => import('./components/RecipeDetails'));
const App = () => {
  return (
    <BrowserRouter>
     <Header />
     <Suspense fallback={<h1 className='text-center font-medium text-2xl mt-20'>loading...</h1>}>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:id' element={<RecipeDetails/>} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App

