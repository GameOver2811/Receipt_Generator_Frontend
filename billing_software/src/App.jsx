import './App.css'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard'
import GeneralReceipt from './components/GeneralReceipt'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ReceiptProvider } from './context/ReceiptHistoryContext'
import { ReceiptContextProvider } from './context/ReceiptContext'
import { UserContextProvider } from './context/UserContext'
import {Toaster} from 'react-hot-toast'
import MainDashboard from './pages/MainDashboard'

function App() {

  return (
    <Router>
      <ReceiptProvider>
        <ReceiptContextProvider>
          <UserContextProvider>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/dashboard/user-profile" element={<MainDashboard />} />
              <Route path="/dashboard" element={<MainDashboard />} />
              <Route path="/dashboard/general" element={<Dashboard />} />
              <Route path="/dashboard/rough-receipt" element={<MainDashboard />} />
              <Route path="/dashboard/g/preview" element={<GeneralReceipt />} />
              <Route path="/dashboard/rough-receipt/preview" element={<MainDashboard />} />
              <Route path="/dashboard/receipt-history" element={<MainDashboard />} />
              <Route path="/dashboard/inventory" element={<MainDashboard />} />
            </Routes>
            <Toaster />
          </UserContextProvider>
        </ReceiptContextProvider>
      </ReceiptProvider>
    </Router>
  )
}

export default App
