// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a route for the root URL that sends "Hello World!" as a response
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Make the server listen on port 3000 and log a message when it starts
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});