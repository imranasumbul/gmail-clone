
import MainPage from "./components/main pages/MainPage"
import SentEmailsPage from "./components/main pages/SentEmailsPage"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/sentmails' element={< SentEmailsPage />} />

          {/*<Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/sendmoney' element={<SendMoney />} /> */}
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
