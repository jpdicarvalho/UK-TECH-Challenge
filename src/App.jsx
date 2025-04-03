import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetStarted from './pages/GetStarted';

function App() {

  return (
    <>
      <Router>
        <Routes>

            <Route path="/" element={<GetStarted />} />
      
        </Routes>
      </Router>
    </>
  )
}

export default App
