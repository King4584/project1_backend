import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Handle errors on the server
server.on('error', (error) => {
  if (error.code === 'EACCES') {
    console.error(`Port ${port} requires elevated privileges`);
  } else if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use`);
  } else {
    console.error(`Error starting server: ${error.message}`);
  }
  process.exit(1); // Exit the process with an error code
});
