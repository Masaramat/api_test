import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [apiData, setApiData] = useState({ headers: {}, body: '' }); // Initialize apiData as an object with headers and body
  const apiUrl = 'https://mydogsapi.azurewebsites.net/api/v1/dogs'; // Replace with your API endpoint

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      // Update apiData with both headers and data
      setApiData({
        headers: response.headers,
        body: JSON.stringify(response.data, null, 2),
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      setApiData({ headers: {}, body: 'Error fetching data' }); // Handle the error
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my api</h1>
        <button onClick={fetchData}>Fetch Data from API</button>
        <br></br>
        <button>
          <a
            href="https://www.postman.com/aviation-geoscientist-33960173/workspace/my-dogs-api/request/29092457-49489a02-e126-493a-b3aa-125b5c953583"
            target="_blank" // This attribute makes the link open in a new tab
            rel="noopener noreferrer" // Recommended for security
          >
            Go to Postman Docs
          </a>
        </button>
        <div className="Api-response">
          {/* Display response headers */}
          <div>
            <h2>Response Headers:</h2>
            <pre>{JSON.stringify(apiData.headers, null, 2)}</pre>
          </div>
          {/* Display response body */}
          <div>
            <h2>Response Body:</h2>
            <pre>{apiData.body}</pre>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;




