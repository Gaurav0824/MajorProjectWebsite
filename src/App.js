import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Analysis from './Components/Analysis';
import AnalysisReport from './Components/AnalysisReport';
// import CSVUpload from './Components/CSVUpload';
import Home from './Components/Home';

const App = () => {
  // This state will store the parsed data
  // It state will contain the error when
  // correct file extension is not used
  const [error, setError] = useState('');

  // It will store the file uploaded by the user
  const [file, setFile] = useState('');
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              error={error}
              setError={setError}
              file={file}
              setFile={setFile}
            />
          }
        />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/:type" element={<AnalysisReport />} />
      </Routes>
    </div>
  );
};

export default App;
