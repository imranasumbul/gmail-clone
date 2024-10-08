
import MainPage from "./components/main pages/MainPage"
import SentEmailsPage from "./components/main pages/SentEmailsPage"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InboxEmailsPage from "./components/main pages/InboxEmailsPage"
import { useMemo } from "react";
function App() {
  localStorage.setItem("email", "86e46147-26e6-4716-a59f-aa947fa0e1e4@mailslurp.net");
  useMemo(() => {
    alert("You are logged in as testimrana@gmail.com. As of now, you cannot log in to other accounts.");
  }, [])

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/sentmails' element={< SentEmailsPage />} />
          <Route path='/inboxmails' element={< InboxEmailsPage />} />

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
