import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');  
  const [alert, setAlert] = useState(null);  

  const toggleMode = () => {
    if(mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Dark mode has been enabled');
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Light mode has been enabled', 'success');
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(()=> {
      setAlert(null);
    }, 3000);
  }

  return (
    <>
      <Router>
        <Navbar title="My App" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;