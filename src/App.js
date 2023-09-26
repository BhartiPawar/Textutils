import React from 'react';
// import UseState from './Components/UseState';
// import UseEffect from './Components/UseEffect';
// import UseContext from './Components/UseContext';
// import  Reducer  from './Components/Reducer';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-info');
  };
  const toggleMode = (clr) => {
    removeBodyClasses();
    console.log(clr);
    document.body.classList.add('bg-' + clr);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#3c6ea1';
      showAlert('Dark mode has been enabled', 'sucess');
      // document.title = 'TextUtlis - Dark Mode';

      // setInterval(() => {
      // document.title = 'TextUtlis is Amazing  Mode';
      // }, 1000);

      // setInterval(() => {
      // document.title = 'Install TextUtlis Now';
      // }, 500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'sucess');
    }
  };
  return (
    <BrowserRouter>
      <div className="App">
        {/* <UseState /> */}
        {/* <UseEffect /> */}
        {/* <UseContext /> */}
        {/* <Reducer /> */}
        <Navbar
          title="TextUtlis"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter Your Text"
                mode={mode}
              />
            }
          />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
