import React from 'react';
import Papa from 'papaparse';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Actions from '../Redux/Actions/Actions';
// Allowed extensions for input file
const allowedExtensions = ['csv'];

function CSVUpload({ file, setFile, setError }) {
  const dispatch = useDispatch();
  // This function will be called when
  // the file input changes
  const handleFileChange = (e) => {
    setError('');

    // Check if user has entered the file
    if (e.target.files.length) {
      const inputFile = e.target.files[0];

      // Check the file extensions, if it not
      // included in the allowed extensions
      // we show the error
      const fileExtension = inputFile?.type.split('/')[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError('Please input a csv file');
        return;
      }

      // If input type is correct set the state
      dispatch(Actions.setFile(inputFile));
      setFile(inputFile);
    }
  };
  const handleParse = () => {
    // If user clicks the parse button without
    // a file we show a error
    if (!file) return setError('Enter a valid file');

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();

    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;
      const columns = Object.keys(parsedData[0]);
      console.log(parsedData);
      console.log('colums', columns);
      parsedData.pop();
      dispatch(Actions.setData(parsedData));
      dispatch(Actions.setHeadings(columns));
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex flex-col align-center justify-center">
      <h3 className="text-center font-extrabold text-4xl text-white">
        We do 1. Spam Analysis 2. Sentiment Analysis 3. Topic Analysis.
      </h3>
      <div className="flex align-center justify-center">
        <button
          style={{
            width: '40%',
            outline: 'none',
            border: '1.5px solid #0d74d7',
            color: '#0d74d7',
            backgroundColor: '#fff',
            fontWeight: '700',
            borderRadius: '5px',
            padding: '6px',
            marginTop: '3em',
            marginBottom: '1em',
          }}
        >
          <label
            style={{
              display: 'inline-block',
              cursor: 'pointer',
            }}
            htmlFor="csvInput"
          >
            Enter CSV File
          </label>
          <input
            style={{ display: 'none' }}
            onChange={handleFileChange}
            id="csvInput"
            name="file"
            type="File"
          />
        </button>

        <Link to="/analysis">
          <button
            style={{
              width: '50px',
              outline: 'none',
              border: '1.5px solid #0d74d7',
              color: '#0d74d7',
              backgroundColor: '#fff',
              fontWeight: '700',
              borderRadius: '5px',
              padding: '6px',
              marginTop: '3em',
              marginBottom: '1em',
            }}
            onClick={handleParse}
          >
            OK
          </button>
        </Link>
      </div>
      <h2 className="text-center font-bold text-xl text-red-600">
        Upload CSV for any of the above Analysis.&nbsp;(Should Contain
        &quot;Comments&quot; Column)
      </h2>
      {/*<Link exact to="/analysis">
        <button>Send to API</button>
      </Link>
       <div style={{ marginTop: '3rem' }}>
        {error ? (
          error
        ) : (
          <table
            style={{ border: '1px solid black', borderCollapse: 'collapse' }}
          >
            <thead>
              <tr>
                {headings.length > 1 &&
                  headings.map((h, index) => {
                    return (
                      <th style={{ border: '1px solid black' }} key={index}>
                        {h}
                      </th>
                    );
                  })}
              </tr>
            </thead>
            <tbody>
              {data.length > 1 &&
                data.map((d, index) => {
                  return (
                    <tr key={index}>
                      {headings.map((h, index) => {
                        return (
                          <td style={{ border: '1px solid black' }} key={index}>
                            {d[h]}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </div> */}
    </div>
  );
}

export default CSVUpload;
