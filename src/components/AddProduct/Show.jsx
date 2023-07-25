import React, { useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const Show = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [fileData, setFileData] = useState([]);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);

      // Read the file contents
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result && typeof reader.result === 'string') {
          const csvData = parseCsvData(reader.result);
          setFileData(csvData);
        }
      };
      reader.readAsText(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://api2.tracepharm.io:8009/Product/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle the API response
      if (response.status === 200) {
        setUploadStatus('Upload successful.');
      } else {
        setUploadStatus('Error uploading file.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      console.error('Response:', error.response);
      setUploadStatus('Error uploading file.');
    }
  };

  const parseCsvData = (csvText) => {
    const rows = csvText.split('\n');
    return rows.map((row) => row.split(','));
  };

  return (
    <div>
      <h4>Upload</h4>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      {/* <button onClick={handleUpload}>Upload</button> */}
      {uploadStatus && <p>{uploadStatus}</p>}

      {fileData.length > 0 && (
        <div>
          <h3>CSV Data</h3>
          <Table>
            <tbody>
              {fileData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Show;
