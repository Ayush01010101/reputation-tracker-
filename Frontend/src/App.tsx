import { useUser } from '@clerk/clerk-react';
import { SignIn } from '@clerk/clerk-react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import LandingPage from './Pages/LandingPage';
import RegisterBrand from './Components/RegisterBrand';
import BrandDetail from './Components/BrandDetail';
function App() {
  const { isSignedIn } = useUser();
  console.log(isSignedIn)
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/signin' element={<SignIn path='/' routing={'path'} />} />
          <Route path='/' element={!isSignedIn ? <LandingPage /> : <h1 className='text-4xl'>Dashboard</h1>} />
          <Route path='/registerbrand' element={<RegisterBrand />} />
          <Route path='/brand/:id' element={<BrandDetail />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
